import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroTeamImage from "@/assets/hero-team-cover.jpg";

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("identite");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroTeamImage}
          alt="Équipe professionnelle en réunion collaborative"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark Blue Overlay - 80% opacity */}
        <div className="absolute inset-0 bg-[hsl(220,25%,8%)] opacity-80" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - minimal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 mb-12"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-caption text-foreground/50 uppercase tracking-widest">
              Cabinet de conseil digital au Sénégal
            </span>
          </motion.div>

          {/* Main Headline - Ultra light, editorial */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-display font-bold text-foreground mb-8"
          >
            Nous construisons des <span className="text-accent">Systèmes</span>
            <br />
            qui font <span className="text-accent">vendre</span>.
            <br />
            <span className="text-foreground/60 text-[0.6em]">Pas juste des sites web.</span>
          </motion.h1>

          {/* Subtitle - Clean, off-white */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-body-lg text-foreground/70 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Basés à Grand Mbao. Nous aidons les entreprises ambitieuses à transformer leurs visiteurs en clients grâce à la Technologie et la Stratégie. Sans jargon. Sans délais fantaisistes.
          </motion.p>

          {/* CTA Button - Ghost style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToNext}
              className="gap-3 text-sm border-foreground/20 bg-transparent hover:border-foreground/40 hover:bg-foreground/5 text-foreground/70 hover:text-foreground transition-all duration-500 h-12 px-8"
            >
              Voir comment nous travaillons
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
