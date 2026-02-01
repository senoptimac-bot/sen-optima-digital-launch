import { memo, useMemo } from "react";

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

/**
 * Ultra-light floating particle effect with cyan/blue glow accents.
 * Creates a subtle "digital stardust" ambiance inspired by futuristic tech aesthetic.
 * Each particle is a tiny CSS element with randomized position and soft glow.
 */
const FloatingParticles = memo(({ count = 25, className = "" }: FloatingParticlesProps) => {
  // Generate particles with random properties (memoized for performance)
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      // Mix of cyan, blue, and white particles for tech feel
      const colorVariants = [
        { bg: "hsl(195, 70%, 75%)", glow: "hsla(195, 80%, 70%, 0.4)" }, // Cyan
        { bg: "hsl(210, 60%, 80%)", glow: "hsla(210, 70%, 75%, 0.35)" }, // Light blue
        { bg: "hsl(220, 40%, 85%)", glow: "hsla(220, 50%, 80%, 0.3)" }, // Soft blue
        { bg: "hsl(0, 0%, 90%)", glow: "hsla(0, 0%, 85%, 0.25)" }, // White
        { bg: "hsl(260, 50%, 75%)", glow: "hsla(260, 60%, 70%, 0.3)" }, // Purple hint
      ];
      const color = colorVariants[i % colorVariants.length];
      
      return {
        id: i,
        // Random position
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        // Random size (1-3.5px)
        size: 1 + Math.random() * 2.5,
        // Random animation duration (25-55s for very slow movement)
        duration: 25 + Math.random() * 30,
        // Random delay to stagger animations
        delay: Math.random() * 20,
        // Random opacity (subtle: 0.15-0.5)
        opacity: 0.15 + Math.random() * 0.35,
        // Color
        backgroundColor: color.bg,
        glowColor: color.glow,
      };
    });
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
            backgroundColor: particle.backgroundColor,
            opacity: particle.opacity,
            filter: "blur(0.5px)",
            boxShadow: `0 0 ${particle.size * 3}px ${particle.size * 1.5}px ${particle.glowColor}`,
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
            transform: translate(25px, -18px) scale(1.15);
            opacity: 0.6;
          }
          50% {
            transform: translate(-8px, -35px) scale(0.85);
            opacity: 0.25;
          }
          75% {
            transform: translate(18px, -8px) scale(1.1);
            opacity: 0.45;
          }
        }
        
        @keyframes floatParticle1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: inherit;
          }
          33% {
            transform: translate(-22px, -25px) scale(0.9);
            opacity: 0.35;
          }
          66% {
            transform: translate(12px, -45px) scale(1.2);
            opacity: 0.55;
          }
        }
        
        @keyframes floatParticle2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-18px, -30px) scale(1.1);
          }
        }
        
        @keyframes floatParticle3 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: inherit;
          }
          40% {
            transform: translate(30px, -20px);
            opacity: 0.55;
          }
          80% {
            transform: translate(-12px, -40px);
            opacity: 0.2;
          }
        }
        
        @keyframes floatParticle4 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: inherit;
          }
          30% {
            transform: translate(-25px, -12px) scale(1.08);
            opacity: 0.45;
          }
          70% {
            transform: translate(20px, -35px) scale(0.88);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
});

FloatingParticles.displayName = "FloatingParticles";

export default FloatingParticles;
