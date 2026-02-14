import { motion } from "framer-motion";
import { Search, Clock, Video, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DiagnosticCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group">

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
            Montant déductible en cas de mission validée.
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-white/70 mb-6 leading-relaxed">
          Un audit complet de votre activité pour identifier les blocages, clarifier votre positionnement et définir un plan d'action structuré.
        </p>

        {/* Format */}
        <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-white/10">
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

        {/* CTA */}
        <Link
          to="/diagnostic"
          className="flex items-center justify-center gap-3 w-full h-14 rounded-full bg-accent text-primary font-semibold text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_4px_20px_rgba(229,185,78,0.3)]">
          Réserver mon Diagnostic

          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>);

};

export default DiagnosticCard;