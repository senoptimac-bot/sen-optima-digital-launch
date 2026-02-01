import { memo } from "react";

/**
 * Organic breathing gradient background inspired by futuristic tech aesthetic.
 * Creates rich depth with navy, purple, and subtle cyan accents.
 * Uses pure CSS for GPU-accelerated performance (45-60s cycles).
 */
const AnimatedGradientBackground = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary deep navy breathing gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 100% 80% at 20% 20%,
              hsl(220, 50%, 8%) 0%,
              transparent 60%
            )
          `,
          animation: "breatheGradient1 50s ease-in-out infinite",
          opacity: 0.7,
        }}
      />
      
      {/* Secondary purple nebula - countermoving for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 60% at 80% 70%,
              hsl(260, 40%, 10%) 0%,
              transparent 55%
            )
          `,
          animation: "breatheGradient2 55s ease-in-out infinite",
          opacity: 0.5,
        }}
      />
      
      {/* Tertiary cyan accent glow - tech feel */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 60% 40% at 70% 30%,
              hsl(200, 60%, 12%) 0%,
              transparent 50%
            )
          `,
          animation: "breatheGradient3 60s ease-in-out infinite",
          opacity: 0.35,
        }}
      />

      {/* Fourth layer - deep indigo for richness */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 30% 80%,
              hsl(240, 35%, 8%) 0%,
              transparent 45%
            )
          `,
          animation: "breatheGradient4 45s ease-in-out infinite",
          opacity: 0.4,
        }}
      />

      {/* Subtle cyan edge glow for futuristic effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              transparent 0%,
              hsl(195, 50%, 8%) 50%,
              transparent 100%
            )
          `,
          animation: "breatheGradient5 40s ease-in-out infinite",
          opacity: 0.25,
        }}
      />

      {/* CSS Keyframes - slow organic movement */}
      <style>{`
        @keyframes breatheGradient1 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translate(8%, 4%) scale(1.08);
            opacity: 0.6;
          }
          50% {
            transform: translate(4%, 8%) scale(1.04);
            opacity: 0.75;
          }
          75% {
            transform: translate(-4%, 4%) scale(1.1);
            opacity: 0.55;
          }
        }
        
        @keyframes breatheGradient2 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.5;
          }
          33% {
            transform: translate(-6%, -4%) scale(1.08);
            opacity: 0.4;
          }
          66% {
            transform: translate(4%, -6%) scale(1.04);
            opacity: 0.55;
          }
        }
        
        @keyframes breatheGradient3 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.35;
          }
          50% {
            transform: translate(-5%, 5%) scale(1.15);
            opacity: 0.25;
          }
        }

        @keyframes breatheGradient4 {
          0%, 100% {
            transform: translate(0%, 0%) scale(1);
            opacity: 0.4;
          }
          40% {
            transform: translate(6%, -3%) scale(1.1);
            opacity: 0.3;
          }
          80% {
            transform: translate(-3%, 5%) scale(1.05);
            opacity: 0.45;
          }
        }

        @keyframes breatheGradient5 {
          0%, 100% {
            transform: translateY(0%);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-3%);
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
});

AnimatedGradientBackground.displayName = "AnimatedGradientBackground";

export default AnimatedGradientBackground;
