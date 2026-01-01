import { motion } from "framer-motion";
import { Check, ArrowRight, Monitor, Target, Rocket, Shield, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const diagnostics = [
  {
    icon: Monitor,
    name: "Diagnostic Site Web",
    price: "20.000",
    description: "Audit complet de votre site web actuel pour identifier les points d'amélioration.",
    features: [
      "Audit UX/UI approfondi",
      "Analyse des performances techniques",
      "Recommandations SEO personnalisées",
      "Rapport détaillé et illustré",
      "Session de restitution de 30 min",
    ],
    popular: false,
  },
  {
    icon: Target,
    name: "Diagnostic Stratégie Digitale",
    price: "25.000",
    description: "Analyse globale de votre présence en ligne et plan d'action stratégique.",
    features: [
      "Audit présence digitale complète",
      "Analyse concurrentielle détaillée",
      "Plan d'acquisition client",
      "Stratégie de contenu personnalisée",
      "Feuille de route sur 3 mois",
    ],
    popular: true,
  },
  {
    icon: Rocket,
    name: "Business Boost",
    price: "30.000",
    description: "Transformation complète pour propulser votre PME vers de nouveaux sommets.",
    features: [
      "Audit 360° de l'entreprise",
      "Stratégie de digitalisation globale",
      "Plan marketing complet",
      "Accompagnement personnalisé",
      "Suivi et ajustements sur 30 jours",
    ],
    popular: false,
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Satisfaction garantie",
    description: "Si les recommandations ne vous conviennent pas, nous affinons ensemble.",
  },
  {
    icon: Clock,
    title: "Livraison rapide",
    description: "Votre rapport complet livré sous 72h ouvrées.",
  },
  {
    icon: MessageCircle,
    title: "Support WhatsApp",
    description: "Posez vos questions directement via WhatsApp après le diagnostic.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const DiagnosticsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden bg-secondary dark:bg-gradient-hero">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] dark:block hidden" />
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] dark:block hidden" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-6">
              Offres de Diagnostic
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Choisissez votre <span className="text-gradient-gold">point de départ</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Un diagnostic accessible pour comprendre où vous en êtes et où vous pouvez aller.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 md:py-28 relative">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {diagnostics.map((diagnostic) => (
              <motion.article
                key={diagnostic.name}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -8 }}
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
                  diagnostic.popular ? "bg-accent/20" : "bg-accent/10"
                }`}>
                  <diagnostic.icon className="w-8 h-8 text-accent" />
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
                        diagnostic.popular ? "bg-accent/30" : "bg-accent/10"
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

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl glass-card"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                  <guarantee.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{guarantee.title}</h3>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DiagnosticsPage;
