import { ArrowDown } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - minimal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-12"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-caption text-foreground/50 uppercase tracking-widest">
              Cabinet de conseil digital au Sénégal
            </span>
          </motion.div>

          {/* Main Headline - Ultra light, editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-display font-bold text-foreground mb-8"
          >
            De l'<span className="text-accent">Ambition</span>
            <br />
            à la <span className="text-accent">Structure</span>.
          </motion.h1>

          {/* Subtitle - Clean, off-white */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-body-lg text-foreground/60 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Sen'Optima Consulting n'est pas une simple agence web. Nous sommes les architectes qui transforment votre activité informelle en une entreprise digitale solide.
          </motion.p>

          {/* CTA Button - Ghost style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToNext}
              className="gap-3 text-sm border-foreground/20 bg-transparent hover:border-foreground/40 hover:bg-foreground/5 text-foreground/70 hover:text-foreground transition-all duration-500 h-12 px-8"
            >
              Voir comment nous travaillons
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;