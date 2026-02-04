import { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DiagnosticAnswers } from "@/types/diagnostic";
import { DIAGNOSTIC_QUESTIONS, BLOCK_MESSAGES, REASSURANCE_MESSAGES, TOTAL_QUESTIONS, QUESTIONS_PER_BLOCK, TOTAL_BLOCKS } from "@/config/diagnostic";

interface DiagnosticQuizProps {
  onComplete: (answers: DiagnosticAnswers) => void;
}

// Memoized Progress Bar with explicit step indication
interface ProgressBarProps {
  current: number;
  total: number;
  currentBlock: number;
  totalBlocks: number;
  blockMessage?: string;
  reassuranceMessage?: string;
}

const ProgressBar = memo(({ current, total, currentBlock, totalBlocks, blockMessage, reassuranceMessage }: ProgressBarProps) => {
  const progress = ((current + 1) / total) * 100;
  
  return (
    <div className="w-full">
      {/* Step indicator - more explicit */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-foreground font-subheading font-medium">
          Étape {currentBlock + 1} sur {totalBlocks}
        </span>
        <span className="text-sm text-muted-foreground font-subheading">
          Question {current + 1}/{total}
        </span>
      </div>
      
      {/* Progress bar */}
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      
      {/* Micro-messages rassurants */}
      <AnimatePresence mode="wait">
        {(blockMessage || reassuranceMessage) && (
          <motion.p
            key={blockMessage || reassuranceMessage}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-accent mt-2 font-subheading"
          >
            {blockMessage || reassuranceMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
});
ProgressBar.displayName = "ProgressBar";

// Memoized Option Button
interface OptionButtonProps {
  value: "yes" | "partial" | "no";
  label: string;
  isSelected: boolean;
  onSelect: (value: "yes" | "partial" | "no") => void;
  disabled?: boolean;
}

const OptionButton = memo(({ value, label, isSelected, onSelect, disabled }: OptionButtonProps) => (
  <motion.button
    onClick={() => !disabled && onSelect(value)}
    disabled={disabled}
    whileTap={{ scale: 0.98 }}
    className={`w-full min-h-[56px] p-4 rounded-xl border text-left touch-target
      transition-all duration-200 ease-out
      ${isSelected
        ? "border-accent bg-accent/15 shadow-md shadow-accent/20"
        : "border-border hover:border-accent/50 active:bg-accent/10 bg-background/50"
      }
      ${disabled ? "pointer-events-none opacity-60" : ""}`}
  >
    <div className="flex items-center justify-between gap-4">
      <span className="font-heading font-semibold text-foreground text-base">
        {label}
      </span>
      
      <AnimatePresence>
        {isSelected && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0"
          >
            <Check className="w-4 h-4 text-accent-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.button>
));
OptionButton.displayName = "OptionButton";

const DiagnosticQuiz = ({ onComplete }: DiagnosticQuizProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<DiagnosticAnswers>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedValue, setSelectedValue] = useState<"yes" | "partial" | "no" | null>(null);

  const question = DIAGNOSTIC_QUESTIONS[currentIndex];
  const isLastQuestion = currentIndex === TOTAL_QUESTIONS - 1;

  // Calculate current block (0-indexed)
  const currentBlock = Math.floor(currentIndex / QUESTIONS_PER_BLOCK);
  const previousBlock = currentIndex > 0 ? Math.floor((currentIndex - 1) / QUESTIONS_PER_BLOCK) : -1;
  
  // Show block message when entering a new block (after completing previous)
  const showBlockMessage = currentBlock > previousBlock && previousBlock >= 0 
    ? BLOCK_MESSAGES[previousBlock] 
    : undefined;
  
  // Show reassurance message at specific question indices
  const reassuranceMessage = REASSURANCE_MESSAGES[currentIndex];

  const handleOptionSelect = useCallback((value: "yes" | "partial" | "no") => {
    setSelectedValue(value);
    setIsTransitioning(true);
    
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);
    
    // Transition fluide (300-400ms)
    setTimeout(() => {
      if (isLastQuestion) {
        onComplete(newAnswers);
      } else {
        setCurrentIndex(prev => prev + 1);
        setSelectedValue(null);
      }
      setIsTransitioning(false);
    }, 350);
  }, [answers, question.id, isLastQuestion, onComplete]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0 && !isTransitioning) {
      setCurrentIndex(prev => prev - 1);
      setSelectedValue(null);
    }
  }, [currentIndex, isTransitioning]);

  const currentAnswer = selectedValue || answers[question.id];

  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-6 pb-6 px-4">
      {/* Progress Bar - fixed at top */}
      <div className="w-full max-w-2xl mb-8">
        <ProgressBar 
          current={currentIndex} 
          total={TOTAL_QUESTIONS} 
          currentBlock={currentBlock}
          totalBlocks={TOTAL_BLOCKS}
          blockMessage={showBlockMessage}
          reassuranceMessage={reassuranceMessage}
        />
      </div>

      {/* Question Card */}
      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-5 md:p-8"
          >
            {/* Block indicator */}
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-subheading">
                {question.blockName}
              </span>
            </div>

            {/* Question */}
            <h2 className="text-lg md:text-2xl font-heading font-bold text-foreground mb-6 text-left">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <motion.div
                  key={option.value}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <OptionButton
                    value={option.value}
                    label={option.label}
                    isSelected={currentAnswer === option.value}
                    onSelect={handleOptionSelect}
                    disabled={isTransitioning}
                  />
                </motion.div>
              ))}
            </div>

            {/* Back button */}
            <div className="mt-6 pt-4 border-t border-border">
              <Button
                variant="ghost"
                onClick={handlePrevious}
                disabled={currentIndex === 0 || isTransitioning}
                className="gap-2 text-muted-foreground hover:text-foreground touch-target"
              >
                <ArrowLeft className="w-4 h-4" />
                Précédent
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DiagnosticQuiz;
