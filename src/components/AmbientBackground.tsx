const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle organic gradient overlay - cream tones */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, hsl(45 30% 94%) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 20%, hsl(43 75% 95%) 0%, transparent 40%),
            radial-gradient(ellipse 50% 60% at 50% 80%, hsl(100 20% 95%) 0%, transparent 50%)
          `
        }}
      />
    </div>
  );
};

export default AmbientBackground;
