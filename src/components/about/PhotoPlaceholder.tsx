import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: "square" | "landscape" | "portrait";
}

const PhotoPlaceholder = ({ 
  label = "Photo à venir", 
  className,
  aspectRatio = "landscape" 
}: PhotoPlaceholderProps) => {
  const aspectClasses = {
    square: "aspect-square",
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
  };

  return (
    <div 
      className={cn(
        "relative w-full rounded-3xl overflow-hidden",
        "bg-gradient-to-br from-secondary via-secondary/80 to-muted",
        "border-2 border-dashed border-border/50",
        "flex items-center justify-center",
        "group hover:border-accent/30 transition-all duration-300",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-6">
        {/* Icon container */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-300">
          <Camera className="w-8 h-8 md:w-10 md:h-10 text-accent/60 group-hover:text-accent transition-colors duration-300" />
        </div>

        {/* Label */}
        <p className="text-sm md:text-base font-heading font-semibold text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">
          {label}
        </p>
        
        {/* Subtle hint */}
        <p className="text-xs text-muted-foreground/60 mt-1">
          Photo de l'équipe
        </p>
      </div>

      {/* Corner accents */}
      <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-accent/20 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-accent/20 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-accent/20 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-accent/20 rounded-br-lg" />
    </div>
  );
};

export default PhotoPlaceholder;