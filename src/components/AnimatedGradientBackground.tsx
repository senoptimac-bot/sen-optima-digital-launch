import { memo } from "react";

/**
 * AnimatedGradientBackground
 * 
 * Ultra-subtle ambient depth for Apple-esque design.
 * Creates barely-visible movement that adds life without distraction.
 * Off-white (#FAFAFA) background with gold/navy depth blobs.
 */
const AnimatedGradientBackground = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary gold warmth - very subtle */}
      <div 
        className="absolute w-[900px] h-[900px] rounded-full opacity-[0.02] will-change-transform"
        style={{
          background: "radial-gradient(circle, hsl(43, 65%, 53%) 0%, transparent 65%)",
          filter: "blur(100px)",
          top: "-25%",
          right: "-15%",
          animation: "floatGold 50s ease-in-out infinite",
        }}
      />
      
      {/* Secondary soft navy depth */}
      <div 
        className="absolute w-[1100px] h-[1100px] rounded-full opacity-[0.012] will-change-transform"
        style={{
          background: "radial-gradient(circle, hsl(218, 35%, 30%) 0%, transparent 65%)",
          filter: "blur(130px)",
          bottom: "-30%",
          left: "-20%",
          animation: "floatNavy 65s ease-in-out infinite",
        }}
      />

      {/* CSS Keyframes - ultra slow, barely perceptible */}
      <style>{`
        @keyframes floatGold {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 25px) scale(1.08);
          }
        }
        
        @keyframes floatNavy {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(25px, -30px) scale(1.04);
          }
        }
      `}</style>
    </div>
  );
});

AnimatedGradientBackground.displayName = "AnimatedGradientBackground";

export default AnimatedGradientBackground;
