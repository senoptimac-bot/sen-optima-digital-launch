import { motion } from "framer-motion";
import { Settings, Globe, Rocket, ArrowRight } from "lucide-react";

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
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background - simplified */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="hidden md:block absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5" style={{ filter: 'blur(120px)' }} />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Notre méthode
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            L'<span className="text-gradient-gold">Écosystème</span> de Croissance
          </h2>
        </motion.div>

        {/* Steps with Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
                {/* Step Card */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative p-6 md:p-8 rounded-2xl glass-premium border border-accent/20 text-center min-w-[200px] md:min-w-[220px]"
                >
                  {/* Number badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    className="p-2"
                  >
                    <ArrowRight className="w-6 h-6 text-accent rotate-90 md:rotate-0" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="p-6 md:p-8 rounded-2xl glass-card border border-accent/30">
            <p className="text-lg md:text-xl text-foreground font-medium">
              💡 <span className="text-accent font-semibold">Message clé :</span>{" "}
              "On ne met pas le toit (Marketing) avant les fondations (Structure)."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
