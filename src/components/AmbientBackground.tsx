import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const AmbientBackground = () => {
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();
  const duration = isMobile ? 38 : 30;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" style={{ background: '#0E1626' }}>
      {/* Base radial gradient — subtle depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 40%, hsl(220 32% 13%) 0%, #0E1626 65%, #0A1018 100%)',
        }}
      />

      {/* Breathing radial light */}
      {!prefersReduced && (
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            background:
              'radial-gradient(ellipse 50% 40% at 48% 45%, hsl(220 28% 15%) 0%, transparent 70%)',
          }}
        />
      )}

      {/* Golden glow — desktop only */}
      {!isMobile && !prefersReduced && (
        <motion.div
          className="absolute"
          style={{
            width: '650px',
            height: '420px',
            top: '25%',
            left: '55%',
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(ellipse at center, rgba(212,167,59,0.055) 0%, rgba(212,167,59,0.015) 45%, transparent 70%)',
            filter: 'blur(90px)',
            borderRadius: '50%',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.06, 1],
            x: [0, 12, 0],
            y: [0, -8, 0],
          }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      {/* Mobile — static golden hint */}
      {isMobile && (
        <div
          className="absolute"
          style={{
            width: '280px',
            height: '180px',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(ellipse at center, rgba(212,167,59,0.04) 0%, transparent 70%)',
            filter: 'blur(60px)',
            borderRadius: '50%',
          }}
        />
      )}

      {/* Secondary depth pulse */}
      {!prefersReduced && (
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{
            duration: duration + 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 10,
          }}
          style={{
            background:
              'radial-gradient(ellipse 35% 30% at 28% 70%, hsl(220 28% 12%) 0%, transparent 60%)',
          }}
        />
      )}
    </div>
  );
};

export default AmbientBackground;
