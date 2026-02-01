import { memo, useMemo } from "react";

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

/**
 * Ultra-light floating particle effect using pure CSS animations.
 * Creates a subtle "digital stardust" ambiance without impacting performance.
 * Each particle is a tiny CSS element with randomized position and animation.
 */
const FloatingParticles = memo(({ count = 25, className = "" }: FloatingParticlesProps) => {
  // Generate particles with random properties (memoized for performance)
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      // Random position
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      // Random size (1-3px)
      size: 1 + Math.random() * 2,
      // Random animation duration (20-50s for very slow movement)
      duration: 20 + Math.random() * 30,
      // Random delay to stagger animations
      delay: Math.random() * 20,
      // Random opacity (very subtle: 0.1-0.4)
      opacity: 0.1 + Math.random() * 0.3,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: "hsl(210, 30%, 85%)",
            opacity: particle.opacity,
            filter: "blur(0.5px)",
            boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px hsla(210, 40%, 80%, 0.3)`,
            animation: `floatParticle${particle.id % 5} ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Keyframes for 5 different float patterns (reused across particles) */}
      <style>{`
        @keyframes floatParticle0 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: inherit;
          }
          25% {
            transform: translate(30px, -20px) scale(1.2);
            opacity: 0.5;
          }
          50% {
            transform: translate(-10px, -40px) scale(0.8);
            opacity: 0.2;
          }
          75% {
            transform: translate(20px, -10px) scale(1.1);
            opacity: 0.4;
          }
        }
        
        @keyframes floatParticle1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: inherit;
          }
          33% {
            transform: translate(-25px, -30px) scale(0.9);
            opacity: 0.3;
          }
          66% {
            transform: translate(15px, -50px) scale(1.3);
            opacity: 0.5;
          }
        }
        
        @keyframes floatParticle2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-20px, -35px) scale(1.15);
          }
        }
        
        @keyframes floatParticle3 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: inherit;
          }
          40% {
            transform: translate(35px, -25px);
            opacity: 0.6;
          }
          80% {
            transform: translate(-15px, -45px);
            opacity: 0.15;
          }
        }
        
        @keyframes floatParticle4 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: inherit;
          }
          30% {
            transform: translate(-30px, -15px) scale(1.1);
            opacity: 0.4;
          }
          70% {
            transform: translate(25px, -40px) scale(0.85);
            opacity: 0.25;
          }
        }
      `}</style>
    </div>
  );
});

FloatingParticles.displayName = "FloatingParticles";

export default FloatingParticles;
