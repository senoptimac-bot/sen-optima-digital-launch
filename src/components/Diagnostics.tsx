import { Check, ArrowRight, Search, Rocket, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const diagnostics = [
  {
    icon: Search,
    name: "Diagnostic Site Web",
    price: "20.000",
    description: "Audit complet de votre présence web actuelle",
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
    icon: BarChart3,
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Diagnostics = () => {
  return (
    <section id="diagnostics" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <Sparkles className="w-4 h-4 icon-success-animated" />
            <span className="text-caption text-white/60 uppercase tracking-widest">
              Commencez maintenant
            </span>
          </motion.div>
          
          <h2 className="text-headline text-white mb-6">
            Nos <span className="text-accent">Diagnostics</span> Premium
          </h2>
          
          <p className="text-body-lg text-white/50 max-w-2xl mx-auto">
            Un point de départ accessible pour structurer votre stratégie digitale avec l'expertise d'un cabinet de conseil.
          </p>
        </motion.div>

        {/* Premium Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto items-stretch"
        >
          {diagnostics.map((diagnostic, index) => (
            <motion.article
              key={diagnostic.name}
              variants={cardVariants}
              className={`relative flex flex-col rounded-2xl overflow-hidden ${
                diagnostic.popular
                  ? "glass-pricing-featured lg:py-4"
                  : "glass-pricing"
              }`}
            >
              {/* Popular Badge */}
              {diagnostic.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-0 left-0 right-0"
                >
                  <div className="bg-gradient-gold text-center py-2">
                    <span className="text-xs font-bold text-background uppercase tracking-wider">
                      Le plus populaire
                    </span>
                  </div>
                </motion.div>
              )}

              <div className={`flex flex-col flex-1 p-8 ${diagnostic.popular ? 'pt-14' : ''}`}>
                {/* Large Animated Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 ${
                    diagnostic.popular 
                      ? "bg-accent/20 border border-accent/30" 
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <diagnostic.icon 
                    className={`w-10 h-10 ${
                      diagnostic.popular 
                        ? "icon-success-animated" 
                        : "text-white/60"
                    }`} 
                  />
                </motion.div>

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {diagnostic.name}
                  </h3>
                  <p className="text-sm text-white/50">
                    {diagnostic.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-5xl font-bold tracking-tight ${
                      diagnostic.popular ? "text-accent" : "text-white"
                    }`}>
                      {diagnostic.price}
                    </span>
                    <span className="text-lg text-white/40 font-medium">FCFA</span>
                  </div>
                </div>

                {/* Features with Gold Checks */}
                <ul className="flex-1 space-y-4 mb-8">
                  {diagnostic.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 + 0.4 }}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        diagnostic.popular 
                          ? "bg-accent/30" 
                          : "bg-accent/15"
                      }`}>
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-white/70">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Full-width Gold CTA */}
                <Button
                  variant={diagnostic.popular ? "cta" : "outline"}
                  className={`w-full h-14 text-base gap-3 group font-semibold ${
                    diagnostic.popular 
                      ? "bg-accent hover:bg-accent/90 text-background shadow-gold" 
                      : "border-white/20 text-white hover:border-accent/50 hover:text-accent"
                  }`}
                  asChild
                >
                  <a
                    href={`https://wa.me/221781926969?text=Bonjour, je souhaite commander le diagnostic : ${diagnostic.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Commander ce diagnostic
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Trust indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-white/30 text-sm mt-12"
        >
          ✓ Paiement sécurisé • ✓ Rapport livré sous 72h • ✓ Satisfaction garantie
        </motion.p>
      </div>
    </section>
  );
};

export default Diagnostics;