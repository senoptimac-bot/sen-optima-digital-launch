import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroTechBg from "@/assets/hero-tech-bg.png";

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("identite");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden noise-texture"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroTechBg})` }}
      />
      
      {/* Dark overlay for opacity effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050E1D]/90 via-[#071428]/85 to-[#040B18]/90" />
      
      {/* Additional subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
      
      {/* Subtle gold aura - top right corner */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.05]"
        style={{ 
          background: 'radial-gradient(circle, #D4A73B 0%, transparent 70%)',
          transform: 'translate(30%, -30%)'
        }} 
      />

      {/* Geometric golden lines - desktop only */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] opacity-[0.08]">
        {/* Vertical lines */}
        <div className="absolute right-20 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent" />
        <div className="absolute right-40 top-10 w-px h-[80%] bg-gradient-to-b from-transparent via-accent/60 to-transparent" />
        <div className="absolute right-60 top-20 w-px h-[60%] bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
        
        {/* Horizontal lines */}
        <div className="absolute right-0 top-1/4 w-[300px] h-px bg-gradient-to-r from-accent/60 to-transparent" />
        <div className="absolute right-0 top-1/2 w-[400px] h-px bg-gradient-to-r from-accent to-transparent" />
        <div className="absolute right-0 top-3/4 w-[250px] h-px bg-gradient-to-r from-accent/40 to-transparent" />
        
        {/* Corner accent */}
        <div className="absolute right-20 top-1/4 w-4 h-4 border border-accent/50 rotate-45" />
        <div className="absolute right-40 top-1/2 w-3 h-3 border border-accent/30 rotate-45" />
      </div>

      {/* Mobile geometric element - subtle background */}
      <div className="lg:hidden absolute inset-0 opacity-[0.03]">
        <div className="absolute right-0 top-1/3 w-px h-[200px] bg-gradient-to-b from-transparent via-accent to-transparent" />
        <div className="absolute right-8 top-1/2 w-px h-[150px] bg-gradient-to-b from-transparent via-accent/60 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0">
          {/* Badge with elegant drift animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-black/40 border border-white/5 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-foreground/70 tracking-wide">
              Cabinet de conseil digital au Sénégal
            </span>
          </motion.div>

          {/* Main Headline - Editorial style */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tighter mb-8"
          >
            <span className="text-foreground">De l'</span>
            <span className="text-gradient-gold font-extrabold">Ambition</span>
            <span className="text-foreground"> à la </span>
            <br className="hidden sm:block" />
            <span className="text-gradient-gold font-extrabold">Structure</span>
            <span className="text-foreground">.</span>
          </motion.h1>

          {/* Subtitle - drift animation */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
          >
            Sen'Optima Consulting n'est pas une simple agence web. Nous sommes les architectes qui transforment votre activité informelle en une entreprise digitale solide.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToNext}
              className="gap-3 text-base border-accent/30 bg-black/30 hover:border-accent hover:bg-accent/10 transition-all duration-500 group min-h-[48px] rounded-sm"
            >
              Voir comment nous travaillons
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-5 h-5 text-accent" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;