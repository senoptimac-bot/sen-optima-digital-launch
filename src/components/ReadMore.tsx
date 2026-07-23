import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface ReadMoreProps {
  children: React.ReactNode;
  collapsedHeight?: number;
  fadeFrom?: string;
  className?: string;
}

const ReadMore = ({ children, collapsedHeight = 200, fadeFrom = "from-background", className = "" }: ReadMoreProps) => {
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentId = useId();

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const measure = () => setFullHeight(el.scrollHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [children]);

  const overflowing = fullHeight !== null && fullHeight > collapsedHeight + 4;

  return (
    <div className={className}>
      <div
        id={contentId}
        ref={contentRef}
        className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{ maxHeight: !overflowing ? "none" : expanded ? `${fullHeight}px` : `${collapsedHeight}px` }}
      >
        {children}
        {overflowing && !expanded && (
          <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${fadeFrom} to-transparent`} />
        )}
      </div>
      {overflowing && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={contentId}
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
        >
          {expanded ? "Lire moins" : "Lire plus"}
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
};

export default ReadMore;
