import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, FileText, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import BackButton from "@/components/BackButton";

type Pole = "mobilite" | "business";

const CONTENT: Record<Pole, {
  title: string;
  price: string;
  href: string;
  analyse: string[];
  intro: string;
}> = {
  mobilite: {
    title: "Le Diagnostic de Projet International",
    price: "25 000 FCFA",
    href: "/diagnostic-mobilite",
    intro: "Une analyse professionnelle de votre projet, avant toute recommandation.",
    analyse: [
      "Votre parcours académique et professionnel",
      "Votre situation financière",
      "Vos documents",
      "Vos objectifs",
      "Les points forts de votre profil",
      "Les éléments à renforcer",
    ],
  },
  business: {
    title: "Le Diagnostic Business",
    price: "30 000 FCFA",
    href: "/diagnostic",
    intro: "Une analyse complète de votre activité, avant toute recommandation.",
    analyse: [
      "Votre positionnement",
      "Votre rentabilité",
      "Votre organisation",
      "Vos points forts",
      "Vos axes d'amélioration",
      "Les opportunités disponibles",
    ],
  },
};

const DiagnosticDetailPage = () => {
  const [searchParams] = useSearchParams();
  const pole: Pole = searchParams.get("pole") === "business" ? "business" : "mobilite";
  const content = CONTENT[pole];
  const seo = SEO_CONFIG.offresDiagnostic;

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} canonicalPath={seo.canonicalPath} noIndex={seo.noIndex} />

      <div className="min-h-screen bg-background">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container max-w-2xl">
            <BackButton />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="badge-accent mb-6 inline-block">Étape 03 · {content.price}</span>
              <h1 className="text-headline text-foreground mb-6">
                {content.title.replace("Le ", "")}
              </h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-10">{content.intro}</p>

              <h2 className="text-title text-foreground mb-4">Ce que nous analysons</h2>
              <ul className="space-y-3 mb-10">
                {content.analyse.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-title text-foreground mb-4">Ce que vous recevez</h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {[
                  { icon: ClipboardCheck, label: "Rapport personnalisé" },
                  { icon: FileText, label: "Analyse détaillée" },
                  { icon: Target, label: "Recommandations concrètes" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="p-4 card-cream text-center">
                    <Icon className="w-5 h-5 text-accent mx-auto mb-2" />
                    <p className="text-sm text-foreground">{label}</p>
                  </div>
                ))}
              </div>

              <div className="callout-accent mb-10">
                <p className="text-sm text-foreground leading-relaxed">
                  Si vous poursuivez avec un accompagnement personnalisé dans les 30 jours, le
                  montant du diagnostic est intégralement déduit de vos honoraires
                  d'accompagnement.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                variant="hero"
              >
                <Link to={content.href}>
                  Demander mon diagnostic
                  <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DiagnosticDetailPage;
