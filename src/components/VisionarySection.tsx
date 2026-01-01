import { motion } from "framer-motion";
import { Box, Boxes, Network } from "lucide-react";

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
          {/* Glass Card */}
          <div className="relative glass-premium rounded-3xl p-8 md:p-12 border border-accent/30 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/10 pointer-events-none" />
            
            {/* Floating Geometric Icons */}
            <motion.div
              className="absolute -right-4 md:right-8 top-1/2 -translate-y-1/2 opacity-20 md:opacity-30"
              animate={{
                y: [-10, 10, -10],
                rotateZ: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative">
                <Boxes className="w-32 h-32 md:w-48 md:h-48 text-accent" strokeWidth={0.5} />
                <motion.div
                  className="absolute top-0 left-0"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Network className="w-32 h-32 md:w-48 md:h-48 text-primary" strokeWidth={0.5} />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl">
              {/* Small Label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-6"
              >
                <Box className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-wider">
                  Notre Vision
                </span>
              </motion.div>

              {/* Main Quote */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6"
              >
                <span className="text-gradient-gold">"L'informel est une étape.</span>
                <br />
                <span className="text-foreground">La structure est une destination."</span>
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                Nous transformons le potentiel brut du marché sénégalais en réussite organisée et pérenne.
              </motion.p>

              {/* Decorative Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-8 h-px bg-gradient-to-r from-accent via-accent/50 to-transparent origin-left"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionarySection;
