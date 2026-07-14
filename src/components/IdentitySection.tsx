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
            Notre différence ne repose pas sur des <span className="italic text-accent">promesses.</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left - Ailleurs (Problem) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card-cream p-10 group transition-all duration-200 border-problem/20 hover:translate-y-[-4px] hover:scale-[1.02]"
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
                <span>Des promesses de résultat qui dépendent d'une autorité extérieure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-problem text-lg">✗</span>
                <span>Une approche standardisée, la même pour chaque client.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-problem text-lg">✗</span>
                <span>Un livrable vendu avant même d'avoir analysé le projet.</span>
              </li>
            </ul>
          </motion.div>

          {/* Right - Sen'Optima (Success) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="card-cream p-10 group transition-all duration-200 border-accent/30 shadow-gold hover:translate-y-[-4px] hover:scale-[1.02]"
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
                <span>Nous construisons avant de conseiller.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
                <span>Chaque accompagnement commence par une analyse stratégique.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-lg">✓</span>
                <span>Nous privilégions la crédibilité plutôt que la rapidité.</span>
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
            variant="hero"
            asChild
          >
            <Link to="/nos-expertises">
              Explorer nos expertises
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
