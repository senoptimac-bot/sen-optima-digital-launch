import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const PremiumBackground = () => {
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();

  // Skip animation entirely for reduced motion preference
  if (prefersReduced) {
    return (
      <div className="absolute inset-0 z-0" style={{ background: '#0B1220' }}>
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 45%, hsl(220 35% 14%) 0%, #0B1220 70%, #060D18 100%)',
          }}
        />
      </div>
    );
  }

  const duration = isMobile ? 35 : 28;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" style={{ background: '#0B1220' }}>
      {/* Base radial gradient - static depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 50% 45%, hsl(220 35% 14%) 0%, #0B1220 65%, #060D18 100%)',
        }}
      />

      {/* Animated radial light - breathing effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 48% 50%, hsl(220 30% 16%) 0%, transparent 70%)',
        }}
      />

      {/* Golden glow - organic shape, very subtle */}
      {!isMobile && (
        <motion.div
          className="absolute"
          style={{
            width: '600px',
            height: '400px',
            top: '30%',
            left: '55%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(ellipse at center, rgba(212, 167, 59, 0.06) 0%, rgba(212, 167, 59, 0.02) 40%, transparent 70%)',
            filter: 'blur(80px)',
            borderRadius: '50%',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.08, 1],
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Mobile: simpler static golden hint */}
      {isMobile && (
        <div
          className="absolute"
          style={{
            width: '300px',
            height: '200px',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(ellipse at center, rgba(212, 167, 59, 0.05) 0%, transparent 70%)',
            filter: 'blur(60px)',
            borderRadius: '50%',
          }}
        />
      )}

      {/* Secondary subtle depth layer */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: duration + 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
        style={{
          background: 'radial-gradient(ellipse 40% 35% at 30% 70%, hsl(220 30% 13%) 0%, transparent 60%)',
        }}
      />
    </div>
  );
};

export default PremiumBackground;
