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
        {/* Header with Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          {/* Featured Image - Large Rectangle */}
          <div className="relative mb-10 group">
            {/* Glow effect behind */}
            <div className="absolute -inset-4 bg-gradient-to-br from-problem/20 via-problem/5 to-transparent rounded-3xl blur-2xl opacity-60" />
            
            {/* Main Image Container */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-problem/20 shadow-2xl">
              <img 
                src={situationImage} 
                alt="Entrepreneur face aux défis business" 
                className="w-full h-full object-cover object-[center_25%] group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-problem/10" />
              
              {/* Text overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="inline-flex items-center gap-2 text-xs text-foreground/60 uppercase tracking-widest mb-3">
                  <AlertTriangle className="w-3 h-3 icon-problem" />
                  Le miroir
                </span>
                <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">
                  Votre <span className="text-problem">situation actuelle</span>
                </h2>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-problem/40 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-problem/40 rounded-tr-lg" />
            </div>
          </div>

          {/* Subtitle below image */}
          <p className="text-center text-foreground/50 text-lg">
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
              className="relative p-8 glass-card glass-card-danger rounded-xl group transition-all duration-300"
            >
              {/* Number indicator */}
              <div className="absolute top-6 right-6">
                <span className="text-caption text-brand-navy-light">{String(index + 1).padStart(2, '0')}</span>
              </div>

              {/* Icon with danger semantic color */}
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                <pain.icon className="w-6 h-6 icon-semantic-danger" />
              </div>

              {/* Content */}
              <h3 className="text-title text-brand-navy mb-3 group-hover:text-brand-navy-light transition-colors duration-300">
                {pain.title}
              </h3>
              <p className="text-body text-brand-navy-light leading-relaxed">
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
