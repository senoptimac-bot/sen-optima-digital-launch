import { motion } from "framer-motion";
import { ArrowRight, Shield, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionsHeroProps {
  onStart: () => void;
}

const SolutionsHero = ({ onStart }: SolutionsHeroProps) => {
  return (
    <section className="min-h-screen flex items-center relative py-20">
      {/* Simple static background */}
      <div className="absolute inset-0 bg-background" />

      <div className="container max-w-3xl px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          {/* AI Brain Icon - Premium Card with soft shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
            className="mb-8"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center shadow-[0_8px_30px_-8px_hsl(43_65%_53%/0.15)]">
              <Brain className="w-10 h-10 md:w-12 md:h-12 text-accent icon-solution-animated" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Main Heading - Impactful */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6"
          >
            Décelez les angles morts
            <span className="block text-accent mt-2">de votre croissance.</span>
          </motion.h1>

          {/* Subheadline - Reassurance */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg text-foreground/60 max-w-xl mb-10 leading-relaxed"
          >
            Utilisez notre moteur de diagnostic pour obtenir une vision claire de votre maturité digitale.
            <span className="block mt-2">Un audit précis de 2 minutes pour arrêter de deviner et commencer à piloter.</span>
          </motion.p>

          {/* CTA Button - Premium & Organic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <Button
              onClick={onStart}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading text-sm md:text-base px-7 py-5 h-auto rounded-xl gap-2.5 group shadow-[0_10px_30px_-8px_hsl(43_65%_53%/0.3)] hover:shadow-[0_14px_40px_-8px_hsl(43_65%_53%/0.4)] transition-all duration-300"
            >
              Lancer l'Analyse
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Security Badge - Discreet below button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-sm text-foreground/40"
            >
              <Shield className="w-4 h-4" />
              <span>Analyse confidentielle et sécurisée par Sen'Optima</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsHero;
