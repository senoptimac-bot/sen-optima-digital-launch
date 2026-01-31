import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroCoverImage from "@/assets/hero-cover.jpg";

const Hero = () => {

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCoverImage}
          alt="Consultant digital professionnel"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark Blue Overlay - 80% opacity */}
        <div className="absolute inset-0 bg-[hsl(220,25%,8%)] opacity-80" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl text-left">
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
            De l'<span className="text-accent">Ambition</span>
            <br />
            à la <span className="text-accent">Structure</span>.
          </motion.h1>

          {/* Subtitle - Clean, off-white */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-body-lg text-foreground/70 max-w-2xl mb-16 leading-relaxed"
          >
            Basés à Dakar, nous créons des systèmes de gestion et des plateformes de vente pour transformer votre activité informelle en entreprise organisée. Pas de jargon technique, juste des résultats mesurables.
          </motion.p>

          {/* CTA Button - Audit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="group gap-3 text-sm border-accent/50 bg-accent/10 hover:border-accent hover:bg-accent/20 text-accent transition-all duration-500 h-12 px-8"
            >
              <Link to="/solutions">
                Lancer mon Audit Business
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
