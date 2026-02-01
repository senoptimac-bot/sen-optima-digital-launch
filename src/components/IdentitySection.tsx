import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, XCircle, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerVariants } from "@/hooks/useStaggerReveal";

const IdentitySection = () => {
  return (
    <section id="identite" className="py-section-lg relative">
      <div className="container">
        {/* Header - F-Pattern Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left max-w-2xl mb-20"
        >
          <span className="inline-flex items-center gap-2 text-caption text-foreground/40 uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3 icon-success" />
            Identité & Vérité
          </span>
          <h2 className="text-headline text-foreground">
            Ce qui nous <span className="text-accent">différencie</span>
          </h2>
        </motion.div>

        {/* Two columns with Stagger Animation */}
        <motion.div 
          variants={staggerVariants.cards.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Left - Ailleurs (Problem) */}
          <motion.div
            variants={staggerVariants.cards.item}
            className="glass-card glass-card-danger rounded-xl p-10 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                <XCircle className="w-5 h-5 icon-semantic-danger" />
              </div>
              <h3 className="text-title text-brand-navy/70">
                Ailleurs
              </h3>
            </div>
            <ul className="space-y-4 text-body">
              <li className="flex items-start gap-3">
                <span className="text-semantic-danger font-medium">✗</span>
                <span className="text-brand-navy-light">Les agences qui vendent du rêve.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-semantic-danger font-medium">✗</span>
                <span className="text-brand-navy-light">Les délais jamais respectés.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-semantic-danger font-medium">✗</span>
                <span className="text-brand-navy-light">Le jargon pour justifier le prix.</span>
              </li>
            </ul>
          </motion.div>

          {/* Right - Sen'Optima (Success) */}
          <motion.div
            variants={staggerVariants.cards.item}
            className="glass-card glass-card-success rounded-xl p-10 group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 icon-semantic-success" />
              </div>
              <h3 className="text-title text-brand-navy">
                Sen'Optima
              </h3>
            </div>
            <ul className="space-y-4 text-body">
              <li className="flex items-start gap-3">
                <span className="text-semantic-success font-medium">✓</span>
                <span className="text-brand-navy-light">Des systèmes, pas du bricolage.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-semantic-success font-medium">✓</span>
                <span className="text-brand-navy-light">Un calendrier tenu à la lettre.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-semantic-success font-medium">✓</span>
                <span className="text-brand-navy-light">Des résultats, pas des excuses.</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-start mt-16"
        >
          <Button
            variant="outline"
            className="gap-2 border-foreground/20 text-foreground/70 hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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