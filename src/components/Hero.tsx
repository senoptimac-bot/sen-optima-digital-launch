import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] floating-orb"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[80px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-primary/10 dark:bg-white/5 blur-[60px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/80">
              Cabinet de conseil digital au Sénégal
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
          >
            <span className="text-gradient-gold">Clarté</span>
            <span className="text-foreground"> · Performance · </span>
            <span className="text-gradient-gold">Stratégie</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Sen'Optima Consulting est un cabinet sénégalais spécialisé dans la stratégie digitale.
            Notre mission : aider les jeunes, les indépendants et les entreprises à structurer leur présence en ligne.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="cta"
              size="lg"
              className="gap-2 text-base glow-gold-subtle hover:glow-gold transition-all duration-300"
              asChild
            >
              <a href="#diagnostics">
                Réserver mon Diagnostic
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 text-base glass border-foreground/20 hover:bg-foreground/5 hover:border-accent/50 transition-all duration-300"
              asChild
            >
              <a href="#services">Découvrir nos services</a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-foreground/10"
          >
            <p className="text-sm text-muted-foreground mb-6">La confiance de nos clients</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { value: "50+", label: "Clients accompagnés" },
                { value: "100%", label: "Satisfaction client" },
                { value: "Dakar", label: "Basé au Sénégal" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-heading font-bold text-gradient-gold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
