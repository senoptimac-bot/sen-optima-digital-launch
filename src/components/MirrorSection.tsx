import { motion } from "framer-motion";
import { UserX, Ghost, HelpCircle } from "lucide-react";

const painPoints = [
  {
    icon: UserX,
    title: "Le Piège de l'Homme-Orchestre",
    description: "Vous faites tout : la vente, la prod, le SAV, la compta. Résultat : vous ne grandissez plus.",
  },
  {
    icon: Ghost,
    title: "La Visibilité Fantôme",
    description: "Vous postez sur les réseaux, mais votre téléphone ne sonne pas. Vos 'J'aime' ne paient pas vos factures.",
  },
  {
    icon: HelpCircle,
    title: "La Peur du Lendemain",
    description: "Sans système prédictible, vous ne savez jamais combien vous allez gagner le mois prochain. Vous naviguez à vue.",
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
      {/* Background - simplified */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-destructive/5" style={{ filter: 'blur(150px)' }} />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Le miroir
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Votre <span className="text-gradient-gold">situation actuelle</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Reconnaissez-vous ces symptômes ?
          </p>
        </motion.div>

        {/* Pain Points Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
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
