import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/config/diagnostic";

interface FinalCTAProps {
  onStart: () => void;
}

const FinalCTA = ({ onStart }: FinalCTAProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " " + PRICING.currency;
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-accent/20 rounded-2xl p-8 md:p-12 text-left"
        >
          {/* Engagement text */}
          <p className="text-muted-foreground font-subheading mb-6 text-sm md:text-base">
            Ce diagnostic prend entre 10 et 12 minutes. Il a été conçu pour les entrepreneurs sérieux 
            qui veulent une vision claire de leur situation, sans promesse marketing excessive.
          </p>

          {/* Pricing */}
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-xl text-muted-foreground line-through">
              {formatPrice(PRICING.normalPrice)}
            </span>
            <span className="text-3xl md:text-4xl font-heading font-bold text-accent">
              {formatPrice(PRICING.launchPrice)}
            </span>
            <span className="text-sm text-accent font-subheading">Offre de lancement</span>
          </div>

          {/* CTA */}
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

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-muted-foreground">
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
    </section>
  );
};

export default FinalCTA;
