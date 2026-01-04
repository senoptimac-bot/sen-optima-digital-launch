import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
            <span className="w-1 h-1 rounded-full bg-accent" />
            Identité & Vérité
          </span>
          <h2 className="text-headline text-foreground">
            Ce qui nous <span className="text-accent">différencie</span>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left - Ce qu'on voit ailleurs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl p-10"
          >
            <h3 className="text-title text-foreground/60 mb-6">
              Ce qu'on voit ailleurs
            </h3>
            <p className="text-body text-foreground/40 leading-relaxed">
              La plupart des agences vous vendent des logos et des posts Facebook.{" "}
              <span className="text-foreground/60">C'est de la décoration.</span>
            </p>
          </motion.div>

          {/* Right - Ce que Sen'Optima fait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-xl p-10"
          >
            <h3 className="text-title text-foreground mb-6">
              Ce que <span className="text-accent">Sen'Optima</span> fait
            </h3>
            <p className="text-body text-foreground/50 leading-relaxed">
              Nous travaillons sur le moteur.{" "}
              <span className="text-foreground/70">Processus internes, Acquisition Client Automatisée, Stratégie Financière.</span>{" "}
              Nous cherchons à faire <span className="text-foreground">rentable</span>.
            </p>
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
          <Link
            to="/services"
            className="text-[13px] text-foreground/50 hover:text-accent transition-colors duration-300 uppercase tracking-widest"
          >
            Explorer nos solutions stratégiques →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IdentitySection;