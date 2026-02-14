import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/config/business";
import { Search, Clock, Video, MapPin, Check, MessageCircle, ArrowRight, HelpCircle } from "lucide-react";
import waveLogoImg from "@/assets/logo-wave.png";

const WAVE_PAYMENT_URL = "https://pay.wave.com/m/M_OfMBF_sVtj/c/SN/?amount=100000";

const includes = [
  "Analyse complète de votre activité",
  "Étude de votre positionnement",
  "Identification des blocages",
  "Priorisation stratégique",
  "Recommandations concrètes adaptées au marché sénégalais",
  "Orientation claire sur la suite",
];

const outcomes = [
  "Une vision structurée",
  "Un plan d'action priorisé",
  "Une décision claire pour la suite",
];

const whatsappAgence = buildWhatsAppUrl(
  "Bonjour Sen'Optima,\n\nJe souhaite réserver un Diagnostic Stratégique et payer en agence (présentiel).\n\nMerci de me proposer un créneau."
);

const whatsappQuestion = buildWhatsAppUrl(
  "Bonjour Sen'Optima,\n\nJe souhaite obtenir plus d'informations avant de réserver un Diagnostic Stratégique.\n\nMerci."
);

const DiagnosticCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative p-6 md:p-10 rounded-3xl bg-gradient-to-br from-primary to-primary/90 border border-accent/20 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_4px_40px_rgba(229,185,78,0.12)]">

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center">
            <Search className="w-7 h-7 text-white" />
          </div>
          <span className="text-3xl font-heading font-bold text-accent opacity-60">01</span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2 leading-tight">
          Diagnostic Stratégique
        </h3>

        {/* Price */}
        <div className="mb-6">
          <span className="text-3xl md:text-4xl font-heading font-bold text-accent">
            100 000 FCFA
          </span>
          <p className="text-xs text-white/50 mt-1.5 leading-relaxed">
            Montant déductible si une mission de structuration est validée.
          </p>
        </div>

        {/* Format */}
        <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-1.5 text-sm text-white/70">
            <Clock className="w-4 h-4 text-accent/70" />
            <span>60 à 90 minutes</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-white/70">
            <Video className="w-4 h-4 text-accent/70" />
            <span>Visio</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-white/70">
            <MapPin className="w-4 h-4 text-accent/70" />
            <span>Présentiel (Dakar)</span>
          </div>
        </div>

        {/* Includes */}
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-3">
            Ce que le diagnostic inclut
          </span>
          <ul className="space-y-2">
            {includes.map((item, i) => (
              <li key={i} className="text-sm text-white/75 flex items-start gap-2.5">
                <Check className="w-3.5 h-3.5 text-accent/70 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Outcomes */}
        <div className="mb-8 pb-6 border-b border-white/10">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-3">
            Vous repartez avec
          </span>
          <ul className="space-y-2">
            {outcomes.map((item, i) => (
              <li key={i} className="text-sm text-white font-medium flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Section */}
        <div className="space-y-3">
          {/* Primary: Wave Payment */}
          <a
            href={WAVE_PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full h-14 rounded-full bg-accent text-primary font-semibold text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_4px_20px_rgba(229,185,78,0.3)]"
          >
            <img src={waveLogoImg} alt="Wave" className="w-5 h-5 rounded-full object-cover" />
            Payer mon Diagnostic via Wave
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary: Agence */}
          <a
            href={whatsappAgence}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-12 rounded-full border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:border-accent/40 hover:bg-white/5"
          >
            <MessageCircle className="w-4 h-4 text-accent/70" />
            Prendre rendez-vous en agence
          </a>

          {/* Tertiary: Question */}
          <a
            href={whatsappQuestion}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-10 text-white/50 text-xs font-medium transition-all duration-300 hover:text-white/70"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            Poser une question avant paiement
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default DiagnosticCard;
