import { motion } from "framer-motion";

interface PhilosophyCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const PhilosophyCard = ({ icon: Icon, title, description, index }: PhilosophyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border/30 hover:shadow-md transition-all duration-300">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        
        {/* Content */}
        <h3 className="text-base md:text-lg font-heading font-bold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default PhilosophyCard;
