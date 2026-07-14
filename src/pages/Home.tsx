import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import Hero from "@/components/Hero";
import PresentationVideoSection from "@/components/PresentationVideoSection";
import PreparationSection from "@/components/PreparationSection";
import ExpertisesOverviewSection from "@/components/ExpertisesOverviewSection";
import IdentitySection from "@/components/IdentitySection";
import PhilosophySection from "@/components/PhilosophySection";
import TestimonialsSection, { Testimonial } from "@/components/TestimonialsSection";
import MethodSection from "@/components/MethodSection";

// Vide intentionnellement : à remplir avec de VRAIS témoignages clients
// (nom, contexte, verbatim) quand disponibles. Voir TestimonialsSection.tsx.
const testimonials: Testimonial[] = [];

const Home = () => {
  const seo = SEO_CONFIG.home;
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        keywords={seo.keywords}
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Vidéo de présentation — masquée en attente de la vidéo officielle */}
      {/* <PresentationVideoSection /> */}

      {/* 3. Notre conviction (préparation) */}
      <PreparationSection />

      {/* 4. Nos Expertises (Mobilité Internationale / Développement des Entreprises) */}
      <ExpertisesOverviewSection />

      {/* 5. Differentiation (Comparison) */}
      <IdentitySection />

      {/* 6. Philosophy (Nos Valeurs) */}
      <PhilosophySection />

      {/* 7. Témoignages (vide tant qu'aucun vrai témoignage n'est fourni) */}
      <TestimonialsSection testimonials={testimonials} />

      {/* 8. Process (3 Steps) */}
      <MethodSection />
    </>
  );
};

export default Home;
