import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import BackButton from "@/components/BackButton";

type Pole = "mobilite" | "business";

const CONTENT: Record<Pole, { title: string; intro: string; includes: string[] }> = {
  mobilite: {
    title: "Accompagnement Projet International",
    intro:
      "Lorsque votre projet est prêt, nous vous accompagnons dans sa mise en œuvre. Notre engagement porte sur la qualité de notre accompagnement et de notre préparation — les décisions finales relèvent toujours des autorités compétentes.",
    includes: [
      "Définition de la stratégie",
      "Orientation vers les établissements ou les programmes adaptés",
      "Vérification de la cohérence du projet",
      "Préparation documentaire",
      "Organisation des justificatifs",
      "Constitution du dossier",
      "Suivi personnalisé",
    ],
  },
  business: {
    title: "Programme Croissance Digitale",
    intro:
      "Un accompagnement personnalisé destiné aux entreprises qui souhaitent accélérer leur développement, selon vos besoins réels — pas une offre standardisée.",
    includes: [
      "Positionnement",
      "Stratégie marketing",
      "Site web",
      "Référencement",
      "Réseaux sociaux",
      "Automatisation",
      "Intégration de l'IA",
      "Processus commerciaux",
    ],
  },
};

const AccompagnementDetailPage = () => {
  const [searchParams] = useSearchParams();
  const pole: Pole = searchParams.get("pole") === "business" ? "business" : "mobilite";
  const content = CONTENT[pole];
  const seo = SEO_CONFIG.offresAccompagnement;

  return (
    <>
      <SEOHead
        title={`${content.title} — Sur devis`}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        noIndex={seo.noIndex}
      />

      <div className="min-h-screen bg-background">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container max-w-2xl">
            <BackButton />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="badge-accent mb-6 inline-block">Étape 04 · Sur devis</span>
              <h1 className="text-headline text-foreground mb-6">{content.title}</h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-10">{content.intro}</p>

              <h2 className="text-title text-foreground mb-4">Ce que peut comprendre l'accompagnement</h2>
              <ul className="space-y-3 mb-10">
                {content.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="border-l-4 border-accent pl-5 mb-10">
                <p className="text-body text-foreground leading-relaxed">
                  Honoraires établis sur devis après le diagnostic de votre projet. Deux dossiers
                  n'exigent pas le même travail — nous préférons un tarif juste, adapté à la
                  complexité réelle de votre situation, plutôt qu'un prix générique.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                variant="hero"
              >
                <Link to="/contact">
                  Discuter de mon projet
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

export default AccompagnementDetailPage;
