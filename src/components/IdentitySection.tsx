import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, XCircle, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const IdentitySection = () => {
  return (
    <section id="identite" className="py-section-lg relative bg-secondary/30">
      {/* Decorative shapes */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] shape-blob opacity-30 -translate-y-1/2" />
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="badge-accent mb-6 inline-block">
            Identité & Vérité
          </span>
          <h2 className="text-headline text-foreground">
            Ce qui nous <span className="italic text-accent">différencie</span>
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
            className="card-cream p-10 group transition-all duration-300 border-problem/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-problem/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 icon-problem-animated" />
              </div>
              <h3 className="text-title text-muted-foreground">
                Ailleurs
              </h3>
            </div>
            <ul className="space-y-4 text-body text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-problem text-lg">✗</span>
                <span>Les agences qui vendent du rêve.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-problem text-lg">✗</span>
                <span>Les délais jamais respectés.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-problem text-lg">✗</span>
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
            className="card-cream p-10 group transition-all duration-300 border-accent/30 shadow-gold"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 icon-success-animated" />
              </div>
              <h3 className="text-title text-foreground">
                <span className="text-accent font-bold">Sen'Optima</span>
              </h3>
            </div>
            <ul className="space-y-4 text-body text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
                <span>Des systèmes, pas du bricolage.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
                <span>Un calendrier tenu à la lettre.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
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
            size="lg"
            className="gap-3 rounded-full bg-foreground text-background hover:bg-foreground/90 h-14 px-8"
            asChild
          >
            <Link to="/services">
              Explorer nos solutions
              <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IdentitySection;
