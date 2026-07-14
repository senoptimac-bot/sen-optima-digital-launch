import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroPortraitCover from "@/assets/hero-portrait-cover.jpg";
import SiteImage from "@/components/SiteImage";

const Hero = () => {
  return (
    <section id="accueil" className="relative -mt-20 h-[100svh] min-h-[640px] overflow-hidden">
      <SiteImage
        src={heroPortraitCover}
        alt="Consultante Sen'Optima Consulting devant le stand de présentation du cabinet"
        className="absolute inset-0 w-full h-full object-cover object-[center_58%]"
        priority
      />

      {/* Gradient only at the bottom, to mark the end of the section and keep the text legible */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-12 md:pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <h1 className="text-hero font-heading text-white leading-tight mb-7">
              Développez votre activité. Ouvrez de <span className="italic text-accent">nouvelles opportunités.</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                asChild
                variant="hero"
              >
                <Link to="/contact">
                  Discuter de mon projet
                  <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="gap-2 text-sm rounded-full border-2 border-white/40 text-white bg-white/5 backdrop-blur-sm hover:border-accent hover:text-accent transition-all duration-300 h-14 px-8"
              >
                <a href="#nos-expertises">Découvrir nos expertises</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
