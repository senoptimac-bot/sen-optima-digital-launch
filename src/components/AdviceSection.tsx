import { motion } from "framer-motion";
import { Lightbulb, AlertTriangle } from "lucide-react";

const AdviceSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background - simplified */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      <div className="hidden md:block absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5" style={{ filter: 'blur(120px)' }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl glass-premium border border-accent/30">
            {/* Header badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-sm text-accent font-medium uppercase tracking-wider">
                  Le Saviez-vous ?
                </span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  L'erreur n°1 au Sénégal
                </h2>
              </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/20"
              >
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-muted-foreground leading-relaxed">
                  Beaucoup pensent que <span className="text-foreground font-medium">Digitaliser = Avoir une page TikTok.</span>{" "}
                  <span className="text-destructive font-semibold">C'est faux.</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-4 rounded-xl bg-accent/5 border border-accent/20"
              >
                <p className="text-lg text-foreground leading-relaxed">
                  Digitaliser, c'est utiliser la technologie{" "}
                  <span className="text-accent font-semibold">(CRM, Automatisations, IA)</span>{" "}
                  pour <span className="text-gradient-gold font-bold">gagner du temps</span>.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-center pt-4 border-t border-foreground/10"
              >
                Si votre "digital" vous prend plus de temps qu'il ne vous en fait gagner,{" "}
                <span className="text-foreground font-medium">c'est que vous le faites mal.</span>
              </motion.p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-accent/5 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdviceSection;
