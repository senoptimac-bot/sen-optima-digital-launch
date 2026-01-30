import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsQuiz from "@/components/solutions/SolutionsQuiz";
import SolutionsResults from "@/components/solutions/SolutionsResults";
import SolutionsEducational from "@/components/solutions/SolutionsEducational";
import SolutionsConversion from "@/components/solutions/SolutionsConversion";
import { QuizAnswers, QuizResult } from "@/types/solutions";
import { calculateResults } from "@/utils/solutionsScoring";

const SolutionsPage = () => {
  const [currentStep, setCurrentStep] = useState<"hero" | "quiz" | "processing" | "results">("hero");
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleStartQuiz = () => {
    setCurrentStep("quiz");
  };

  const handleQuizComplete = (answers: QuizAnswers) => {
    setQuizAnswers(answers);
    setCurrentStep("processing");
    
    // 3-second processing animation
    setTimeout(() => {
      const result = calculateResults(answers);
      setQuizResult(result);
      setCurrentStep("results");
    }, 3000);
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

        {currentStep === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <SolutionsQuiz onComplete={handleQuizComplete} />
          </motion.div>
        )}

        {currentStep === "processing" && (
          <motion.div
            key="processing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-8 border-4 border-accent/30 border-t-accent rounded-full"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-foreground font-heading"
              >
                Analyse en cours...
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-muted-foreground mt-2 font-subheading"
              >
                L'IA évalue votre maturité digitale
              </motion.p>
            </div>
          </motion.div>
        )}

        {currentStep === "results" && quizResult && quizAnswers && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <SolutionsResults result={quizResult} />
            <SolutionsEducational />
            <SolutionsConversion result={quizResult} answers={quizAnswers} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SolutionsPage;
