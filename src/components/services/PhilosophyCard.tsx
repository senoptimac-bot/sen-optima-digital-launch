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
      <div className="p-6 rounded-2xl bg-white border border-brand-navy/10 hover:border-accent/30 transition-all duration-300 shadow-md">
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        
        {/* Content */}
        <h3 className="text-base md:text-lg font-heading font-bold text-accent mb-2">
          {title}
        </h3>
        <p className="text-brand-navy text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default PhilosophyCard;
