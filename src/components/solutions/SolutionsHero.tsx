import { motion } from "framer-motion";
import { Brain, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionsHeroProps {
  onStart: () => void;
}

const SolutionsHero = ({ onStart }: SolutionsHeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-accent/3 blur-[100px]" />

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-subheading">Diagnostic Gratuit • 3 minutes</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-display text-foreground mb-6"
          >
            Analyse de{" "}
            <span className="text-accent">Maturité Digitale</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-subheading"
          >
            Découvrez en 10 questions où se situe votre entreprise sur l'échelle de la digitalisation 
            — et ce que ça vous coûte de ne pas agir.
          </motion.p>

          {/* Visual Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="w-32 h-32 mx-auto mb-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center"
          >
            <Brain className="w-16 h-16 text-accent" strokeWidth={1.5} />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              onClick={onStart}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading text-lg px-8 py-6 rounded-xl gap-3 group"
            >
              Commencer l'Analyse
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-solution" />
              100% Gratuit
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Résultats Instantanés
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Aucune Inscription
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsHero;
