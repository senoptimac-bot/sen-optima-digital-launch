import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionsHeroProps {
  onStart: () => void;
}

const SolutionsHero = ({ onStart }: SolutionsHeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      {/* Subtle background - very clean */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-accent/3 blur-[150px]" />

      <div className="container max-w-2xl mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Main Heading - Impactful */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6"
          >
            Votre Business a des fuites.
            <span className="block text-accent mt-2">Notre IA les trouve en 2 minutes.</span>
          </motion.h1>

          {/* Subheadline - Reassurance */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Arrêtez de deviner. Obtenez votre Score de Maturité Digitale et un aperçu 
            immédiat des actions qui vont débloquer votre croissance. 
            <span className="text-foreground/80 font-medium"> Gratuit et sans engagement.</span>
          </motion.p>

          {/* CTA Button - Big & Clear */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={onStart}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading text-base md:text-lg px-10 py-7 rounded-xl gap-3 group shadow-lg shadow-accent/20"
            >
              Lancer l'Analyse Maintenant
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Security Badge - Small & Discreet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-foreground/40"
          >
            <Shield className="w-4 h-4" />
            <span>Analyse confidentielle & sécurisée par Sen'Optima</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsHero;
