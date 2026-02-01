import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "relative p-5 md:p-6 rounded-xl cursor-pointer transition-all duration-300",
          "bg-card/60 backdrop-blur-sm",
          "hover:bg-card",
          isExpanded && "bg-card"
        )}
      >
        {/* Header Row */}
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-accent/15">
            <Icon className="w-5 h-5 text-accent" />
          </div>

          {/* Title & Number */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-mono text-accent/70 uppercase tracking-wider">{number}</span>
              <span className="text-accent/30">—</span>
              <span className="text-xs text-muted-foreground">{subtitle}</span>
            </div>
            <h3 className="text-base md:text-lg font-heading font-bold text-foreground leading-snug">
              {title}
            </h3>
          </div>

          {/* Expand Arrow */}
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
            "bg-secondary/50 group-hover:bg-secondary",
            isExpanded && "bg-accent/10"
          )}>
            <ChevronRight className={cn(
              "w-4 h-4 text-muted-foreground transition-transform duration-300",
              isExpanded && "rotate-90 text-accent"
            )} />
          </div>
        </div>

        {/* Preview - Always Visible */}
        <p className="text-muted-foreground text-sm leading-relaxed mt-4 line-clamp-2">
          {whatWeDo}
        </p>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0 
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="pt-5 space-y-4">
            {/* Divider */}
            <div className="h-px bg-border/50" />
            
            {/* For Who */}
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-accent/80 block mb-1.5">
                Pour qui
              </span>
              <p className="text-foreground/80 text-sm leading-relaxed">{forWho}</p>
            </div>

            {/* Our Requirement */}
            <div className="pl-3 border-l-2 border-accent/30">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-accent/80 block mb-1.5">
                Notre exigence
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed">{ourRequirement}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
