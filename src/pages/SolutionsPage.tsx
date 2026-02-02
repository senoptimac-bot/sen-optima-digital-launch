import { useState, useCallback } from "react";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import LeadCaptureScreen from "@/components/solutions/LeadCaptureScreen";
import TypeformQuiz from "@/components/solutions/TypeformQuiz";
import ProcessingAnimation from "@/components/solutions/ProcessingAnimation";
import DiagnosticDashboard from "@/components/solutions/DiagnosticDashboard";
import { LeadData, QuizAnswers, QuizResult, FullDiagnosticData } from "@/types/solutions";
import { calculateResults } from "@/utils/solutionsScoring";
import { sendWebhook } from "@/lib/webhookService";

type Step = "hero" | "quiz" | "lead-capture" | "processing" | "results";
type WebhookError = string | null;

const SolutionsPage = () => {
  const [currentStep, setCurrentStep] = useState<Step>("hero");
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [webhookError, setWebhookError] = useState<WebhookError>(null);

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
    setWebhookError(null);
    setCurrentStep("processing");

    // Prepare full data for webhook
    const fullData: FullDiagnosticData = {
      lead: data,
      answers: quizAnswers!,
      result: quizResult!,
    };

    // Send to webhook with proper error handling
    const webhookResult = await sendWebhook(fullData);
    
    if (!webhookResult.success) {
      // Store error for potential display, but don't block the flow
      setWebhookError(webhookResult.error || "Erreur d'envoi");
      // Log for monitoring
      if (process.env.NODE_ENV === "development") {
        console.warn("Webhook failed, continuing to results:", webhookResult.error);
      }
    }

    // Continue to results regardless - local scoring is complete
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