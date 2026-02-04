import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/config/diagnostic";
import waveLogoImg from "@/assets/logo-wave.png";

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
          {/* Engagement text - human tone */}
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
            Prêt à y voir clair ?
          </h3>
          <p className="text-muted-foreground font-subheading mb-6 text-sm md:text-base leading-relaxed">
            Ce diagnostic prend entre 10 et 12 minutes. Il a été conçu pour les entrepreneurs sérieux 
            qui veulent une vision claire de leur situation, sans promesse marketing excessive.
          </p>

          {/* Human pricing explanation */}
          <div className="bg-muted/50 rounded-xl p-5 mb-6">
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Pour accompagner le lancement de la méthode Sen'Optima, ce diagnostic est proposé à un tarif préférentiel. 
              En temps normal, une analyse de ce niveau est facturée {formatPrice(PRICING.normalPrice)}, 
              car elle permet d'éviter des erreurs coûteuses et des mois de tâtonnement.
            </p>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(PRICING.normalPrice)}
              </span>
              <span className="text-3xl md:text-4xl font-heading font-bold text-accent">
                {formatPrice(PRICING.launchPrice)}
              </span>
              <span className="text-sm text-accent font-subheading">Offre de lancement</span>
            </div>
            <p className="text-xs text-muted-foreground italic">
              Vous payez pour la clarté, pas pour un simple questionnaire.
            </p>
          </div>

          {/* Payment methods */}
          <div className="mb-8">
            <p className="text-xs text-muted-foreground mb-3">Moyens de paiement acceptés :</p>
            <div className="flex flex-wrap items-center gap-3">
              {/* Wave */}
              <div className="flex items-center gap-2 bg-[#1DC7EA]/10 px-3 py-1.5 rounded-full">
                <div className="w-5 h-5 rounded-full bg-[#1DC7EA] flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">W</span>
                </div>
                <span className="text-xs font-medium text-foreground">Wave</span>
              </div>
              {/* Orange Money */}
              <div className="flex items-center gap-2 bg-[#FF6600]/10 px-3 py-1.5 rounded-full">
                <div className="w-5 h-5 rounded-full bg-[#FF6600] flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">OM</span>
                </div>
                <span className="text-xs font-medium text-foreground">Orange Money</span>
              </div>
              {/* Carte bancaire */}
              <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                <svg className="w-5 h-4" viewBox="0 0 24 16" fill="none">
                  <rect width="24" height="16" rx="2" fill="currentColor" className="text-muted-foreground/30" />
                  <rect x="2" y="4" width="8" height="2" rx="0.5" fill="currentColor" className="text-muted-foreground" />
                  <rect x="2" y="8" width="5" height="1.5" rx="0.5" fill="currentColor" className="text-muted-foreground/60" />
                </svg>
                <span className="text-xs font-medium text-foreground">Carte</span>
              </div>
            </div>
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
