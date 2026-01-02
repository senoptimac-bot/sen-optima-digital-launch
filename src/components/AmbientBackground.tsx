const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Unified Deep Midnight Blue background */}
      <div className="absolute inset-0 bg-[#050E1D]" />
      
      {/* Subtle radial gradient for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(10, 26, 58, 0.8) 0%, transparent 60%)'
        }}
      />
      
      {/* Very subtle organic texture - desktop only */}
      <div className="hidden md:block absolute inset-0 opacity-[0.015]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>
    </div>
  );
};

export default AmbientBackground;