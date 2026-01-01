import { motion } from "framer-motion";
import { Box, Boxes } from "lucide-react";

const VisionarySection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glass Card - optimized */}
          <div className="relative glass-premium rounded-3xl p-8 md:p-12 border border-accent/30 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/10 pointer-events-none" />
            
            {/* Static Icon - desktop only */}
            <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
              <Boxes className="w-48 h-48 text-accent" strokeWidth={0.5} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl">
              {/* Small Label */}
              <div className="flex items-center gap-2 mb-6">
                <Box className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  Notre Vision
                </span>
              </div>

              {/* Main Quote */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                <span className="text-gradient-gold">"L'informel est une étape.</span>
                <br />
                <span className="text-foreground">La structure est une destination."</span>
              </h2>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Nous transformons le potentiel brut du marché sénégalais en réussite organisée et pérenne.
              </p>

              {/* Decorative Line */}
              <div className="mt-8 h-px bg-gradient-to-r from-accent via-accent/50 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionarySection;
