import { motion } from "framer-motion";
import { EyeOff, Shuffle, TrendingDown, Quote } from "lucide-react";

const painPoints = [
  {
    icon: EyeOff,
    title: "L'Invisible",
    description: "Vous avez le meilleur produit, mais personne ne le sait.",
  },
  {
    icon: Shuffle,
    title: "Le Chaos",
    description: "Vous gérez tout sur WhatsApp et cahier. Vous êtes esclave de votre business.",
  },
  {
    icon: TrendingDown,
    title: "Le Plafond de Verre",
    description: "Vous travaillez dur, mais le chiffre d'affaires stagne.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const MirrorSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-destructive/5 blur-[200px]" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Le constat
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8">
            Naviguez-vous <span className="text-gradient-gold">à vue</span> ?
          </h2>
        </motion.div>

        {/* Proverb Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto mb-20"
        >
          <div className="relative p-8 md:p-12 rounded-3xl glass-premium text-center">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
              <Quote className="w-6 h-6 text-accent-foreground" />
            </div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-foreground leading-relaxed italic">
              "On ne va pas au marché sans panier. On ne bâtit pas une entreprise sans outils."
            </blockquote>
            <p className="text-muted-foreground mt-6">— Sagesse africaine</p>
          </div>
        </motion.div>

        {/* Pain Points Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {painPoints.map((pain, index) => (
            <motion.div
              key={pain.title}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative p-8 rounded-2xl glass-card border border-destructive/20 hover:border-destructive/40 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors">
                <pain.icon className="w-8 h-8 text-destructive" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {pain.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pain.description}
              </p>

              {/* Number indicator */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <span className="text-sm font-bold text-destructive/60">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MirrorSection;
