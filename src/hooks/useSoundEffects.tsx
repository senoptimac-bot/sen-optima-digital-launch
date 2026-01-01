import { useCallback, useRef, useEffect } from 'react';

/**
 * INSTRUCTIONS POUR LE CLIENT:
 * ============================
 * Pour activer les sons UI, veuillez déposer vos fichiers audio dans le dossier /public :
 * - /public/sounds/hover.mp3 (son léger de survol)
 * - /public/sounds/click.mp3 (son de clic/confirmation)
 * 
 * Les sons s'activeront automatiquement après le premier clic de l'utilisateur
 * (requis par Chrome/Safari pour des raisons de sécurité).
 * 
 * Si les fichiers sont absents, le site fonctionnera normalement sans son.
 */

// Audio instances cached for performance
let hoverAudio: HTMLAudioElement | null = null;
let clickAudio: HTMLAudioElement | null = null;
let audioUnlocked = false;

// Lazy preload audio files - only when needed
const preloadAudio = () => {
  if (typeof window === 'undefined') return;
  
  // Use setTimeout to defer audio loading after page load
  setTimeout(() => {
    try {
      hoverAudio = new Audio('/sounds/hover.mp3');
      hoverAudio.volume = 0.2;
      hoverAudio.preload = 'none'; // Don't preload until needed
      
      clickAudio = new Audio('/sounds/click.mp3');
      clickAudio.volume = 0.25;
      clickAudio.preload = 'none'; // Don't preload until needed
    } catch (e) {
      // Audio files not available - silent fail
      console.log('Audio files not loaded - sounds disabled');
    }
  }, 2000); // Defer by 2 seconds after page load
};

// Unlock audio on first user interaction (required by browsers)
const unlockAudio = () => {
  if (audioUnlocked) return;
  
  // Try to play a silent audio to unlock
  const silentPlay = () => {
    if (hoverAudio) {
      hoverAudio.volume = 0;
      hoverAudio.play().then(() => {
        hoverAudio!.pause();
        hoverAudio!.currentTime = 0;
        hoverAudio!.volume = 0.2;
        audioUnlocked = true;
      }).catch(() => {
        // Still blocked, will try again on next click
      });
    }
  };
  
  silentPlay();
};

export const useSoundEffects = () => {
  const isEnabled = useRef(true);

  // Initialize audio on mount
  useEffect(() => {
    preloadAudio();
    
    // Add click listener to unlock audio
    const handleFirstInteraction = () => {
      unlockAudio();
    };
    
    document.addEventListener('click', handleFirstInteraction, { once: false });
    document.addEventListener('touchstart', handleFirstInteraction, { once: false });
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  // Play hover sound
  const playHover = useCallback(() => {
    if (!isEnabled.current || !audioUnlocked || !hoverAudio) return;
    
    try {
      hoverAudio.currentTime = 0;
      hoverAudio.play().catch(() => {
        // Silently fail if audio can't play
      });
    } catch (e) {
      // Silent error handling
    }
  }, []);

  // Play click sound
  const playClick = useCallback(() => {
    if (!isEnabled.current || !hoverAudio) return;
    
    // Also unlock audio on click
    if (!audioUnlocked) {
      unlockAudio();
    }
    
    if (!clickAudio) return;
    
    try {
      clickAudio.currentTime = 0;
      clickAudio.play().catch(() => {
        // Silently fail if audio can't play
      });
    } catch (e) {
      // Silent error handling
    }
  }, []);

  // Toggle sound on/off
  const toggleSound = useCallback(() => {
    isEnabled.current = !isEnabled.current;
    return isEnabled.current;
  }, []);

  return { playHover, playClick, toggleSound, isEnabled: isEnabled.current };
};

export default useSoundEffects;
