import { motion } from "framer-motion";

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Orb 1 - Deep Blue (Dominant) */}
      <motion.div
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-[#0A1A3A] blur-[120px] md:blur-[150px] opacity-60"
        initial={{ x: "-20%", y: "-10%" }}
        animate={{
          x: ["-20%", "10%", "-15%", "-20%"],
          y: ["-10%", "15%", "-5%", "-10%"],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 2 - Gold Accent */}
      <motion.div
        className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-[#D4A73B] blur-[100px] md:blur-[120px] opacity-20 md:opacity-25"
        initial={{ right: "-10%", top: "20%" }}
        animate={{
          right: ["-10%", "5%", "-5%", "-10%"],
          top: ["20%", "35%", "25%", "20%"],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ right: "-10%", top: "20%" }}
      />

      {/* Orb 3 - Intermediate Blue (Depth) */}
      <motion.div
        className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-[#1a3a5c] blur-[100px] md:blur-[130px] opacity-40"
        initial={{ left: "30%", bottom: "-20%" }}
        animate={{
          left: ["30%", "40%", "25%", "30%"],
          bottom: ["-20%", "-10%", "-25%", "-20%"],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ left: "30%", bottom: "-20%" }}
      />

      {/* Small Gold Accent - Top Right */}
      <motion.div
        className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-[#D4A73B] blur-[80px] md:blur-[100px] opacity-15"
        initial={{ right: "10%", top: "-5%" }}
        animate={{
          right: ["10%", "20%", "5%", "10%"],
          top: ["-5%", "5%", "-10%", "-5%"],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ right: "10%", top: "-5%" }}
      />

      {/* Noise texture overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AmbientBackground;
