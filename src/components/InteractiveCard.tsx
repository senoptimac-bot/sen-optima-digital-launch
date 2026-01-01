import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useSound } from './SoundContext';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const InteractiveCard = ({ children, className = '', onClick }: InteractiveCardProps) => {
  const { playHover, playClick } = useSound();

  return (
    <motion.div
      className={className}
      onMouseEnter={playHover}
      onClick={() => {
        playClick();
        onClick?.();
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default InteractiveCard;
