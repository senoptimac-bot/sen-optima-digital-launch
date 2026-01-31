import { motion } from "framer-motion";
import { Settings, Globe, Rocket, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Settings,
    number: "01",
    title: "DIAGNOSTIC",
    description: "On analyse vos blocages actuels sans filtre.",
  },
  {
    icon: Globe,
    number: "02",
    title: "STRATÉGIE",
    description: "On dessine votre système sur mesure. Vous validez tout.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "LIVRAISON",
    description: "On déploie, on vous forme, et on reste à vos côtés.",
  },
];

const MethodSection = () => {
  return (
    <section className="py-section-lg relative">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 text-caption text-foreground/40 uppercase tracking-widest mb-6">
            <Wrench className="w-3 h-3 icon-solution" />
            Notre méthode
          </span>
          <h2 className="text-headline text-foreground">
            L'<span className="text-solution">Écosystème</span> de Croissance
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative p-8 glass-card rounded-xl text-center group transition-all duration-300"
              >
                {/* Number */}
                <div className="text-caption text-solution mb-6">
                  {step.number}
                </div>

                {/* Icon with solution styling */}
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-solution/10 flex items-center justify-center group-hover:bg-solution/20 transition-colors duration-300">
                  <step.icon className="w-7 h-7 icon-solution-animated" />
                </div>

                {/* Content */}
                <h3 className="text-title text-foreground mb-2 group-hover:text-solution transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-body text-foreground/40">
                  {step.description}
                </p>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-solution/30" />
                )}

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-solution/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full" />
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
          <div className="p-6 glass-card rounded-xl mb-12">
            <p className="text-body text-foreground/60">
              <span className="text-solution">✦</span>{" "}
              "On ne met pas le toit avant les fondations."
            </p>
          </div>

          {/* CTA Button */}
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group gap-3 text-sm border-accent/50 bg-accent/10 hover:border-accent hover:bg-accent/20 text-accent transition-all duration-500 h-14 px-10"
          >
            <Link to="/solutions">
              Lancer mon Audit Business
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
