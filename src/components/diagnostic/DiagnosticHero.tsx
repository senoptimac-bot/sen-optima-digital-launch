import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";
import { PRICING } from "@/config/diagnostic";

interface DiagnosticHeroProps {
  onStart: () => void;
}

const DiagnosticHero = ({ onStart }: DiagnosticHeroProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " " + PRICING.currency;
  };

  return (
    <section className="min-h-screen flex items-center relative py-20 pt-24">
      <div className="container relative z-10">
        <BackButton />
        
        <div className="max-w-3xl mx-auto text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent font-subheading text-sm">Offre de lancement</span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-display font-bold text-foreground mb-6"
          >
            Diagnostic de <span className="italic text-accent">Structuration Business</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-body-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
          >
            Une évaluation claire et honnête de la solidité réelle de votre activité.
          </motion.p>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-baseline gap-4 mb-8"
          >
            <span className="text-2xl text-muted-foreground line-through">
              {formatPrice(PRICING.normalPrice)}
            </span>
            <span className="text-4xl md:text-5xl font-heading font-bold text-accent">
              {formatPrice(PRICING.launchPrice)}
            </span>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <Button
              onClick={onStart}
              size="lg"
              className="group gap-3 text-base rounded-full bg-foreground text-primary hover:bg-foreground/90 transition-all duration-300 h-14 px-8"
            >
              Accéder au diagnostic
              <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10–12 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Paiement sécurisé</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticHero;
