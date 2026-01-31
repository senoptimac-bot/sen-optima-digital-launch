import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ElementType;
  number: string;
  title: string;
  subtitle: string;
  forWho: string;
  whatWeDo: string;
  ourRequirement: string;
  index: number;
}

const ServiceCard = ({ 
  icon: Icon, 
  number, 
  title, 
  subtitle, 
  forWho, 
  whatWeDo, 
  ourRequirement,
  index 
}: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      {/* Main Card - Always Visible */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "relative p-6 md:p-8 rounded-2xl cursor-pointer transition-all duration-500",
          "glass-card border border-foreground/10",
          "hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5",
          isExpanded && "border-accent/40 shadow-lg shadow-accent/10"
        )}
      >
        {/* Number Badge */}
        <span className="absolute top-4 right-4 text-xs font-mono text-accent/50">
          {number}
        </span>

        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className={cn(
            "w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0",
            "bg-accent/10 group-hover:bg-accent/15 transition-colors duration-300"
          )}>
            <Icon className="w-6 h-6 md:w-7 md:h-7 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-heading font-bold text-foreground leading-tight">
              {title}
            </h3>
            <p className="text-sm text-accent/70 mt-1">{subtitle}</p>
          </div>
        </div>

        {/* Preview Text - Always Visible */}
        <p className="text-foreground/60 text-sm md:text-base leading-relaxed line-clamp-2">
          {whatWeDo}
        </p>

        {/* Expand Indicator */}
        <div className="flex items-center justify-center mt-4 pt-4 border-t border-foreground/5">
          <span className="text-xs text-foreground/40 mr-2">
            {isExpanded ? "Moins de détails" : "Plus de détails"}
          </span>
          <ChevronDown className={cn(
            "w-4 h-4 text-foreground/40 transition-transform duration-300",
            isExpanded && "rotate-180"
          )} />
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-6 space-y-5">
            {/* For Who */}
            <div className="p-4 rounded-xl bg-foreground/5">
              <span className="text-xs uppercase tracking-wider font-semibold text-accent block mb-2">
                Pour qui
              </span>
              <p className="text-foreground/70 text-sm leading-relaxed">{forWho}</p>
            </div>

            {/* Our Requirement */}
            <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
              <span className="text-xs uppercase tracking-wider font-semibold text-accent block mb-2">
                Notre exigence
              </span>
              <p className="text-foreground/60 text-sm leading-relaxed italic">{ourRequirement}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
