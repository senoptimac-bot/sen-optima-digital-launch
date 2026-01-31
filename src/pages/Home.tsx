import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import MirrorSection from "@/components/MirrorSection";
import AdviceSection from "@/components/AdviceSection";
import Services from "@/components/Services";
import IdentitySection from "@/components/IdentitySection";
import PhilosophySection from "@/components/PhilosophySection";
import TeamSection from "@/components/TeamSection";
import MethodSection from "@/components/MethodSection";

const Home = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Ticker (scrolling text) */}
      <MarqueeSection />
      
      {/* 3. Pain Points (3 Cards "Situation Actuelle") */}
      <MirrorSection />
      
      {/* 4. Error #1 (Text Block "TikTok") */}
      <AdviceSection />
      
      {/* 5. Services (4 Bento Cards) */}
      <Services />
      
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
