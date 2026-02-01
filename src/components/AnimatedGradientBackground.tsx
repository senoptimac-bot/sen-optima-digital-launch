import { memo, useEffect, useState, useCallback } from "react";

/**
 * Subtle animated gradient background with parallax scroll effect.
 * Uses pure CSS for GPU-accelerated performance.
 */
const AnimatedGradientBackground = memo(() => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    // Throttle to ~60fps
    requestAnimationFrame(() => {
      setScrollY(window.scrollY * 0.15);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary breathing gradient - slow radial shift with parallax */}
      <div 
        className="absolute inset-0 opacity-40 will-change-transform"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 60% at 20% 30%,
              hsl(250, 30%, 12%) 0%,
              transparent 70%
            )
          `,
          animation: "breatheGradient1 35s ease-in-out infinite",
          transform: `translateY(${scrollY}px)`,
        }}
      />
      
      {/* Secondary gradient - countermoving for depth with inverse parallax */}
      <div 
        className="absolute inset-0 opacity-30 will-change-transform"
        style={{
          background: `
            radial-gradient(
              ellipse 70% 50% at 80% 70%,
              hsl(220, 35%, 10%) 0%,
              transparent 60%
            )
          `,
          animation: "breatheGradient2 40s ease-in-out infinite",
          transform: `translateY(${-scrollY * 0.5}px)`,
        }}
      />
      
      {/* Tertiary subtle glow - nebula effect with medium parallax */}
      <div 
        className="absolute inset-0 opacity-20 will-change-transform"
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%,
              hsl(260, 25%, 15%) 0%,
              transparent 50%
            )
          `,
          animation: "breatheGradient3 45s ease-in-out infinite",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* CSS Keyframes */}
      <style>{`
        @keyframes breatheGradient1 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translate(10%, 5%) scale(1.1);
            opacity: 0.35;
          }
          50% {
            transform: translate(5%, 10%) scale(1.05);
            opacity: 0.45;
          }
          75% {
            transform: translate(-5%, 5%) scale(1.15);
            opacity: 0.3;
          }
        }
        
        @keyframes breatheGradient2 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.3;
          }
          33% {
            transform: translate(-8%, -5%) scale(1.1);
            opacity: 0.25;
          }
          66% {
            transform: translate(5%, -8%) scale(1.05);
            opacity: 0.35;
          }
        }
        
        @keyframes breatheGradient3 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
          }
          50% {
            transform: translate(-3%, 3%) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
});

AnimatedGradientBackground.displayName = "AnimatedGradientBackground";

export default AnimatedGradientBackground;
