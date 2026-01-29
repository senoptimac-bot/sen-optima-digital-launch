import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Step {
  question: string;
  options: { label: string; value: string }[];
}

const steps: Step[] = [
  {
    question: "Quel est votre secteur d'activité ?",
    options: [
      { label: "Commerce", value: "commerce" },
      { label: "Service", value: "service" },
      { label: "Industrie", value: "industrie" },
      { label: "Autre", value: "autre" },
    ],
  },
  {
    question: "Quelle est la taille de votre équipe ?",
    options: [
      { label: "1-5", value: "small" },
      { label: "5-20", value: "medium" },
      { label: "20+", value: "large" },
    ],
  },
  {
    question: "Votre priorité actuelle ?",
    options: [
      { label: "Digitalisation", value: "digital" },
      { label: "Gestion Financière", value: "finance" },
      { label: "Organisation", value: "organisation" },
    ],
  },
];

const getRecommendation = (answers: string[]) => {
  const priority = answers[2];
  switch (priority) {
    case "digital":
      return {
        message: "Nous avons une stratégie digitale sur mesure pour vous.",
        link: "/services#digitalisation",
      };
    case "finance":
      return {
        message: "Optimisez votre gestion financière avec notre accompagnement.",
        link: "/services#finance",
      };
    case "organisation":
      return {
        message: "Structurez votre organisation pour plus de performance.",
        link: "/services#organisation",
      };
    default:
      return {
        message: "Nous avons une stratégie personnalisée pour vous.",
        link: "/services",
      };
  }
};

const DiagnosticExpress = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsComplete(false);
  };

  const recommendation = isComplete ? getRecommendation(answers) : null;
  const progress = ((currentStep + (isComplete ? 1 : 0)) / steps.length) * 100;

  return (
    <section className="py-section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-caption text-foreground/40 uppercase tracking-widest mb-4">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Diagnostic Rapide
            </span>
            <h2 className="text-title text-foreground mb-2">
              Découvrez ce qui <span className="text-accent">bloque</span> votre croissance.
            </h2>
            <p className="text-body text-foreground/40">
              Ne choisissez pas une solution au hasard. Répondez à 3 questions pour savoir exactement quel système Sen'Optima il vous faut.
            </p>
          </div>

          {/* Card */}
          <div className="glass-card rounded-xl p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-caption text-foreground/30 mb-2">
                <span>Étape {Math.min(currentStep + 1, steps.length)}/{steps.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-px bg-foreground/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!isComplete ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Question */}
                  <h3 className="text-body-lg text-foreground mb-6">
                    {steps[currentStep].question}
                  </h3>

                  {/* Options */}
                  <div className="grid grid-cols-2 gap-3">
                    {steps[currentStep].options.map((option) => (
                      <motion.button
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="p-4 rounded-lg bg-foreground/5 border border-foreground/5 text-foreground/70 text-sm transition-all duration-200 hover:bg-foreground/10 hover:border-foreground/10 hover:text-foreground text-left"
                      >
                        {option.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-4"
                >
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-12 h-12 mx-auto mb-6 rounded-full bg-foreground/5 flex items-center justify-center"
                  >
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </motion.div>

                  <h3 className="text-title text-foreground mb-3">
                    {recommendation?.message}
                  </h3>
                  <p className="text-body text-foreground/40 mb-8">
                    Discutons ensemble de votre projet.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
                    <Button 
                      variant="outline" 
                      className="gap-2 border-foreground/20 text-foreground/70 hover:border-accent hover:text-accent w-full sm:w-auto" 
                      asChild
                    >
                      <a href="tel:+221781926969">
                        <Phone className="w-4 h-4" />
                        Appeler un expert
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="gap-2 border-foreground/10 text-foreground/50 hover:border-foreground/20 hover:text-foreground/70 w-full sm:w-auto"
                      onClick={() => navigate("/services")}
                    >
                      Voir nos services
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Reset */}
                  <button
                    onClick={resetQuiz}
                    className="mt-6 text-caption text-foreground/30 hover:text-foreground/50 transition-colors"
                  >
                    Recommencer le diagnostic
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticExpress;