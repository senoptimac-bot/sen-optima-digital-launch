import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Diagnostics from "@/components/Diagnostics";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Diagnostics />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
