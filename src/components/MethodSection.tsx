import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit",
    description: "Analyse approfondie de votre situation actuelle et identification des opportunités.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Stratégie",
    description: "Élaboration d'un plan d'action sur mesure adapté à vos objectifs.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Exécution",
    description: "Mise en œuvre des solutions avec un accompagnement personnalisé.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Suivi",
    description: "Mesure des résultats et optimisation continue pour maximiser l'impact.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const MethodSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background dark:from-secondary/10 dark:to-background" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Notre approche
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5">
            Une <span className="text-gradient-gold">méthode</span> éprouvée
          </h2>
          <p className="text-muted-foreground text-lg">
            4 étapes clés pour transformer votre présence digitale.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative"
              >
                {/* Mobile/Tablet connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -bottom-3 w-0.5 h-6 bg-accent/30 -translate-x-1/2" />
                )}

                <div className="p-6 rounded-2xl glass-card hover:glow-gold-subtle transition-all duration-300 text-center h-full flex flex-col">
                  {/* Number badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-gold rounded-full">
                    <span className="text-xs font-bold text-accent-foreground">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mt-4 mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
