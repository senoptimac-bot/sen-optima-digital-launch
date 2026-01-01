import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const soundPlayedRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Preload audio early
  useEffect(() => {
    audioRef.current = new Audio("/startup.mp3");
    audioRef.current.volume = 0.5;
    audioRef.current.preload = "auto";
  }, []);

  const playStartupSound = () => {
    if (soundPlayedRef.current || !audioRef.current) return;
    soundPlayedRef.current = true;
    
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {
      // Fail silently if autoplay is blocked
    });
  };

  useEffect(() => {
    const duration = 1800; // 1.8 seconds
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          // Play startup sound when preloader completes (at 100%)
          playStartupSound();
          // Wait for sound to start playing, then complete
          setTimeout(onComplete, 300);
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
      {/* Logo with Pulse Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
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

      {/* Subtle floating orbs in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-accent/5 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '20%', right: '15%' }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
