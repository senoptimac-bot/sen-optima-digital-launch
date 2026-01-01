import { useEffect } from 'react';

/**
 * Hook to unlock audio context on first user interaction
 * Required for mobile browsers that block autoplay
 */
let audioUnlocked = false;

export const useAudioUnlock = () => {
  useEffect(() => {
    if (audioUnlocked) return;

    const unlockAudio = () => {
      if (audioUnlocked) return;
      
      // Create and play a silent audio to unlock the context
      const silentAudio = new Audio();
      silentAudio.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
      silentAudio.volume = 0;
      
      silentAudio.play()
        .then(() => {
          audioUnlocked = true;
          silentAudio.pause();
        })
        .catch(() => {
          // Still blocked, will retry on next interaction
        });
    };

    // Listen for first user interaction
    const events = ['click', 'touchstart', 'keydown'];
    
    events.forEach(event => {
      document.addEventListener(event, unlockAudio, { once: false, passive: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, unlockAudio);
      });
    };
  }, []);
};

export const isAudioUnlocked = () => audioUnlocked;

export default useAudioUnlock;