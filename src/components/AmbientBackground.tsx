import AnimatedGradientBackground from "./AnimatedGradientBackground";

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Base Midnight Navy background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Global organic breathing gradient overlay */}
      <AnimatedGradientBackground />
    </div>
  );
};

export default AmbientBackground;