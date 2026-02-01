import { memo } from "react";

/**
 * Subtle animated gradient background for premium white design.
 * Uses very light, barely perceptible gradients to add depth
 * without compromising the clean white aesthetic.
 */
const AnimatedGradientBackground = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Very subtle gold gradient blob - barely visible on white */}
      <div 
        className="absolute w-[1000px] h-[1000px] rounded-full opacity-[0.03] will-change-transform"
        style={{
          background: "radial-gradient(circle, hsl(43, 75%, 52%) 0%, transparent 60%)",
          top: "-30%",
          right: "-20%",
          animation: "floatGold 60s ease-in-out infinite",
        }}
      />
      
      {/* Secondary subtle navy blob */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-[0.02] will-change-transform"
        style={{
          background: "radial-gradient(circle, hsl(215, 43%, 18%) 0%, transparent 60%)",
          bottom: "-20%",
          left: "-15%",
          animation: "floatNavy 75s ease-in-out infinite",
        }}
      />

      {/* CSS Keyframes - very slow, barely perceptible movement */}
      <style>{`
        @keyframes floatGold {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, 30px) scale(1.1);
          }
        }
        
        @keyframes floatNavy {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -40px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
});

AnimatedGradientBackground.displayName = "AnimatedGradientBackground";

export default AnimatedGradientBackground;
