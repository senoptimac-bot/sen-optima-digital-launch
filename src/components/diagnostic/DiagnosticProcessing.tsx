import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const DiagnosticProcessing = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        {/* Loader */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 mx-auto mb-8"
        >
          <Loader2 className="w-16 h-16 text-accent" />
        </motion.div>

        {/* Text */}
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
          Analyse en cours…
        </h2>
        <p className="text-muted-foreground font-subheading">
          Vos réponses sont analysées selon la méthode Sen'Optima.
        </p>

        {/* Animated dots */}
        <div className="flex justify-center gap-1 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 rounded-full bg-accent"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default DiagnosticProcessing;
