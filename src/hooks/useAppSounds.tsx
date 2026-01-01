import { useCallback, useRef, useEffect } from 'react';

/**
 * INSTRUCTIONS POUR LE CLIENT:
 * ============================
 * Pour activer les sons UI, veuillez déposer vos fichiers audio dans le dossier /public/sounds/ :
 * - /public/sounds/startup.mp3 (son d'ambiance futuriste à l'ouverture)
 * - /public/sounds/click.mp3 (son digital court pour les clics)
 * - /public/sounds/success.mp3 (son harmonieux pour les validations)
 * 
 * Les sons s'activeront automatiquement après le premier clic de l'utilisateur
 * (requis par Chrome/Safari pour des raisons de sécurité).
 * 
 * Si les fichiers sont absents, le site fonctionnera normalement sans son.
 */

// Audio instances cached for performance
let startupAudio: HTMLAudioElement | null = null;
let clickAudio: HTMLAudioElement | null = null;
let successAudio: HTMLAudioElement | null = null;
let audioUnlocked = false;
let audioInitialized = false;

// Preload audio files
const preloadAudio = () => {
  if (typeof window === 'undefined' || audioInitialized) return;
  
  audioInitialized = true;
  
  try {
    startupAudio = new Audio('/sounds/startup.mp3');
    startupAudio.volume = 0.3; // 30% volume
    startupAudio.preload = 'auto';
    
    clickAudio = new Audio('/sounds/click.mp3');
    clickAudio.volume = 0.25; // 25% volume
    clickAudio.preload = 'auto';
    
    successAudio = new Audio('/sounds/success.mp3');
    successAudio.volume = 0.3; // 30% volume
    successAudio.preload = 'auto';
  } catch (e) {
    // Audio files not available - silent fail
    console.log('Audio files not loaded - sounds disabled');
  }
};

// Unlock audio on first user interaction (required by browsers)
const unlockAudio = () => {
  if (audioUnlocked) return;
  
  const silentPlay = () => {
    if (clickAudio) {
      const originalVolume = clickAudio.volume;
      clickAudio.volume = 0;
      clickAudio.play().then(() => {
        clickAudio!.pause();
        clickAudio!.currentTime = 0;
        clickAudio!.volume = originalVolume;
        audioUnlocked = true;
      }).catch(() => {
        // Still blocked, will try again on next interaction
      });
    }
  };
  
  silentPlay();
};

export const useAppSounds = () => {
  const isEnabled = useRef(true);

  // Initialize audio on mount
  useEffect(() => {
    preloadAudio();
    
    // Add interaction listeners to unlock audio
    const handleFirstInteraction = () => {
      unlockAudio();
    };
    
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  // Play startup sound (for preloader completion)
  const playStartup = useCallback(() => {
    if (!isEnabled.current || !startupAudio) return;
    
    try {
      startupAudio.currentTime = 0;
      startupAudio.play().catch(() => {
        // Silently fail - autoplay blocked by browser
      });
    } catch (e) {
      // Silent error handling
    }
  }, []);

  // Play click sound (for buttons and navigation)
  const playClick = useCallback(() => {
    if (!isEnabled.current) return;
    
    // Try to unlock audio on click
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

  // Play success sound (for form validation)
  const playSuccess = useCallback(() => {
    if (!isEnabled.current || !successAudio) return;
    
    try {
      successAudio.currentTime = 0;
      successAudio.play().catch(() => {
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

  return { 
    playStartup, 
    playClick, 
    playSuccess, 
    toggleSound, 
    isEnabled: isEnabled.current 
  };
};

export default useAppSounds;
