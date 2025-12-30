import { Check, ArrowRight, Monitor, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const diagnostics = [
  {
    icon: Monitor,
    name: "Diagnostic Site Web",
    price: "20.000",
    description: "Audit complet de votre site web actuel",
    features: [
      "Audit UX/UI approfondi",
      "Analyse des performances",
      "Recommandations SEO",
      "Rapport détaillé",
      "Session de restitution",
    ],
    popular: false,
  },
  {
    icon: Target,
    name: "Diagnostic Stratégie Digitale",
    price: "25.000",
    description: "Analyse globale de votre présence en ligne",
    features: [
      "Audit présence digitale complète",
      "Analyse de la concurrence",
      "Plan d'acquisition client",
      "Stratégie de contenu",
      "Feuille de route personnalisée",
    ],
    popular: true,
  },
  {
    icon: Rocket,
    name: "Business Boost",
    price: "30.000",
    description: "Transformation complète pour votre PME",
    features: [
      "Audit 360° de l'entreprise",
      "Stratégie de digitalisation",
      "Plan marketing complet",
      "Accompagnement personnalisé",
      "Suivi sur 30 jours",
    ],
    popular: false,
  },
];

const Diagnostics = () => {
  return (
    <section id="diagnostics" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Commencez maintenant
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-5">
            Nos Diagnostics
          </h2>
          <p className="text-muted-foreground text-lg">
            Un point de départ accessible pour structurer votre stratégie digitale.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {diagnostics.map((diagnostic) => (
            <article
              key={diagnostic.name}
              className={`relative flex flex-col p-8 rounded-2xl bg-card border transition-all duration-300 hover:shadow-hover ${
                diagnostic.popular 
                  ? "border-accent shadow-gold scale-[1.02]" 
                  : "border-border/50 hover:border-accent/30"
              }`}
            >
              {/* Popular Badge */}
              {diagnostic.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    Le plus populaire
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <diagnostic.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Header */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {diagnostic.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {diagnostic.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold text-foreground">
                  {diagnostic.price}
                </span>
                <span className="text-muted-foreground ml-2">FCFA</span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {diagnostic.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={diagnostic.popular ? "cta" : "outline"}
                className={`w-full gap-2 ${!diagnostic.popular && "border-foreground/20 hover:bg-foreground/5"}`}
                asChild
              >
                <a 
                  href={`https://wa.me/221781926969?text=Bonjour, je souhaite commander le diagnostic : ${diagnostic.name}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Commander ce diagnostic
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diagnostics;
