import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/80">
              Cabinet de conseil digital au Sénégal
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-accent">Clarté</span> · Performance · <span className="text-accent">Stratégie</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Sen'Optima Consulting est un cabinet sénégalais spécialisé dans la stratégie digitale. 
            Notre mission : aider les jeunes, les indépendants et les entreprises à structurer leur présence en ligne.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="cta" size="lg" className="gap-2 text-base" asChild>
              <a href="#diagnostics">
                Réserver mon Diagnostic
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 text-base border-foreground/20 hover:bg-foreground/5" asChild>
              <a href="#services">
                Découvrir nos services
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-10 border-t border-border/50 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm text-muted-foreground mb-4">La confiance de nos clients</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-muted-foreground/60">
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-foreground">50+</p>
                <p className="text-sm">Clients accompagnés</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-foreground">100%</p>
                <p className="text-sm">Satisfaction client</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-foreground">Dakar</p>
                <p className="text-sm">Basé au Sénégal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
