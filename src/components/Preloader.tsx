import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

// Single audio instance - persists across component lifecycle
let startupAudio: HTMLAudioElement | null = null;

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const soundPlayedRef = useRef(false);

  // Preload audio immediately on mount
  useEffect(() => {
    if (!startupAudio) {
      startupAudio = new Audio("/startup.mp3");
      startupAudio.volume = 0.6;
      startupAudio.preload = "auto";
    }
  }, []);

  // Play sound when logo becomes visible and starts pulsing
  useEffect(() => {
    if (logoVisible && !soundPlayedRef.current) {
      soundPlayedRef.current = true;
      
      // Play startup sound when logo animation starts
      if (startupAudio) {
        startupAudio.currentTime = 0;
        startupAudio.play().catch(() => {
          // If autoplay blocked, we'll unlock on first interaction
        });
      }
    }
  }, [logoVisible]);

  // Progress bar animation
  useEffect(() => {
    const duration = 1800;
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Logo with Pulse Animation - triggers sound on animate */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onAnimationComplete={() => setLogoVisible(true)}
        className="mb-8"
      >
        <motion.img
          src="/logo.svg"
          alt="Sen'Optima Consulting"
          className="w-48 md:w-64 h-auto"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Progress Bar Container */}
      <div className="w-64 md:w-80">
        <div className="h-1 bg-muted/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        {/* Percentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-4 text-sm text-muted-foreground font-medium"
        >
          {Math.round(progress)}%
        </motion.p>
      </div>

    </motion.div>
  );
};

export default Preloader;