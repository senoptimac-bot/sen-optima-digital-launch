import { motion } from "framer-motion";
import { UserX, Ghost, HelpCircle, AlertTriangle } from "lucide-react";
import situationImage from "@/assets/situation-actuelle.jpg";

const painPoints = [
  {
    icon: Ghost,
    title: "Le Prestataire Fantôme",
    description: "Fatigué des développeurs qui disparaissent après l'avance ? Nous fournissons un calendrier précis et un suivi hebdomadaire.",
  },
  {
    icon: UserX,
    title: "L'Argent Perdu",
    description: "Votre page TikTok a des vues mais zéro commande ? Vous n'avez pas un problème de visibilité, vous avez un problème de système de vente.",
  },
  {
    icon: HelpCircle,
    title: "Le Chaos Interne",
    description: "Vous gérez tout au stylo ou sur WhatsApp ? Si vous tombez malade demain, votre business s'arrête. Nous automatisons pour vous libérer.",
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
    <section className="py-section-lg relative">
      <div className="container">
        {/* Header with Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          {/* Illustration Image */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-2 border-problem/30 shadow-lg">
            <img 
              src={situationImage} 
              alt="Entrepreneur stressé" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-problem/10" />
          </div>

          <span className="inline-flex items-center gap-2 text-caption text-foreground/40 uppercase tracking-widest mb-6">
            <AlertTriangle className="w-3 h-3 icon-problem" />
            Le miroir
          </span>
          <h2 className="text-headline text-foreground mb-4">
            Votre <span className="text-problem">situation actuelle</span>
          </h2>
          <p className="text-body text-foreground/50">
            Reconnaissez-vous ces symptômes ?
          </p>
        </motion.div>

        {/* Pain Points Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {painPoints.map((pain, index) => (
            <motion.div
              key={pain.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative p-8 glass-card rounded-xl group transition-all duration-300"
            >
              {/* Number indicator */}
              <div className="absolute top-6 right-6">
                <span className="text-caption text-problem/40">{String(index + 1).padStart(2, '0')}</span>
              </div>

              {/* Icon with problem styling and animation */}
              <div className="w-12 h-12 rounded-xl bg-problem/10 flex items-center justify-center mb-6 group-hover:bg-problem/20 transition-colors duration-300">
                <pain.icon className="w-6 h-6 icon-problem-animated" />
              </div>

              {/* Content */}
              <h3 className="text-title text-foreground mb-3 group-hover:text-problem transition-colors duration-300">
                {pain.title}
              </h3>
              <p className="text-body text-foreground/50 leading-relaxed">
                {pain.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-problem/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MirrorSection;
