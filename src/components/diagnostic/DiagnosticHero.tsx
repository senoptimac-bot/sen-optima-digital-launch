import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Shield, Sparkles } from "lucide-react";
import { PRICING } from "@/config/diagnostic";
import waveLogoImg from "@/assets/logo-wave.png";
import omLogoImg from "@/assets/logo-orange-money.png";

interface DiagnosticHeroProps {
  onStart: () => void;
}

const inclusions = [
  "Audit positionnement",
  "Analyse rentabilité",
  "Cartographie des opportunités",
  "Plan d'action 90 jours",
];

const DiagnosticHero = ({ onStart }: DiagnosticHeroProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR").format(price) + " " + PRICING.currency;
  };

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-background" />

      <div className="container relative z-10 max-w-2xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Offre de lancement · -75%
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease }}
          className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 leading-tight"
        >
          Diagnostic de{" "}
          <span className="italic text-accent">Structuration Business</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
        >
          Une évaluation claire et honnête de la solidité réelle de votre activité.
          Identifiez vos blocages, clarifiez vos priorités, agissez avec méthode.
        </motion.p>

        {/* ── Price card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          className="bg-card border-2 border-accent/20 rounded-3xl p-6 md:p-8 mb-8"
        >
          {/* Price row */}
          <div className="flex flex-wrap items-end gap-3 mb-5">
            <span className="text-base text-muted-foreground line-through">
              {formatPrice(PRICING.normalPrice)}
            </span>
            <span className="text-4xl md:text-5xl font-heading font-bold text-accent leading-none">
              {formatPrice(PRICING.launchPrice)}
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            En temps normal, une analyse de ce niveau est facturée{" "}
            {formatPrice(PRICING.normalPrice)}. Pour accompagner notre lancement,
            nous la rendons accessible à{" "}
            <strong className="text-foreground">{formatPrice(PRICING.launchPrice)}</strong>.
          </p>

          {/* Inclusions */}
          <div className="border-t border-border pt-5 mb-5">
            <p className="text-[10px] uppercase tracking-widest font-semibold text-accent mb-3">
              Ce qui est inclus
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              {inclusions.map((item, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-accent font-medium">
              + Livrable PDF + restitution stratégique 1h30
            </p>
          </div>

          {/* Payment methods */}
          <div className="flex flex-wrap items-center gap-2">
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
        </motion.div>

        {/* ── BIG CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="space-y-5"
        >
          <button
            onClick={onStart}
            className="group w-full flex items-center justify-center gap-3 h-16 md:h-[72px] rounded-full bg-accent text-primary font-heading font-bold text-base md:text-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_8px_30px_rgba(229,185,78,0.35)] active:scale-[0.98]"
          >
            Accéder au diagnostic
            <span className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              <span>10–12 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>Paiement sécurisé</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Montant déductible en cas de mission validée avec Sen'Optima
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticHero;
