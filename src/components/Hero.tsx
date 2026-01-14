import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import fondateurImage from "@/assets/fondateur.png";

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
      {/* Grain/Noise Texture Overlay */}
      <div className="absolute inset-0 z-0 bg-noise opacity-[0.03] pointer-events-none" />
      
      {/* Spotlight Gradient - Warm Gold behind hero */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Asymmetrical Layout - Text Left, Portrait Right */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Bold Typography */}
          <div className="lg:col-span-7 text-left">
            {/* Badge - Handcrafted feel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs text-foreground/50 uppercase tracking-[0.3em] font-light">
                Cabinet de conseil digital — Dakar
              </span>
            </motion.div>

            {/* Main Headline - Ultra Large, Editorial */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
            >
              De l'<span className="text-accent italic font-serif">Ambition</span>
              <br />
              à la <span className="text-accent italic font-serif">Structure</span>.
            </motion.h1>

            {/* Subtitle - Clean, Off-white */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-foreground/60 max-w-xl mb-8 leading-relaxed font-light"
            >
              Sen'Optima n'est pas une simple agence web. Nous sommes les architectes qui transforment votre activité informelle en une entreprise digitale solide.
            </motion.p>

            {/* Handwritten Signature Effect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <p className="font-signature text-2xl md:text-3xl text-accent/80 tracking-wide">
                — Mandiaye S.
              </p>
              <p className="text-xs text-foreground/40 uppercase tracking-widest mt-1">
                Fondateur & Stratège Digital
              </p>
            </motion.div>

            {/* CTA Button - Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToNext}
                className="magnetic-btn gap-3 text-sm border-foreground/20 bg-transparent hover:border-accent/50 hover:bg-accent/5 text-foreground/70 hover:text-foreground transition-all duration-500 h-14 px-10 rounded-full"
              >
                <Sparkles className="w-4 h-4" />
                Découvrir notre approche
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            {/* Portrait Container with organic shape */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent rounded-[3rem] blur-2xl" />
              
              {/* Image Container - Portrait orientation */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] border border-white/10">
                <img
                  src={fondateurImage}
                  alt="Mandiaye - Fondateur de Sen'Optima"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 px-5 py-3 glass-premium rounded-2xl border border-accent/20"
              >
                <p className="text-accent font-semibold text-sm">+50 entreprises</p>
                <p className="text-foreground/50 text-xs">accompagnées depuis 2020</p>
              </motion.div>
              
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-accent/20 rounded-full" />
              <div className="absolute -top-3 -right-3 w-16 h-16 border border-accent/10 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-foreground/20 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-foreground/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
