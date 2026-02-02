import { forwardRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
  variant?: "accent" | "white" | "primary" | "glass";
}

// Card variant styles - each service gets a unique look
const variantStyles = {
  accent: {
    container: "bg-gradient-to-br from-accent to-accent/80",
    iconBg: "bg-white/20",
    iconColor: "text-white",
    number: "text-white/60",
    title: "text-white",
    subtitle: "text-white/70",
    text: "text-white/80",
    label: "text-white/60",
    arrow: "bg-white/20 text-white group-hover:bg-white group-hover:text-accent",
  },
  white: {
    container: "bg-card border border-border shadow-lg",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    number: "text-accent/60",
    title: "text-foreground",
    subtitle: "text-muted-foreground",
    text: "text-muted-foreground",
    label: "text-accent/80",
    arrow: "bg-secondary text-foreground group-hover:bg-accent group-hover:text-white",
  },
  primary: {
    container: "bg-gradient-to-br from-primary to-primary/90",
    iconBg: "bg-white/15",
    iconColor: "text-white",
    number: "text-accent",
    title: "text-white",
    subtitle: "text-white/60",
    text: "text-white/75",
    label: "text-accent",
    arrow: "bg-accent/20 text-accent group-hover:bg-accent group-hover:text-primary",
  },
  glass: {
    container: "bg-secondary/60 backdrop-blur-md border border-border/50",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    number: "text-accent/60",
    title: "text-foreground",
    subtitle: "text-muted-foreground",
    text: "text-muted-foreground",
    label: "text-accent/80",
    arrow: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white",
  },
};

// Assign variants to each card index
const getVariantByIndex = (index: number): keyof typeof variantStyles => {
  const variants: (keyof typeof variantStyles)[] = ["accent", "white", "primary", "glass"];
  return variants[index % 4];
};

const ServiceCard = forwardRef<HTMLElement, ServiceCardProps>(({ 
  icon: Icon, 
  number, 
  title, 
  subtitle, 
  forWho, 
  whatWeDo, 
  ourRequirement,
  index,
  variant: propVariant
}, ref) => {
  const variant = propVariant || getVariantByIndex(index);
  const styles = variantStyles[variant];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <div 
        className={cn(
          "relative p-6 md:p-8 rounded-3xl h-full flex flex-col",
          "transition-all duration-300",
          "hover:translate-y-[-6px] hover:shadow-2xl",
          styles.container
        )}
      >
        {/* Header Row */}
        <div className="flex items-start justify-between mb-6">
          {/* Icon Circle */}
          <div className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center",
            "transition-transform duration-300 group-hover:scale-110",
            styles.iconBg
          )}>
            <Icon className={cn("w-7 h-7", styles.iconColor)} />
          </div>

          {/* Number Badge */}
          <span className={cn(
            "text-3xl font-heading font-bold opacity-60",
            styles.number
          )}>
            {number}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Subtitle */}
          <span className={cn(
            "text-xs uppercase tracking-wider font-medium mb-2",
            styles.subtitle
          )}>
            {subtitle}
          </span>

          {/* Title */}
          <h3 className={cn(
            "text-xl md:text-2xl font-heading font-bold mb-4 leading-tight",
            styles.title
          )}>
            {title}
          </h3>

          {/* Description */}
          <p className={cn(
            "text-sm leading-relaxed mb-6 flex-1",
            styles.text
          )}>
            {whatWeDo}
          </p>

          {/* For Who Section */}
          <div className="mt-auto pt-4 border-t border-current/10">
            <span className={cn(
              "text-[10px] uppercase tracking-wider font-semibold block mb-2",
              styles.label
            )}>
              Pour qui
            </span>
            <p className={cn("text-sm leading-relaxed", styles.text)}>
              {forWho}
            </p>
          </div>
        </div>

        {/* Arrow indicator */}
        <div className={cn(
          "absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center",
          "transition-all duration-300",
          styles.arrow
        )}>
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </motion.article>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServiceCard;