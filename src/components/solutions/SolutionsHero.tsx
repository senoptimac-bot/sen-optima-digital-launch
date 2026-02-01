import { motion } from "framer-motion";
import { ArrowRight, Shield, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SolutionsHeroProps {
  onStart: () => void;
}

const SolutionsHero = ({ onStart }: SolutionsHeroProps) => {
  return (
    <section className="min-h-screen flex items-center relative py-20">
      {/* Background with decorative shape */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-secondary/30 rounded-bl-[100px] hidden lg:block" />

      <div className="container max-w-4xl px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="mb-6"
            >
              <span className="badge-accent">
                Diagnostic IA
              </span>
            </motion.div>

            {/* Main Heading - Impactful */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6"
            >
              Décelez les <span className="italic text-accent">angles morts</span>
              <span className="block mt-2">de votre croissance.</span>
            </motion.h1>

            {/* Subheadline - Reassurance */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
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
                size="lg"
                className="group gap-3 text-sm rounded-full bg-foreground text-primary hover:bg-foreground/90 transition-all duration-300 h-14 px-8"
              >
                Lancer l'Analyse
                <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>

              {/* Security Badge - Discreet below button */}
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

          {/* Right side - Brain Icon Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-8 bg-accent/5 rounded-[3rem] transform rotate-6" />
              
              {/* Main icon container */}
              <div className="relative w-48 h-48 rounded-3xl bg-card border border-border/50 shadow-xl flex items-center justify-center">
                <Brain className="w-24 h-24 text-accent" strokeWidth={1} />
              </div>

              {/* Floating notification card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 bottom-0 bg-card rounded-2xl p-4 shadow-lg border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent text-sm font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Durée</p>
                    <p className="text-base font-bold text-foreground">minutes</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
