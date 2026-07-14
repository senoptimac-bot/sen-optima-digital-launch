import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import BackButton from "@/components/BackButton";
import DestinationsSection from "@/components/DestinationsSection";
import ParcoursAccompagnement, { ParcoursStep } from "@/components/ParcoursAccompagnement";
import parcoursRendezVous from "@/assets/parcours-rendez-vous.jpg";
import parcoursDiagnostic from "@/assets/parcours-diagnostic.jpg";
import parcoursAccompagnementImg from "@/assets/parcours-accompagnement.jpg";

const parcoursSteps: ParcoursStep[] = [
  {
    title: "Rendez-vous Découverte",
    price: "Gratuit",
    duration: "20 à 30 minutes",
    description: "Un premier échange gratuit pour comprendre votre projet et vous orienter vers le parcours adapté.",
    ctaLabel: "Réserver mon rendez-vous découverte",
    ctaHref: "/rendez-vous-decouverte?pole=mobilite",
    detailHref: "/offres/rendez-vous-decouverte?pole=mobilite",
    image: parcoursRendezVous,
    imageAlt: "Prenez rendez-vous avec Sen'Optima Consulting",
  },
  {
    title: "Diagnostic de Projet International",
    price: "25 000 FCFA",
    description: "Une analyse professionnelle de votre projet, avec rapport personnalisé et recommandations concrètes.",
    ctaLabel: "Demander un diagnostic",
    ctaHref: "/diagnostic-mobilite",
    detailHref: "/offres/diagnostic?pole=mobilite",
    image: parcoursDiagnostic,
    imageAlt: "Diagnostic de Projet International Sen'Optima Consulting",
  },
  {
    title: "Accompagnement Projet International",
    description: "Un accompagnement sur mesure pour la mise en œuvre de votre projet, du dossier au suivi.",
    ctaLabel: "Commencer mon accompagnement",
    ctaHref: "/contact",
    detailHref: "/offres/accompagnement?pole=mobilite",
    image: parcoursAccompagnementImg,
    imageAlt: "Accompagnement Projet International Sen'Optima Consulting",
  },
];

const MobiliteInternationalePage = () => {
  const seo = SEO_CONFIG.mobiliteInternationale;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        keywords={seo.keywords}
      />

      <div className="min-h-screen bg-background">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
          <div className="container relative z-10">
            <BackButton />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="badge-accent mb-6 inline-block">Mobilité Internationale</span>
              <h1 className="text-headline text-foreground mb-6">
                Construire un projet international <span className="italic text-accent">cohérent.</span>
              </h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                Nous accompagnons les personnes qui souhaitent construire un projet
                international de manière responsable et structurée. Notre approche repose
                sur une analyse approfondie du projet avant toute recommandation.
              </p>
              <p className="text-body text-foreground/70 leading-relaxed">
                Nous ne vendons pas un visa, une admission ou une procédure. Nous
                accompagnons une personne dans la construction d'un projet cohérent —
                le dossier administratif n'en est qu'une étape.
              </p>
            </motion.div>
          </div>
        </section>

        <DestinationsSection />

        <ParcoursAccompagnement steps={parcoursSteps} />
      </div>
    </>
  );
};

export default MobiliteInternationalePage;
