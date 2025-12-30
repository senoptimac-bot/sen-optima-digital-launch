import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="apropos" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-secondary/30 dark:from-secondary/20 dark:via-background dark:to-secondary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
              Notre philosophie
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3">
              À Propos de Sen'Optima
            </h2>
          </motion.div>

          {/* Manifesto Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative p-8 md:p-12 rounded-3xl glass-premium"
          >
            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold"
            >
              <Quote className="w-6 h-6 text-accent-foreground" />
            </motion.div>

            <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-foreground leading-relaxed mb-8">
              Chez Sen'Optima, nous pensons que chaque entrepreneur mérite un accompagnement clair.
            </blockquote>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Nous ne promettons pas la magie. Nous offrons le{" "}
              <span className="text-accent font-semibold">travail</span>, la{" "}
              <span className="text-accent font-semibold">méthode</span> et la{" "}
              <span className="text-accent font-semibold">rigueur</span>.
            </p>

            {/* Decorative line */}
            <div className="mt-10 pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-heading font-bold text-foreground">Sen'Optima Consulting</p>
                  <p className="text-sm text-muted-foreground">
                    Cabinet de conseil digital basé à Dakar, Sénégal
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm text-muted-foreground">
                    Disponible pour nouveaux projets
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12"
          >
            {[
              { value: "Clarté", description: "Des solutions simples et compréhensibles" },
              { value: "Performance", description: "Des résultats mesurables et concrets" },
              { value: "Stratégie", description: "Une vision long terme pour votre succès" },
            ].map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="text-center p-6 rounded-2xl glass-card hover:glow-gold-subtle transition-all duration-300"
              >
                <h3 className="text-lg font-heading font-bold text-gradient-gold mb-2">
                  {item.value}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
