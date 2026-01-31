import { useState, useEffect, memo } from "react";

interface ProcessingAnimationProps {
  onComplete?: () => void;
}

const PROCESSING_MESSAGES = [
  { text: "Analyse des vecteurs de croissance Sen'Optima en cours..." },
  { text: "Détection des failles de processus..." },
  { text: "Calcul de votre Revenue Gap (Perte d'opportunité)..." },
  { text: "Finalisation du verdict de l'Expert IA..." },
];

// CSS-only spinner with GPU acceleration
const Spinner = memo(() => (
  <div className="relative w-32 h-32 mx-auto mb-10">
    {/* Outer ring - Pure CSS rotation */}
    <div className="absolute inset-0 rounded-full border-4 border-accent/20 border-t-accent spinner-outer" />
    
    {/* Middle ring - Pure CSS rotation */}
    <div className="absolute inset-3 rounded-full border-4 border-solution/20 border-t-solution spinner-inner" />
    
    {/* Inner pulse - Pure CSS */}
    <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent/30 to-solution/30 spinner-pulse" />
    
    {/* Center icon - Pure CSS fade */}
    <div className="absolute inset-0 flex items-center justify-center text-3xl spinner-icon">
      <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    </div>
  </div>
));
Spinner.displayName = "Spinner";

// Memoized message component
interface MessageProps {
  text: string;
  index: number;
}

const Message = memo(({ text, index }: MessageProps) => (
  <div 
    key={index}
    className="message-fade-in space-y-2"
  >
    <p className="text-lg text-foreground font-heading">
      {text}
    </p>
  </div>
));
Message.displayName = "Message";

const ProcessingAnimation = ({ onComplete }: ProcessingAnimationProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Use requestAnimationFrame for smoother progress
    let start: number | null = null;
    const duration = 6000; // 6 seconds total
    
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      
      setProgress(Math.round(newProgress));
      
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };
    
    const animationId = requestAnimationFrame(animate);

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
      cancelAnimationFrame(animationId);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* CSS-only Animated Spinner */}
        <Spinner />

        {/* Progress Bar - GPU accelerated */}
        <div className="mb-8">
          <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-accent via-solution to-accent rounded-full gpu-accelerated"
              style={{ 
                transform: `scaleX(${progress / 100})`,
                transformOrigin: 'left',
                width: '100%'
              }}
            />
          </div>
          <span className="text-sm text-muted-foreground font-subheading">{progress}%</span>
        </div>

        {/* Dynamic Messages - Fixed height container */}
        <div className="h-20 flex items-center justify-center">
          <Message 
            text={PROCESSING_MESSAGES[currentMessageIndex].text} 
            index={currentMessageIndex} 
          />
        </div>

        {/* Subtitle */}
        <p className="text-sm text-muted-foreground mt-6 font-subheading fade-in-delayed">
          Ne fermez pas cette page...
        </p>
      </div>
    </section>
  );
};

export default ProcessingAnimation;