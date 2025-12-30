import { Check, ArrowRight, Monitor, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Diagnostics = () => {
  return (
    <section id="diagnostics" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Commencez maintenant
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-5">
            Nos Diagnostics
          </h2>
          <p className="text-muted-foreground text-lg">
            Un point de départ accessible pour structurer votre stratégie digitale.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {diagnostics.map((diagnostic) => (
            <motion.article
              key={diagnostic.name}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-500 ${
                diagnostic.popular
                  ? "glass-premium glow-gold lg:scale-105"
                  : "glass-card hover:glow-gold-subtle"
              }`}
            >
              {/* Popular Badge */}
              {diagnostic.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                >
                  <span className="px-5 py-1.5 bg-gradient-gold text-accent-foreground text-xs font-bold rounded-full shadow-gold">
                    Le plus populaire
                  </span>
                </motion.div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                diagnostic.popular 
                  ? "bg-accent/20" 
                  : "bg-accent/10"
              }`}>
                <diagnostic.icon className={`w-8 h-8 ${diagnostic.popular ? "text-accent" : "text-accent"}`} />
              </div>

              {/* Header */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                {diagnostic.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {diagnostic.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-4xl font-heading font-bold ${
                  diagnostic.popular ? "text-gradient-gold" : "text-foreground"
                }`}>
                  {diagnostic.price}
                </span>
                <span className="text-muted-foreground ml-2 text-lg">FCFA</span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-4 mb-8">
                {diagnostic.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      diagnostic.popular 
                        ? "bg-accent/30" 
                        : "bg-accent/10"
                    }`}>
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={diagnostic.popular ? "cta" : "outline"}
                className={`w-full gap-2 group ${
                  diagnostic.popular 
                    ? "glow-gold-subtle hover:glow-gold" 
                    : "glass border-foreground/20 hover:border-accent/50"
                }`}
                asChild
              >
                <a
                  href={`https://wa.me/221781926969?text=Bonjour, je souhaite commander le diagnostic : ${diagnostic.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Commander ce diagnostic
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Diagnostics;
