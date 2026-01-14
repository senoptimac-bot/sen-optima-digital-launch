import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import VisionarySection from "@/components/VisionarySection";
import DiagnosticExpress from "@/components/DiagnosticExpress";
import IdentitySection from "@/components/IdentitySection";
import MirrorSection from "@/components/MirrorSection";
import MethodSection from "@/components/MethodSection";
import AdviceSection from "@/components/AdviceSection";
import BridgeSection from "@/components/BridgeSection";
import About from "@/components/About";
import Services from "@/components/Services";
import ManifestoSection from "@/components/ManifestoSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <MarqueeSection />
      <ManifestoSection />
      <VisionarySection />
      <About />
      <Services />
      <DiagnosticExpress />
      <IdentitySection />
      <MirrorSection />
      <MethodSection />
      <TestimonialsSection />
      <AdviceSection />
      <BridgeSection />
    </>
  );
};

export default Home;
