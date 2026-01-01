import Hero from "@/components/Hero";
import BentoServices from "@/components/BentoServices";
import ProjectWizard from "@/components/ProjectWizard";
import Diagnostics from "@/components/Diagnostics";
import MethodSection from "@/components/MethodSection";
import GalleryVideo from "@/components/GalleryVideo";
import About from "@/components/About";

const Home = () => {
  return (
    <>
      <Hero />
      <BentoServices />
      <MethodSection />
      <ProjectWizard />
      <Diagnostics />
      <GalleryVideo />
      <About />
    </>
  );
};

export default Home;
