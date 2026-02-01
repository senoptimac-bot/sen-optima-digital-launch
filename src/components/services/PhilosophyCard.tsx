import { motion } from "framer-motion";

interface PhilosophyCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const PhilosophyCard = ({ icon: Icon, title, description, index }: PhilosophyCardProps) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative p-8 card-cream group transition-all duration-300 text-left"
    >
      {/* Number indicator */}
      <div className="absolute top-6 right-6">
        <span className="text-xs font-mono text-accent/40">{String(index + 1).padStart(2, '0')}</span>
      </div>

      {/* Icon with accent styling */}
      <div className="icon-circle mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-accent" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default PhilosophyCard;
