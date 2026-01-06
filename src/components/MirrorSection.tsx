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
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const MirrorSection = () => {
  return (
    <section className="py-section-lg relative px-5 md:px-0">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-caption text-foreground/40 uppercase tracking-widest mb-6">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Le miroir
          </span>
          <h2 className="font-display text-headline text-foreground mb-4">
            Votre <span className="text-accent">situation actuelle</span>
          </h2>
          <p className="text-body text-foreground/50">
            Reconnaissez-vous ces symptômes ?
          </p>
        </motion.div>

        {/* Pain Points Cards - Stack on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {painPoints.map((pain, index) => (
            <motion.div
              key={pain.title}
              variants={itemVariants}
              className="relative p-6 md:p-8 glass-card rounded-xl group active:scale-[0.98] transition-transform"
            >
              {/* Number indicator */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <span className="text-caption text-foreground/20">{String(index + 1).padStart(2, '0')}</span>
              </div>

              {/* Icon - Touch-reactive */}
              <div className="w-12 h-12 md:w-10 md:h-10 rounded-lg bg-foreground/5 flex items-center justify-center mb-5 md:mb-6 group-active:bg-accent/10 transition-colors">
                <pain.icon className="w-6 h-6 md:w-5 md:h-5 text-foreground/40 group-active:text-accent transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-title text-foreground mb-3">
                {pain.title}
              </h3>
              <p className="text-body text-foreground/50 leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MirrorSection;