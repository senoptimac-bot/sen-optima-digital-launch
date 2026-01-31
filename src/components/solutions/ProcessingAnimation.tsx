import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProcessingAnimationProps {
  onComplete?: () => void;
}

const PROCESSING_MESSAGES = [
  { text: "Analyse des vecteurs de croissance Sen'Optima en cours...", icon: "📊" },
  { text: "Détection des failles de processus...", icon: "🔍" },
  { text: "Calcul de votre Revenue Gap (Perte d'opportunité)...", icon: "💰" },
  { text: "Finalisation du verdict de l'Expert IA...", icon: "🤖" },
];

const ProcessingAnimation = ({ onComplete }: ProcessingAnimationProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 60); // ~6 seconds total

    // Message cycling
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev >= PROCESSING_MESSAGES.length - 1) {
          clearInterval(messageInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Animated Logo/Spinner */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-32 h-32 mx-auto mb-10"
        >
          {/* Outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-accent/20 border-t-accent"
          />
          
          {/* Middle ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 rounded-full border-4 border-solution/20 border-t-solution"
          />
          
          {/* Inner pulse */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-8 rounded-full bg-gradient-to-br from-accent/30 to-solution/30 backdrop-blur-sm"
          />
          
          {/* Center icon */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center text-3xl"
          >
            🧠
          </motion.div>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full bg-gradient-to-r from-accent via-solution to-accent rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <span className="text-sm text-muted-foreground font-subheading">{progress}%</span>
        </div>

        {/* Dynamic Messages */}
        <div className="h-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-2"
            >
              <span className="text-4xl block mb-3">
                {PROCESSING_MESSAGES[currentMessageIndex].icon}
              </span>
              <p className="text-lg text-foreground font-heading">
                {PROCESSING_MESSAGES[currentMessageIndex].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sm text-muted-foreground mt-6 font-subheading"
        >
          Ne fermez pas cette page...
        </motion.p>
      </div>
    </section>
  );
};

export default ProcessingAnimation;
