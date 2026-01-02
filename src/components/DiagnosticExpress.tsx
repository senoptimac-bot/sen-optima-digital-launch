import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Sparkles } from "lucide-react";
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
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-left md:text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Diagnostic Rapide</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
              Trouvez votre stratégie en{" "}
              <span className="text-accent">30 secondes</span>
            </h2>
            <p className="text-foreground/60">
              Répondez à 3 questions simples pour découvrir nos solutions adaptées.
            </p>
          </div>

          {/* Card */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Dark Glass Background */}
            <div className="absolute inset-0 bg-[#0a1628]/90 backdrop-blur-xl" />
            <div className="absolute inset-0 rounded-2xl border border-accent/30" />
            
            <div className="relative p-6 md:p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-foreground/50 mb-2">
                  <span>Étape {Math.min(currentStep + 1, steps.length)}/{steps.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
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
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-6 text-left">
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
                          className="p-4 rounded-xl bg-white/5 border border-white/10 text-foreground font-medium text-sm md:text-base transition-all duration-200 hover:bg-accent/20 hover:border-accent/50 hover:text-accent text-left"
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
                    className="text-left md:text-center py-4"
                  >
                    {/* Success Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 mx-auto md:mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center"
                    >
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </motion.div>

                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">
                      {recommendation?.message}
                    </h3>
                    <p className="text-foreground/60 mb-8">
                      Discutons ensemble de votre projet et de vos objectifs.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-start md:justify-center">
                      <Button variant="cta" className="gap-2" asChild>
                        <a href="tel:+221781926969">
                          <Phone className="w-4 h-4" />
                          Appeler un expert
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="gap-2 border-accent/30 text-accent hover:bg-accent/10"
                        asChild
                      >
                        <a href={recommendation?.link}>
                          Voir nos services
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>

                    {/* Reset */}
                    <button
                      onClick={resetQuiz}
                      className="mt-6 text-sm text-foreground/40 hover:text-foreground/60 transition-colors"
                    >
                      Recommencer le diagnostic
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticExpress;
