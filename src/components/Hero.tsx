import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroTeamImage from "@/assets/hero-team-cover.jpg";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20 z-0" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs text-foreground/50 uppercase tracking-widest font-medium">
                Cabinet de conseil digital au Sénégal
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              De l'<span className="text-accent">Ambition</span>
              <br />
              à la <span className="text-accent">Structure</span>.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-foreground/60 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              Basés à Dakar, nous créons des systèmes de gestion et des plateformes de vente pour transformer votre activité informelle en entreprise organisée.
            </p>

            {/* CTA Button - Left aligned on desktop */}
            <div className="flex justify-center lg:justify-start">
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
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 hidden sm:block"
          >
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {/* Image */}
              <img
                src={heroTeamImage}
                alt="Équipe professionnelle en réunion collaborative"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Subtle overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Decorative accent border */}
            <div className="absolute -inset-1 rounded-2xl border border-accent/20 -z-10" />
            
            {/* Floating accent element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
