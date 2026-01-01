import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Cpu, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-secondary dark:bg-gradient-hero"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden dark:block hidden">
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] dark:block hidden" />
      
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_60%)] dark:hidden block" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
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
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold leading-tight mb-6"
            >
              <span className="text-foreground">Votre ambition est </span>
              <span className="text-gradient-gold">sans limite</span>
              <span className="text-foreground">.</span>
              <br />
              <span className="text-foreground">Votre structure l'est-elle ?</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Au Sénégal, le talent est partout. L'organisation, elle, fait la différence entre un petit commerce et un empire.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Button
                variant="cta"
                size="lg"
                className="gap-2 text-base glow-gold-subtle hover:glow-gold transition-all duration-300"
                asChild
              >
                <Link to="/diagnostics">
                  Auditer mon business
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-base glass border-foreground/20 hover:bg-foreground/5 hover:border-accent/50 transition-all duration-300"
                asChild
              >
                <Link to="/services">Voir nos services</Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-foreground/10"
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
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
                    className="text-center lg:text-left"
                  >
                    <p className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Entrepreneur africain stylisé */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/10 rounded-full blur-3xl" />
              
              {/* Main visual container */}
              <div className="relative w-full h-full rounded-3xl glass-premium overflow-hidden">
                {/* Abstract entrepreneur silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Background circle */}
                    <circle cx="200" cy="200" r="150" fill="url(#heroGradient)" opacity="0.1" />
                    
                    {/* Person silhouette */}
                    <ellipse cx="200" cy="280" rx="80" ry="60" fill="hsl(var(--accent))" opacity="0.3" />
                    <circle cx="200" cy="160" r="50" fill="hsl(var(--accent))" opacity="0.4" />
                    
                    {/* Tech elements around */}
                    <motion.circle 
                      cx="320" cy="120" r="20" 
                      fill="hsl(var(--accent))" opacity="0.6"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.circle 
                      cx="80" cy="180" r="15" 
                      fill="hsl(var(--accent))" opacity="0.4"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.circle 
                      cx="300" cy="280" r="12" 
                      fill="hsl(var(--accent))" opacity="0.5"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    />
                    
                    {/* Connection lines */}
                    <line x1="200" y1="160" x2="320" y2="120" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.3" />
                    <line x1="200" y1="160" x2="80" y2="180" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.3" />
                    <line x1="200" y1="280" x2="300" y2="280" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.3" />
                    
                    <defs>
                      <radialGradient id="heroGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="hsl(var(--accent))" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Floating tech icons */}
                <motion.div
                  className="absolute top-8 right-8 p-3 rounded-xl glass-card"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Cpu className="w-6 h-6 text-accent" />
                </motion.div>
                <motion.div
                  className="absolute bottom-16 left-8 p-3 rounded-xl glass-card"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Wifi className="w-6 h-6 text-accent" />
                </motion.div>
              </div>
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
