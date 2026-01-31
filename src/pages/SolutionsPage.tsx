import { useState, useCallback } from "react";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import LeadCaptureScreen from "@/components/solutions/LeadCaptureScreen";
import TypeformQuiz from "@/components/solutions/TypeformQuiz";
import ProcessingAnimation from "@/components/solutions/ProcessingAnimation";
import DiagnosticDashboard from "@/components/solutions/DiagnosticDashboard";
import { LeadData, QuizAnswers, QuizResult, FullDiagnosticData } from "@/types/solutions";
import { calculateResults } from "@/utils/solutionsScoring";

const WEBHOOK_URL = "https://hook.eu1.make.com/safhwh4pa7vt9nadqq99gdr7lq9rnqbr";

// New flow: hero → quiz → lead-capture → processing → results
type Step = "hero" | "quiz" | "lead-capture" | "processing" | "results";

const SolutionsPage = () => {
  const [currentStep, setCurrentStep] = useState<Step>("hero");
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  // Hero → Quiz (direct, no friction)
  const handleStartQuiz = useCallback(() => {
    setCurrentStep("quiz");
  }, []);

  // Quiz complete → Lead capture (after engagement)
  const handleQuizComplete = useCallback((answers: QuizAnswers) => {
    setQuizAnswers(answers);
    // Calculate results immediately (ready for after lead capture)
    const result = calculateResults(answers);
    setQuizResult(result);
    // Show lead capture AFTER quiz completion
    setCurrentStep("lead-capture");
  }, []);

  // Lead submitted → Processing → Results
  const handleLeadSubmit = useCallback(async (data: LeadData) => {
    setLeadData(data);
    setCurrentStep("processing");

    // Prepare full data for webhook
    const fullData: FullDiagnosticData = {
      lead: data,
      answers: quizAnswers!,
      result: quizResult!,
    };

    // Send to webhook (fire and forget with timeout)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
    } catch {
      // Log but don't block - results are calculated locally
      console.log("Webhook notification sent (or timed out)");
    }

    // Wait for processing animation (6-8 seconds)
    setTimeout(() => {
      setCurrentStep("results");
    }, 6500);
  }, [quizAnswers, quizResult]);

  return (
    <div className="min-h-screen bg-background">
      {currentStep === "hero" && <SolutionsHero onStart={handleStartQuiz} />}
      {currentStep === "quiz" && <TypeformQuiz onComplete={handleQuizComplete} />}
      {currentStep === "lead-capture" && <LeadCaptureScreen onSubmit={handleLeadSubmit} />}
      {currentStep === "processing" && <ProcessingAnimation />}
      {currentStep === "results" && quizResult && leadData && quizAnswers && (
        <DiagnosticDashboard 
          result={quizResult} 
          leadData={leadData}
          answers={quizAnswers}
        />
      )}
    </div>
  );
};

export default SolutionsPage;