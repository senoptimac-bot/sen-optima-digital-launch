import { motion } from "framer-motion";
import { Settings, Globe, Rocket } from "lucide-react";

const steps = [
  {
    icon: Settings,
    number: "01",
    title: "Structurer",
    description: "Audit & Outils internes",
  },
  {
    icon: Globe,
    number: "02",
    title: "Digitaliser",
    description: "Site Web & Présence pro",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Accélérer",
    description: "Marketing & Publicité ciblée",
  },
];

const MethodSection = () => {
  return (
    <section className="py-section-lg relative px-5 md:px-0">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-caption text-foreground/40 uppercase tracking-widest mb-6">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Notre méthode
          </span>
          <h2 className="font-display text-headline text-foreground">
            L'<span className="text-accent">Écosystème</span> de Croissance
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-12 md:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 md:p-8 glass-card rounded-xl text-center active:scale-[0.98] transition-transform"
              >
                {/* Number */}
                <div className="text-caption text-accent mb-4 md:mb-6">
                  {step.number}
                </div>

                {/* Icon - Touch-reactive */}
                <div className="w-14 h-14 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 rounded-xl bg-foreground/5 flex items-center justify-center">
                  <step.icon className="w-7 h-7 md:w-6 md:h-6 text-foreground/50" />
                </div>

                {/* Content */}
                <h3 className="text-title text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-body text-foreground/40">
                  {step.description}
                </p>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-foreground/10" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="p-5 md:p-6 glass-card rounded-xl">
            <p className="text-body text-foreground/60">
              <span className="text-accent">✦</span>{" "}
              "On ne met pas le toit avant les fondations."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;