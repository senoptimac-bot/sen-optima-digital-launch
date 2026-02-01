import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, XCircle, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const IdentitySection = () => {
  return (
    <section id="identite" className="py-section-lg relative">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 text-caption text-foreground/40 uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3 icon-success" />
            Identité & Vérité
          </span>
          <h2 className="text-headline text-foreground">
            Ce qui nous <span className="text-accent">différencie</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left - Ailleurs (Problem) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-xl p-10 group transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-problem/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 icon-problem-animated" />
              </div>
              <h3 className="text-title text-foreground/60">
                Ailleurs
              </h3>
            </div>
            <ul className="space-y-4 text-body text-foreground/50">
              <li className="flex items-start gap-3">
                <span className="text-problem">❌</span>
                <span>Les agences qui vendent du rêve.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-problem">❌</span>
                <span>Les délais jamais respectés.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-problem">❌</span>
                <span>Le jargon pour justifier le prix.</span>
              </li>
            </ul>
          </motion.div>

          {/* Right - Sen'Optima (Success) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-xl p-10 group transition-all duration-300 border-accent/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 icon-success-animated" />
              </div>
              <h3 className="text-title text-foreground">
                <span className="text-accent">Sen'Optima</span>
              </h3>
            </div>
            <ul className="space-y-4 text-body text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-accent">✅</span>
                <span>Des systèmes, pas du bricolage.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">✅</span>
                <span>Un calendrier tenu à la lettre.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent">✅</span>
                <span>Des résultats, pas des excuses.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-16"
        >
          <Button
            variant="outline"
            className="gap-2 border-foreground/20 text-foreground/70 hover:border-accent hover:text-accent"
            asChild
          >
            <Link to="/services">
              Explorer nos solutions stratégiques
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IdentitySection;