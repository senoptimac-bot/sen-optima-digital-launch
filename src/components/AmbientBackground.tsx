const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Unified deep anthracite background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Very subtle radial gradient for minimal depth */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 0%, hsl(220 15% 10%) 0%, transparent 70%)'
        }}
      />
    </div>
  );
};

export default AmbientBackground;