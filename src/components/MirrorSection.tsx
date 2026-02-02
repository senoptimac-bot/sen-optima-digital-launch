import { motion } from "framer-motion";
import { UserX, Ghost, HelpCircle, AlertTriangle } from "lucide-react";
import situationImage from "@/assets/situation-actuelle.jpg";
const painPoints = [{
  icon: Ghost,
  title: "Le Prestataire Fantôme",
  description: "Fatigué des développeurs qui disparaissent après l'avance ? Nous fournissons un calendrier précis et un suivi hebdomadaire."
}, {
  icon: UserX,
  title: "L'Argent Perdu",
  description: "Votre page TikTok a des vues mais zéro commande ? Vous n'avez pas un problème de visibilité, vous avez un problème de système de vente."
}, {
  icon: HelpCircle,
  title: "Le Chaos Interne",
  description: "Vous gérez tout au stylo ou sur WhatsApp ? Si vous tombez malade demain, votre business s'arrête. Nous automatisons pour vous libérer."
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};
const MirrorSection = () => {
  return <section className="py-section-lg relative bg-background">
      <div className="container">
        {/* Header with Featured Image */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="max-w-4xl mx-auto mb-20">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="badge-accent">
              Le miroir
            </span>
          </div>

          {/* Featured Image - Large Rectangle */}
          <div className="relative mb-10 group">
            {/* Main Image Container */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-xl border border-border">
              <img src={situationImage} alt="Entrepreneur face aux défis business" className="w-full h-full object-cover object-[center_25%] group-hover:scale-102 transition-transform duration-300" loading="lazy" decoding="async" />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
              
              {/* Text overlay on image - Using p instead of h2 since this is decorative */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <p className="text-2xl md:text-4xl font-heading font-bold text-destructive-foreground">
                  Votre <span className="italic text-destructive">situation actuelle</span>
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/40 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/40 rounded-tr-lg" />
            </div>
          </div>

          {/* Subtitle below image */}
          <p className="text-center text-muted-foreground text-lg">
            Reconnaissez-vous ces symptômes ?
          </p>
        </motion.div>

        {/* Pain Points Cards */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {painPoints.map((pain, index) => <motion.div key={pain.title} variants={itemVariants} className="relative p-8 card-cream group transition-all duration-200 hover:translate-y-[-4px] hover:scale-[1.02]">
              {/* Number indicator */}
              <div className="absolute top-6 right-6">
                <span className="text-caption text-problem/40">{String(index + 1).padStart(2, '0')}</span>
              </div>

              {/* Icon with problem styling */}
              <div className="w-14 h-14 rounded-2xl bg-problem/10 flex items-center justify-center mb-6 group-hover:bg-problem/20 transition-colors duration-300">
                <pain.icon className="w-7 h-7 icon-problem-animated" />
              </div>

              {/* Content */}
              <h3 className="text-title text-foreground mb-3 group-hover:text-problem transition-colors duration-300">
                {pain.title}
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {pain.description}
              </p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default MirrorSection;