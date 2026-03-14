import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import MirrorSection from "@/components/MirrorSection";
import AdviceSection from "@/components/AdviceSection";
import { Button } from "@/components/ui/button";
import IdentitySection from "@/components/IdentitySection";
import PhilosophySection from "@/components/PhilosophySection";
import TeamSection from "@/components/TeamSection";
import MethodSection from "@/components/MethodSection";

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
      
      {/* 2. Ticker (scrolling text) */}
      <MarqueeSection />
      
      {/* 3. Pain Points (3 Cards "Situation Actuelle") */}
      <MirrorSection />
      
      {/* 4. Error #1 (Text Block "TikTok") */}
      <AdviceSection />
      
      {/* 5. CTA Voir nos solutions */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 md:py-20 bg-background"
      >
        <div className="container text-center">
          <p className="text-muted-foreground mb-6">
            Des solutions pour structurer et développer votre présence digitale.
          </p>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="gap-2 text-sm rounded-full border-2 border-foreground/30 text-foreground bg-transparent hover:border-accent hover:text-accent transition-all duration-300 h-14 px-8"
          >
            <Link to="/solutions">
              Découvrir nos solutions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </motion.section>
      
      {/* 6. Differentiation (Comparison Red vs Gold) */}
      <IdentitySection />
      
      {/* 7. Philosophy (3 Icons) */}
      <PhilosophySection />
      
      {/* 8. Team Section (4 Cards) */}
      <TeamSection />
      
      {/* 9. Process (3 Steps) */}
      <MethodSection />
    </>
  );
};

export default Home;
