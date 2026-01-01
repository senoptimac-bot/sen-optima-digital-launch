import { ReactNode, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useSound } from './SoundContext';
import { Button, ButtonProps } from './ui/button';

interface InteractiveButtonProps extends ButtonProps {
  children: ReactNode;
}

const InteractiveButton = forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  ({ children, onClick, ...props }, ref) => {
    const { playHover, playClick } = useSound();

    return (
      <motion.div
        onMouseEnter={playHover}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15 }}
      >
        <Button
          ref={ref}
          onClick={(e) => {
            playClick();
            onClick?.(e);
          }}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  }
);

InteractiveButton.displayName = 'InteractiveButton';

export default InteractiveButton;
