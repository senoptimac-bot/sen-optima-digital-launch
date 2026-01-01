import { useCallback, useRef } from 'react';

// Lightweight HTML5 Audio solution for UI sounds
const createSound = (frequency: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.25) => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  
  gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
};

export const useSoundEffects = () => {
  const isEnabled = useRef(true);

  // Soft glass tap sound for hover
  const playHover = useCallback(() => {
    if (!isEnabled.current) return;
    try {
      createSound(800, 0.08, 'sine', 0.15);
    } catch (e) {
      // Audio context not available
    }
  }, []);

  // Digital confirm sound for click
  const playClick = useCallback(() => {
    if (!isEnabled.current) return;
    try {
      createSound(600, 0.05, 'square', 0.1);
      setTimeout(() => createSound(900, 0.08, 'sine', 0.15), 50);
    } catch (e) {
      // Audio context not available
    }
  }, []);

  const toggleSound = useCallback(() => {
    isEnabled.current = !isEnabled.current;
  }, []);

  return { playHover, playClick, toggleSound };
};

export default useSoundEffects;
