const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Simple gradient background - optimized for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A3A] via-[#071428] to-[#000000]" />
      
      {/* Static orbs for desktop only - no animation for performance */}
      <div className="hidden md:block absolute w-[600px] h-[600px] rounded-full bg-[#0A1A3A] opacity-40 -top-[10%] -left-[10%]" 
        style={{ filter: 'blur(100px)' }} 
      />
      <div className="hidden md:block absolute w-[400px] h-[400px] rounded-full bg-[#D4A73B] opacity-15 top-[30%] -right-[5%]"
        style={{ filter: 'blur(80px)' }} 
      />
      <div className="hidden md:block absolute w-[500px] h-[500px] rounded-full bg-[#1a3a5c] opacity-30 -bottom-[15%] left-[20%]"
        style={{ filter: 'blur(90px)' }} 
      />
    </div>
  );
};

export default AmbientBackground;