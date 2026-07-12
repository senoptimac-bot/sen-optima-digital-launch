import { ImageIcon } from "lucide-react";

interface PhotoPlaceholderProps {
  label: string;
  aspect?: string;
  className?: string;
}

/**
 * Marked placeholder for a real photo not yet provided by the client.
 * Mirrors FounderVideoPlayer's "not provided yet" treatment — never a stock
 * face or a fabricated image, just a clearly labeled empty slot.
 */
const PhotoPlaceholder = ({ label, aspect = "aspect-[4/3]", className = "" }: PhotoPlaceholderProps) => (
  <div
    className={`${aspect} rounded-[2rem] border-2 border-dashed border-accent/40 bg-muted/40 flex flex-col items-center justify-center gap-3 text-center px-6 ${className}`}
  >
    <div className="w-14 h-14 rounded-full border-2 border-accent/40 flex items-center justify-center">
      <ImageIcon className="w-6 h-6 text-muted-foreground/50" />
    </div>
    <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground/70">{label}</span>
  </div>
);

export default PhotoPlaceholder;
