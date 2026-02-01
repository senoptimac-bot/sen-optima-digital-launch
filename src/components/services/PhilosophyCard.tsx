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
      <div className="p-6 rounded-2xl bg-white shadow-[0_4px_24px_-4px_hsl(218_70%_10%/0.12),0_8px_48px_-8px_hsl(218_70%_10%/0.08)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
        {/* Icon */}
        <div className="w-10 h-10 rounded-lg bg-brand-navy/10 flex items-center justify-center mb-4 group-hover:bg-brand-navy/15 transition-colors">
          <Icon className="w-5 h-5 text-brand-navy" />
        </div>
        
        {/* Content */}
        <h3 className="text-base md:text-lg font-heading font-bold text-brand-navy mb-2">
          {title}
        </h3>
        <p className="text-brand-navy-light text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default PhilosophyCard;
