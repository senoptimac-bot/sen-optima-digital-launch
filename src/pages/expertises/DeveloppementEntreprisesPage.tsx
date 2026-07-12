import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import BackButton from "@/components/BackButton";
import ParcoursAccompagnement, { ParcoursStep } from "@/components/ParcoursAccompagnement";
import parcoursRendezVous from "@/assets/parcours-rendez-vous.jpg";
import parcoursDiagnostic from "@/assets/parcours-diagnostic.jpg";
import parcoursAccompagnementImg from "@/assets/parcours-accompagnement.jpg";

const parcoursSteps: ParcoursStep[] = [
  {
    title: "Rendez-vous Découverte",
    price: "Gratuit",
    duration: "20 à 30 minutes",
    description: "Un premier échange gratuit sur votre activité, vos objectifs et vos difficultés.",
    ctaLabel: "Réserver un rendez-vous",
    ctaHref: "/rendez-vous-decouverte?pole=business",
    detailHref: "/offres/rendez-vous-decouverte?pole=business",
    image: parcoursRendezVous,
    imageAlt: "Prenez rendez-vous avec Sen'Optima Consulting",
  },
  {
    title: "Diagnostic Business",
    price: "30 000 FCFA",
    description: "Une analyse complète de votre activité, avec rapport stratégique et plan d'action.",
    ctaLabel: "Demander un diagnostic",
    ctaHref: "/diagnostic",
    detailHref: "/offres/diagnostic?pole=business",
    image: parcoursDiagnostic,
    imageAlt: "Diagnostic de Projet Sen'Optima Consulting",
  },
  {
    title: "Programme Croissance Digitale",
    description: "Un accompagnement sur mesure pour accélérer votre développement, selon vos besoins réels.",
    ctaLabel: "Développer mon entreprise",
    ctaHref: "/contact",
    detailHref: "/offres/accompagnement?pole=business",
    image: parcoursAccompagnementImg,
    imageAlt: "Accompagnement projet personnalisé Sen'Optima Consulting",
  },
];

const DeveloppementEntreprisesPage = () => {
  const seo = SEO_CONFIG.developpementEntreprises;

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
              <span className="badge-accent mb-6 inline-block">Développement des Entreprises</span>
              <h1 className="text-headline text-foreground mb-6">
                Structurer une activité qui <span className="italic text-accent">dure.</span>
              </h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
                Nous accompagnons les entrepreneurs, les PME et les organisations dans leur
                développement : structurer une activité, améliorer une organisation,
                développer sa visibilité et accélérer sa croissance.
              </p>
              <p className="text-body text-foreground/70 leading-relaxed">
                Selon le besoin, cet accompagnement peut conduire à la création d'un site
                web, à une stratégie marketing ou à d'autres outils. Ce ne sont pas notre
                promesse — ce sont une conséquence de notre accompagnement.
              </p>
            </motion.div>
          </div>
        </section>

        <ParcoursAccompagnement steps={parcoursSteps} />
      </div>
    </>
  );
};

export default DeveloppementEntreprisesPage;
