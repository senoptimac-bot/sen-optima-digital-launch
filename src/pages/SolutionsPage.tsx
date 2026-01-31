import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import LeadCaptureScreen from "@/components/solutions/LeadCaptureScreen";
import TypeformQuiz from "@/components/solutions/TypeformQuiz";
import ProcessingAnimation from "@/components/solutions/ProcessingAnimation";
import DiagnosticDashboard from "@/components/solutions/DiagnosticDashboard";
import { LeadData, QuizAnswers, QuizResult, FullDiagnosticData } from "@/types/solutions";
import { calculateResults } from "@/utils/solutionsScoring";

const WEBHOOK_URL = "https://hook.eu1.make.com/safhwh4pa7vt9nadqq99gdr7lq9rnqbr";

type Step = "hero" | "lead-capture" | "quiz" | "processing" | "results";

const SolutionsPage = () => {
  const [currentStep, setCurrentStep] = useState<Step>("hero");
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleStartQuiz = () => {
    setCurrentStep("lead-capture");
  };

  const handleLeadSubmit = (data: LeadData) => {
    setLeadData(data);
    setCurrentStep("quiz");
  };

  const handleQuizComplete = async (answers: QuizAnswers) => {
    setQuizAnswers(answers);
    setCurrentStep("processing");
    
    // Calculate results locally
    const result = calculateResults(answers);
    setQuizResult(result);

    // Prepare full data for webhook
    const fullData: FullDiagnosticData = {
      lead: leadData!,
      answers,
      result,
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
    } catch (error) {
      // Log but don't block - results are calculated locally
      console.log("Webhook notification sent (or timed out)");
    }

    // Wait for processing animation (6-8 seconds)
    setTimeout(() => {
      setCurrentStep("results");
    }, 6500);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {currentStep === "hero" && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <SolutionsHero onStart={handleStartQuiz} />
          </motion.div>
        )}

        {currentStep === "lead-capture" && (
          <motion.div
            key="lead-capture"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <LeadCaptureScreen onSubmit={handleLeadSubmit} />
          </motion.div>
        )}

        {currentStep === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <TypeformQuiz onComplete={handleQuizComplete} />
          </motion.div>
        )}

        {currentStep === "processing" && (
          <motion.div
            key="processing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ProcessingAnimation />
          </motion.div>
        )}

        {currentStep === "results" && quizResult && leadData && quizAnswers && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <DiagnosticDashboard 
              result={quizResult} 
              leadData={leadData}
              answers={quizAnswers}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SolutionsPage;
