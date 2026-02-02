import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroCoverImage from "@/assets/hero-cover.jpg";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-[100svh] flex items-center pt-16 pb-8 md:pt-20 md:pb-0 overflow-hidden"
    >
      {/* Simple static background */}
      <div className="absolute inset-0 z-0 bg-background" />

      <div className="container relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Second on mobile, First on desktop */}
          <div className="max-w-xl order-last lg:order-first">
            {/* Badge - Accent pill */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <span className="badge-accent">
                Cabinet de conseil digital
              </span>
            </motion.div>

            {/* Main Headline - Large with italic accent */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-display font-bold text-foreground mb-6"
            >
              De l'<span className="italic text-accent">Ambition</span>
              <br />
              à la Structure.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-body-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              Basés à Dakar, nous créons des systèmes de gestion et des plateformes de vente pour transformer votre activité informelle en entreprise organisée.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                size="lg"
                asChild
                className="group gap-3 text-sm rounded-full bg-foreground text-primary hover:bg-foreground/90 transition-all duration-300 h-14 px-8"
              >
                <Link to="/solutions">
                  Lancer mon Audit
                  <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                asChild
                className="gap-2 text-sm text-foreground hover:text-accent hover:bg-transparent"
              >
                <Link to="/services">
                  En savoir plus
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Visual - Hero Image with floating card - First on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-first lg:order-last w-full"
          >
            {/* Background shape */}
            <div className="absolute -top-10 -right-10 w-full h-full bg-accent/10 rounded-[3rem] transform rotate-6 hidden lg:block" />
            
            {/* Main image container */}
            <div className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={heroCoverImage}
                alt="Consultant digital professionnel"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover object-center"
                loading="eager"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
            </div>

            {/* Floating notification card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -left-4 lg:-left-8 bottom-10 lg:bottom-20 bg-card rounded-2xl p-3 lg:p-4 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground text-xs lg:text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-muted-foreground">Résultat garanti</p>
                  <p className="text-base lg:text-lg font-bold text-foreground">+150%</p>
                  <p className="text-[10px] lg:text-xs text-muted-foreground">Croissance moyenne</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
