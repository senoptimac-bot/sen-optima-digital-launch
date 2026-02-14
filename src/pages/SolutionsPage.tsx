import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/config/business";
import { MessageCircle, Search, Globe, GraduationCap, ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─── Offer Data ─── */
const offers = [
{
  id: "diagnostic",
  icon: Search,
  title: "Diagnostic Stratégique",
  forWho: [
  "Entrepreneurs avec activité existante",
  "PME qui stagnent",
  "Entreprises qui investissent sans résultats clairs"],

  objective: "Identifier les blocages et définir un plan d'action clair.",
  result: "Vous savez exactement quoi faire et quoi éviter.",
  cta: { label: "Réserver un diagnostic", href: "/diagnostic" },
  details: {
    includes: [
    "Analyse complète de l'activité",
    "Étude du positionnement",
    "Audit de présence digitale",
    "Identification des points de friction",
    "Priorisation des actions",
    "Plan d'action structuré"],

    outcomes: [
    "Vision claire",
    "Recommandations concrètes",
    "Orientation stratégique adaptée au marché sénégalais"]

  }
},
{
  id: "systemes",
  icon: Globe,
  title: "Mise en place des Systèmes Digitaux",
  forWho: [
  "PME établies",
  "Entreprises prêtes à structurer sérieusement leur croissance"],

  objective: "Mettre en place un système digital cohérent.",
  result: "Un système structuré, pas des outils isolés.",
  cta: { label: "Discuter de mon projet", href: "/projet" },
  details: {
    includes: [
    "Site web stratégique",
    "Tunnel de conversion",
    "Structuration de l'offre",
    "Mise en place CRM",
    "Automatisation",
    "Publicité ciblée",
    "Optimisation du parcours client"],

    outcomes: [
    "Meilleure conversion",
    "Organisation interne claire",
    "Vision de croissance structurée"]

  }
},
{
  id: "formation",
  icon: GraduationCap,
  title: "Formation & Accompagnement",
  badge: "Bientôt",
  forWho: [
  "Entrepreneurs souhaitant comprendre les bases du digital"],

  objective: "Acquérir une compréhension solide avant d'investir.",
  result: null,
  cta: { label: "Être informé", href: "/formation" },
  details: {
    includes: [
    "Introduction au e-commerce",
    "Structuration d'une offre",
    "Utilisation des outils digitaux essentiels",
    "Bases de la création de contenu",
    "Compréhension des tunnels simples"],

    outcomes: [
    "Ce programme est destiné à ceux qui souhaitent apprendre avant de passer à une structuration complète."]

  }
}] as
const;

/* ─── Offer Card Component ─── */
interface OfferCardProps {
  offer: (typeof offers)[number];
  index: number;
}

const OfferCard = ({ offer, index }: OfferCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = offer.icon;
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group">

      <div
        className={cn(
          "relative p-6 md:p-8 rounded-3xl transition-all duration-300 ease-out",
          "bg-gradient-to-br from-primary to-primary/90 border-2 border-transparent",
          expanded
            ? "border-accent/60 shadow-[0_0_30px_rgba(229,185,78,0.3)]"
            : "hover:border-accent/60 hover:shadow-[0_0_30px_rgba(34,52,80,0.5)] hover:translate-y-[-8px]"
        )}>

        {/* Header Row */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center transition-all duration-300 group-hover:bg-white/25 group-hover:scale-110">
            <Icon className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="text-3xl font-heading font-bold text-accent opacity-60">
            {number}
          </span>
        </div>

        {/* Badge */}
        {"badge" in offer && offer.badge && (
          <span className="inline-block text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-accent/20 text-accent mb-4">
            {offer.badge}
          </span>
        )}

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-4 leading-tight">
          {offer.title}
        </h3>

        {/* For Who */}
        <div className="mb-5">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-2">
            Pour qui
          </span>
          <ul className="space-y-1.5">
            {offer.forWho.map((item, i) => (
              <li key={i} className="text-sm text-white/75 flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Objective */}
        <div className="mb-4 pt-4 border-t border-current/10">
          <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-1">
            Objectif
          </span>
          <p className="text-sm text-white/75 leading-relaxed">{offer.objective}</p>
        </div>

        {/* Result */}
        {offer.result && (
          <div className="mb-4">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-1">
              Résultat
            </span>
            <p className="text-sm text-white font-medium">{offer.result}</p>
          </div>
        )}

        {/* Expanded Details */}
        <motion.div
          initial={false}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden">

          <div className="pt-4 pb-2 border-t border-white/10">
            <div className="mb-5">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-3">
                {offer.id === "formation" ? "Programme en préparation" : "Inclut"}
              </span>
              <ul className="space-y-2">
                {offer.details.includes.map((item, i) => (
                  <li key={i} className="text-sm text-white/75 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-accent block mb-3">
                {offer.id === "formation" ? "Note" : "Ce que vous obtenez"}
              </span>
              <ul className="space-y-2">
                {offer.details.outcomes.map((item, i) => (
                  <li key={i} className="text-sm text-white/80 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6">
          <a
            href={offer.cta.href}
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-accent text-primary font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-md">
            <ArrowRight className="w-4 h-4" />
            {offer.cta.label}
          </a>

          <button
            onClick={() => setExpanded(!expanded)}
            className={cn(
              "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border-2 text-sm font-medium transition-all duration-300",
              expanded
                ? "border-accent/40 text-white bg-white/10"
                : "border-white/20 text-white hover:border-accent/50"
            )}>
            {expanded ? "Voir moins" : "Voir plus"}
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-300",
                expanded && "rotate-180"
              )} />
          </button>
        </div>

        {/* Arrow indicator */}
        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:text-primary group-hover:rotate-45 hidden md:flex">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Page ─── */
const SolutionsPage = () => {
  const seo = SEO_CONFIG.solutions;
  const whatsappUrl = buildWhatsAppUrl("Bonjour Sen'Optima, je souhaite en savoir plus sur vos solutions.");

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        keywords={seo.keywords} />


      <div className="min-h-screen bg-background">
        {/* ── Section 1: Introduction ── */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left">

              <span className="badge-accent mb-6 inline-block">Solutions</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                Nos solutions pour structurer votre <span className="italic text-accent">activité</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                Chez Sen'Optima, nous accompagnons les entrepreneurs et PME sénégalaises à clarifier leur stratégie et mettre en place des systèmes digitaux adaptés à leur niveau de maturité.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#25D366] text-white font-medium text-sm transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-lg">

                <MessageCircle className="w-5 h-5" />
                Discuter sur WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Section 2: Les 3 Offres ── */}
        <section className="pb-16 md:pb-24">
          <div className="container max-w-3xl">
            <div className="space-y-12">
              {offers.map((offer, index) =>
              <OfferCard key={offer.id} offer={offer} index={index} />
              )}
            </div>
          </div>
        </section>

        {/* ── Section 3: Clarification Finale ── */}
        <section className="py-16 md:py-24 bg-card/50 border-t border-border/30">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left">

              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Vous <span className="italic text-accent">hésitez</span> ?
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl">
                Si vous ne savez pas quelle solution choisir, le Diagnostic est le meilleur point de départ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/diagnostic"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-accent text-primary font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-md">
                  Commencer par un Diagnostic
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#25D366] text-white font-medium text-sm transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-lg">

                  <MessageCircle className="w-5 h-5" />
                  Discuter sur WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>);

};

export default SolutionsPage;