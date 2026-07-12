import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Clock, Video, MapPin, ArrowRight, ChevronDown, Check, X, FileText, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const inclusions = [
  "Audit positionnement",
  "Analyse rentabilité",
  "Cartographie des opportunités",
  "Plan d'action 90 jours",
];

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
    title: "Pourquoi est-il payant",
    content: (
      <>
        <p className="text-sm text-white/70 leading-relaxed mb-4">
          Parce qu'un travail stratégique demande : analyse, préparation, expertise et responsabilité.
        </p>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-2">
          Le montant de 30 000 FCFA garantit
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

      <div className={cn(
        "relative rounded-3xl bg-gradient-to-br from-primary to-primary/90 border-2 transition-all duration-300 overflow-hidden",
        expanded
          ? "border-accent/50 shadow-[0_0_40px_rgba(229,185,78,0.15)]"
          : "border-accent/20 hover:border-accent/40 hover:shadow-[0_4px_40px_rgba(229,185,78,0.12)]"
      )}>

        {/* ── Top section: Header + Price + Inclusions ── */}
        <div className="p-6 md:p-10 pb-0 md:pb-0">

          {/* Header row */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center">
                <Search className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-accent/80 block mb-0.5">
                  Étape fondamentale
                </span>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white leading-tight">
                  Diagnostic Premium
                </h3>
              </div>
            </div>
            <span className="text-3xl font-heading font-bold text-accent/40 hidden md:block">01</span>
          </div>

          {/* Description */}
          <p className="text-sm text-white/65 leading-relaxed mb-6 max-w-lg">
            Un audit complet de votre activité pour identifier les blocages, clarifier votre positionnement et définir un plan d'action structuré.
          </p>

          {/* Price block */}
          <div className="flex flex-wrap items-end gap-3 mb-6">
            <span className="text-lg text-white/40 line-through font-heading">
              100 000 FCFA
            </span>
            <span className="text-4xl md:text-5xl font-heading font-bold text-accent leading-none">
              30 000
            </span>
            <span className="text-lg font-heading font-semibold text-accent/70 pb-1">FCFA</span>
          </div>
        </div>

        {/* ── Inclusions strip ── */}
        <div className="mx-6 md:mx-10 p-5 rounded-2xl bg-white/[0.06] border border-white/[0.08] mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-xs uppercase tracking-wider font-semibold text-accent">
              Incluant
            </span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {inclusions.map((item, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-accent" />
                </div>
                <span className="text-sm text-white/80 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2.5 pt-3 border-t border-white/[0.08]">
            <FileText className="w-4 h-4 text-accent/70" />
            <span className="text-sm text-accent/90 font-medium">
              Livrable PDF + restitution stratégique 1h30
            </span>
          </div>
        </div>

        {/* ── Format badges ── */}
        <div className="flex flex-wrap items-center gap-2 px-6 md:px-10 mb-6">
          {[
            { icon: Clock, label: "60–90 min" },
            { icon: Video, label: "Visio" },
            { icon: MapPin, label: "Présentiel (Dakar)" },
          ].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08]">
              <Icon className="w-3.5 h-3.5 text-accent/60" />
              <span className="text-xs text-white/60 font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* ── Expandable section ── */}
        <div className="px-6 md:px-10">
          <button
            onClick={() => setExpanded(!expanded)}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-all duration-300 py-3",
              expanded ? "text-accent" : "text-white/50 hover:text-white/70"
            )}>
            {expanded ? "Voir moins" : "En savoir plus sur le Diagnostic"}
            <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", expanded && "rotate-180")} />
          </button>

          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden">

            <div className="space-y-6 pb-6">
              {/* For who / Not for who */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-3">
                  À qui s'adresse ce Diagnostic
                </span>
                <ul className="space-y-2 mb-5">
                  {forWho.map((item, i) => (
                    <li key={i} className="text-sm text-white/75 flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent/80" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-destructive/60 block mb-3">
                    Ce n'est pas pour
                  </span>
                  <ul className="space-y-2">
                    {notForWho.map((item, i) => (
                      <li key={i} className="text-sm text-white/45 flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-destructive/50" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
        </div>

        {/* ── CTA Footer ── */}
        <div className="p-6 md:px-10 md:py-8 bg-white/[0.03] border-t border-white/[0.06]">
          <div className="flex flex-col gap-4">
            <Link
              to="/diagnostic"
              className="flex items-center justify-center gap-3 h-16 md:h-[72px] rounded-full bg-foreground text-primary font-heading font-bold text-base md:text-lg transition-all duration-300 hover:bg-foreground/90 hover:shadow-lg active:scale-[0.98]">
              Réserver mon Diagnostic
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-xs text-white/40 text-center">
              Montant déductible en cas de mission validée
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DiagnosticCard;
