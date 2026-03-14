import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Check } from "lucide-react";
import { PRICING } from "@/config/diagnostic";
import waveLogoImg from "@/assets/logo-wave.png";
import omLogoImg from "@/assets/logo-orange-money.png";

interface FinalCTAProps {
  onStart: () => void;
}

const FinalCTA = ({ onStart }: FinalCTAProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " " + PRICING.currency;
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border-2 border-accent/20 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
            Prêt à y voir clair ?
          </h3>
          <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
            Ce diagnostic prend entre 10 et 12 minutes. Il a été conçu pour les entrepreneurs sérieux
            qui veulent une vision claire de leur situation.
          </p>

          {/* Price */}
          <div className="bg-muted/50 rounded-2xl p-5 mb-6">
            <div className="flex flex-wrap items-end gap-3 mb-3">
              <span className="text-base text-muted-foreground line-through">
                {formatPrice(PRICING.normalPrice)}
              </span>
              <span className="text-3xl md:text-4xl font-heading font-bold text-accent">
                {formatPrice(PRICING.launchPrice)}
              </span>
              <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                Offre de lancement
              </span>
            </div>
            <p className="text-xs text-muted-foreground italic">
              Vous payez pour la clarté, pas pour un simple questionnaire.
            </p>
          </div>

          {/* Quick trust points */}
          <ul className="space-y-2 mb-6">
            {["Livrable PDF complet", "Restitution stratégique 1h30", "Montant déductible si mission validée"].map((item, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-foreground">
                <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          {/* Payment */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs text-muted-foreground mr-1">Paiement :</span>
            <div className="flex items-center gap-1.5 bg-[#1DC7EA]/10 px-2.5 py-1 rounded-full">
              <img src={waveLogoImg} alt="Wave" className="w-4 h-4 rounded-full object-cover" />
              <span className="text-[10px] font-medium text-foreground">Wave</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FF6600]/10 px-2.5 py-1 rounded-full">
              <img src={omLogoImg} alt="Orange Money" className="w-4 h-4 object-contain" />
              <span className="text-[10px] font-medium text-foreground">Orange Money</span>
            </div>
          </div>

          {/* BIG CTA */}
          <button
            onClick={onStart}
            className="group w-full flex items-center justify-center gap-3 h-16 rounded-full bg-accent text-primary font-heading font-bold text-base md:text-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_8px_30px_rgba(229,185,78,0.35)] active:scale-[0.98]"
          >
            Accéder au diagnostic
            <span className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>10–12 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>Paiement sécurisé</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
