import { motion } from "framer-motion";
import { ArrowRight, Shield, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import expertAiImage from "@/assets/expert-ai.jpg";

interface SolutionsHeroProps {
  onStart: () => void;
}

const SolutionsHero = ({ onStart }: SolutionsHeroProps) => {
  return (
    <section className="min-h-screen flex items-center relative py-20 pt-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual - Expert AI Image (transparent) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Background decorative shape */}
            <div className="absolute top-10 left-10 w-[80%] h-[80%] bg-accent/10 rounded-[3rem] transform -rotate-6 hidden lg:block" />
            
            {/* Main image - transparent, no container background */}
            <div className="relative">
              <img
                src={expertAiImage}
                alt="Expert IA travaillant sur votre diagnostic"
                className="w-full h-auto max-h-[500px] object-contain object-center drop-shadow-2xl"
                loading="eager"
              />
            </div>

            {/* Floating notification card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -right-4 lg:-right-8 bottom-10 lg:bottom-20 bg-card rounded-2xl p-3 lg:p-4 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-accent flex items-center justify-center">
                  <Brain className="w-4 h-4 lg:w-5 lg:h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-muted-foreground">Diagnostic</p>
                  <p className="text-base lg:text-lg font-bold text-foreground">2 minutes</p>
                  <p className="text-[10px] lg:text-xs text-muted-foreground">Analyse complète</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl order-1 lg:order-2"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="mb-8"
            >
              <span className="badge-accent">
                Diagnostic IA
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-display font-bold text-foreground mb-6"
            >
              Décelez les <span className="italic text-accent">angles morts</span>
              <br />
              de votre croissance.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-body-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              Utilisez notre moteur de diagnostic pour obtenir une vision claire de votre maturité digitale.
              <span className="block mt-2">Un audit précis de 2 minutes pour arrêter de deviner et commencer à piloter.</span>
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <Button
                onClick={onStart}
                size="lg"
                className="group gap-3 text-sm rounded-full bg-foreground text-primary hover:bg-foreground/90 transition-all duration-300 h-14 px-8"
              >
                Lancer l'Analyse
                <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>

              {/* Security Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Shield className="w-4 h-4" />
                <span>Analyse confidentielle et sécurisée par Sen'Optima</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
