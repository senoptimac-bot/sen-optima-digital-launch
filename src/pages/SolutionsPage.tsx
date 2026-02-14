import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/config/business";
import { MessageCircle, Search, Globe, GraduationCap, ChevronDown, ArrowRight } from "lucide-react";
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
      "Entreprises qui investissent sans résultats clairs",
    ],
    objective: "Identifier les blocages et définir un plan d'action clair.",
    result: "Vous savez exactement quoi faire et quoi éviter.",
    cta: {
      label: "Réserver un diagnostic",
      href: buildWhatsAppUrl("Bonjour Sen'Optima,\n\nJe souhaite réserver un Diagnostic Stratégique.\n\nVoici ma situation :\n\n1. Nom de mon entreprise :\n2. Secteur d'activité :\n3. Mon principal blocage actuel :\n4. Mon objectif sur les 3 à 6 prochains mois :\n5. Ai-je déjà investi dans le digital ? (Oui / Non)\n\nMerci de m'indiquer les prochaines étapes."),
      external: true,
    },
    details: {
      includes: [
        "Analyse complète de l'activité",
        "Étude du positionnement",
        "Audit de présence digitale",
        "Identification des points de friction",
        "Priorisation des actions",
        "Plan d'action structuré",
      ],
      outcomes: [
        "Vision claire",
        "Recommandations concrètes",
        "Orientation stratégique adaptée au marché sénégalais",
      ],
    },
  },
  {
    id: "systemes",
    icon: Globe,
    title: "Mise en place des Systèmes Digitaux",
    forWho: [
      "PME établies",
      "Entreprises prêtes à structurer sérieusement leur croissance",
    ],
    objective: "Mettre en place un système digital cohérent.",
    result: "Un système structuré, pas des outils isolés.",
    cta: {
      label: "Discuter de mon projet",
      href: buildWhatsAppUrl("Bonjour Sen'Optima, je souhaite discuter de la mise en place de systèmes digitaux pour mon entreprise."),
      external: true,
    },
    details: {
      includes: [
        "Site web stratégique",
        "Tunnel de conversion",
        "Structuration de l'offre",
        "Mise en place CRM",
        "Automatisation",
        "Publicité ciblée",
        "Optimisation du parcours client",
      ],
      outcomes: [
        "Meilleure conversion",
        "Organisation interne claire",
        "Vision de croissance structurée",
      ],
    },
  },
  {
    id: "formation",
    icon: GraduationCap,
    title: "Formation & Accompagnement",
    badge: "Bientôt",
    forWho: [
      "Entrepreneurs souhaitant comprendre les bases du digital",
    ],
    objective: "Acquérir une compréhension solide avant d'investir.",
    result: null,
    cta: {
      label: "Être informé",
      href: buildWhatsAppUrl("Bonjour Sen'Optima, je souhaite être informé(e) du lancement de votre programme de formation."),
      external: true,
    },
    details: {
      includes: [
        "Introduction au e-commerce",
        "Structuration d'une offre",
        "Utilisation des outils digitaux essentiels",
        "Bases de la création de contenu",
        "Compréhension des tunnels simples",
      ],
      outcomes: [
        "Ce programme est destiné à ceux qui souhaitent apprendre avant de passer à une structuration complète.",
      ],
    },
  },
] as const;

/* ─── Offer Card Component ─── */
interface OfferCardProps {
  offer: (typeof offers)[number];
  index: number;
}

const OfferCard = ({ offer, index }: OfferCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = offer.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl bg-card border border-border/50 shadow-sm overflow-hidden"
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-heading font-bold text-foreground">
                {offer.title}
              </h3>
              {"badge" in offer && offer.badge && (
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-accent/15 text-accent">
                  {offer.badge}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* For Who */}
        <div className="mb-5">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-accent/80 block mb-2">
            Pour qui
          </span>
          <ul className="space-y-1.5">
            {offer.forWho.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Objective */}
        <div className="mb-4">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-accent/80 block mb-1">
            Objectif
          </span>
          <p className="text-sm text-muted-foreground">{offer.objective}</p>
        </div>

        {/* Result */}
        {offer.result && (
          <div className="mb-6">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-accent/80 block mb-1">
              Résultat
            </span>
            <p className="text-sm text-foreground font-medium">{offer.result}</p>
          </div>
        )}

        {/* Expanded Details */}
        <motion.div
          initial={false}
          animate={{
            height: expanded ? "auto" : 0,
            opacity: expanded ? 1 : 0,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="pt-4 pb-2 border-t border-border/30">
            {/* Includes */}
            <div className="mb-5">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-accent/80 block mb-3">
                {offer.id === "formation" ? "Programme en préparation" : "Inclut"}
              </span>
              <ul className="space-y-2">
                {offer.details.includes.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-accent/80 block mb-3">
                {offer.id === "formation" ? "Note" : "Ce que vous obtenez"}
              </span>
              <ul className="space-y-2">
                {offer.details.outcomes.map((item, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
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
          {"external" in offer.cta && offer.cta.external ? (
            <a
              href={offer.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-accent text-primary font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              {offer.cta.label}
            </a>
          ) : (
            <a
              href={offer.cta.href}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-accent text-primary font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-md"
            >
              <ArrowRight className="w-4 h-4" />
              {offer.cta.label}
            </a>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className={cn(
              "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-border/50 text-sm font-medium transition-all duration-300",
              "text-muted-foreground hover:border-accent hover:text-accent"
            )}
          >
            {expanded ? "Voir moins" : "Voir plus"}
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform duration-300",
                expanded && "rotate-180"
              )}
            />
          </button>
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
        keywords={seo.keywords}
      />

      <div className="min-h-screen bg-background">
        {/* ── Section 1: Introduction ── */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
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
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-[#25D366] text-white font-medium text-sm transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Discuter sur WhatsApp
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Section 2: Les 3 Offres ── */}
        <section className="pb-16 md:pb-24">
          <div className="container max-w-3xl">
            <div className="space-y-8">
              {offers.map((offer, index) => (
                <OfferCard key={offer.id} offer={offer} index={index} />
              ))}
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
              className="text-left"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Vous <span className="italic text-accent">hésitez</span> ?
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl">
                Si vous ne savez pas quelle solution choisir, le Diagnostic est le meilleur point de départ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={buildWhatsAppUrl("Bonjour Sen'Optima,\n\nJe souhaite réserver un Diagnostic Stratégique.\n\nVoici ma situation :\n\n1. Nom de mon entreprise :\n2. Secteur d'activité :\n3. Mon principal blocage actuel :\n4. Mon objectif sur les 3 à 6 prochains mois :\n5. Ai-je déjà investi dans le digital ? (Oui / Non)\n\nMerci de m'indiquer les prochaines étapes.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-accent text-primary font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-md"
                >
                  <ArrowRight className="w-4 h-4" />
                  Commencer par un Diagnostic
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-[#25D366] text-white font-medium text-sm transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discuter sur WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SolutionsPage;
