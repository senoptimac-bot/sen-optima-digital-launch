import { createContext, useContext, ReactNode } from 'react';
import { useSoundEffects } from '@/hooks/useSoundEffects';

interface SoundContextType {
  playHover: () => void;
  playClick: () => void;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const sounds = useSoundEffects();
  
  return (
    <SoundContext.Provider value={sounds}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    return { playHover: () => {}, playClick: () => {}, toggleSound: () => {} };
  }
  return context;
};
