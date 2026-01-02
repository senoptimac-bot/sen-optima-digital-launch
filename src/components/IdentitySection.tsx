import { motion } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IdentitySection = () => {
  return (
    <section id="identite" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background - simplified */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="hidden md:block absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-accent/5" style={{ filter: 'blur(100px)' }} />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Identité & Vérité
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Ce qui nous <span className="text-gradient-gold">différencie</span>
          </h2>
        </motion.div>

        {/* Bento Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left Column - Ce qu'on voit ailleurs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-3xl glass-card border border-destructive/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground">
                Ce qu'on voit ailleurs
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La plupart des agences vous vendent des logos et des posts Facebook.{" "}
              <span className="text-destructive font-medium">C'est de la décoration.</span>
            </p>
          </motion.div>

          {/* Right Column - Ce que Sen'Optima fait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 md:p-10 rounded-3xl glass-premium border border-accent/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gradient-gold">
                Ce que Sen'Optima fait
              </h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous, nous travaillons sur le moteur.{" "}
              <span className="text-accent font-medium">Processus internes, Acquisition Client Automatisée, Stratégie Financière.</span>{" "}
              Nous ne cherchons pas à faire "joli", nous cherchons à faire{" "}
              <span className="text-foreground font-semibold">"rentable"</span>.
            </p>
          </motion.div>
        </div>

        {/* CTA Button - centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-accent border border-accent/50 bg-transparent hover:bg-accent/10 hover:border-accent transition-all duration-300 rounded-sm group"
          >
            Explorer nos solutions stratégiques
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IdentitySection;
