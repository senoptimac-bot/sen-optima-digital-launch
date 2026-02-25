import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Clock, Video, MapPin, ArrowRight, ChevronDown, Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const forWho = [
  "Aux entrepreneurs avec une activité déjà lancée",
  "Aux PME souhaitant structurer leur croissance",
  "Aux dirigeants qui investissent déjà dans le digital",
  "Aux entreprises qui veulent éviter les erreurs coûteuses",
];

const notForWho = [
  "Aux projets encore au stade d'idée",
  "Aux personnes recherchant une solution rapide sans stratégie",
  "À ceux qui cherchent uniquement le prix le plus bas",
];

const sections = [
  {
    title: "Pourquoi ce Diagnostic est essentiel",
    content: (
      <>
        <p className="text-sm text-white/70 leading-relaxed mb-4">
          La majorité des entreprises échouent dans le digital non pas par manque d'effort, mais par manque de structure.
        </p>
        <p className="text-sm text-white/70 leading-relaxed mb-4">
          Un site sans stratégie ne vend pas. Une publicité sans positionnement gaspille du budget. Une offre mal structurée ne convertit pas.
        </p>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-2">
          Le diagnostic permet de
        </span>
        <ul className="space-y-1.5">
          {["Identifier les vrais blocages", "Clarifier les priorités", "Éviter des dépenses inutiles", "Prendre des décisions basées sur la logique, pas l'intuition"].map((item, i) => (
            <li key={i} className="text-sm text-white/75 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "Ce que vous obtenez concrètement",
    content: (
      <>
        <ul className="space-y-1.5 mb-4">
          {["Une analyse claire de votre situation", "Une identification précise des failles", "Un plan d'action priorisé", "Une orientation stratégique adaptée au marché sénégalais"].map((item, i) => (
            <li key={i} className="text-sm text-white/75 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-white/60 italic leading-relaxed">
          Ce n'est pas un appel découverte. C'est un travail structuré.
        </p>
      </>
    ),
  },
  {
    title: "Pourquoi est-il payant",
    content: (
      <>
        <p className="text-sm text-white/70 leading-relaxed mb-4">
          Parce qu'un travail stratégique demande : analyse, préparation, expertise et responsabilité.
        </p>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-2">
          Le montant de 100 000 FCFA garantit
        </span>
        <ul className="space-y-1.5 mb-4">
          {["Votre engagement", "Notre implication", "Une réelle valeur délivrée"].map((item, i) => (
            <li key={i} className="text-sm text-white/75 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-xs text-white/50 italic">
          Il est déductible si une mission de structuration est validée.
        </p>
      </>
    ),
  },
];

const DiagnosticCard = () => {
  const [expanded, setExpanded] = useState(false);

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
        <p className="text-sm text-white/70 mb-4 leading-relaxed">
          Un audit complet de votre activité pour identifier les blocages, clarifier votre positionnement et définir un plan d'action structuré.
        </p>

        {/* Inclusions premium */}
        <div className="mb-6">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-2">Incluant</span>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-3">
            {["Audit positionnement", "Analyse rentabilité", "Cartographie des opportunités", "Plan d'action 90 jours"].map((item, i) => (
              <li key={i} className="text-sm text-white/75 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-accent/90 font-medium">
            Livrable PDF + restitution stratégique 1h30
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

        {/* Expandable toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "flex items-center gap-2 text-sm font-medium transition-all duration-300 mb-6",
            expanded ? "text-accent" : "text-white/60 hover:text-white/80"
          )}>
          {expanded ? "Voir moins" : "Voir plus sur le Diagnostic"}
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", expanded && "rotate-180")} />
        </button>

        {/* Expandable content */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden">

          <div className="space-y-6 pb-6 border-b border-white/10 mb-6">
            {/* For who / Not for who */}
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-3">
                À qui s'adresse ce Diagnostic
              </span>
              <ul className="space-y-2 mb-4">
                {forWho.map((item, i) => (
                  <li key={i} className="text-sm text-white/75 flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {notForWho.map((item, i) => (
                  <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-destructive/15 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-destructive/70" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            {sections.map((section, i) => (
              <div key={i} className="pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-3">
                  {section.title}
                </span>
                {section.content}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <Link
          to="/diagnostic"
          className="flex items-center justify-center gap-3 w-full h-14 rounded-full bg-accent text-primary font-semibold text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-[0_4px_20px_rgba(229,185,78,0.3)]">
          Réserver mon Diagnostic
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default DiagnosticCard;