import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BentoServices from "@/components/BentoServices";
import ProjectWizard from "@/components/ProjectWizard";
import Diagnostics from "@/components/Diagnostics";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BentoServices />
      <ProjectWizard />
      <Diagnostics />
      <Testimonials />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
