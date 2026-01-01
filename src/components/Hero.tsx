import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A3A] via-[#071428] to-[#050E22]" />
      
      {/* Subtle gold aura - top right corner */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{ 
          background: 'radial-gradient(circle, #D4A73B 0%, transparent 70%)',
          transform: 'translate(30%, -30%)'
        }} 
      />
      
      {/* Subtle blue depth - bottom left */}
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.15]"
        style={{ 
          background: 'radial-gradient(circle, #0A1A3A 0%, transparent 70%)',
          transform: 'translate(-30%, 30%)'
        }} 
      />

      {/* Grid pattern overlay - desktop only */}
      <div className="hidden md:block absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/80">
              Cabinet de conseil digital au Sénégal
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-8"
          >
            <span className="text-foreground">De l'</span>
            <span className="text-gradient-gold">Ambition</span>
            <span className="text-foreground"> à la </span>
            <span className="text-gradient-gold">Structure</span>
            <span className="text-foreground">.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Sen'Optima Consulting n'est pas une simple agence web. Nous sommes les architectes qui transforment votre activité informelle en une entreprise digitale solide.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToNext}
              className="gap-3 text-base border-accent/30 bg-white/5 hover:border-accent hover:bg-accent/10 transition-all duration-300 group min-h-[48px]"
            >
              Voir comment nous travaillons
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-5 h-5 text-accent group-hover:text-accent" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;