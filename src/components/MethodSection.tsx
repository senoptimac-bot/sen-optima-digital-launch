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
    <section className="py-section-lg relative bg-background">
      {/* Decorative shapes */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] shape-blob opacity-20 -translate-y-1/2" />
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left max-w-2xl mb-20"
        >
          <span className="badge-accent mb-6 inline-block">
            Notre Méthode
          </span>
          <h2 className="text-headline text-foreground">
            L'<span className="italic text-solution">Écosystème</span> de Croissance
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
                className="relative p-8 card-cream text-center group transition-all duration-300"
              >
                {/* Number */}
                <div className="text-caption text-solution font-bold mb-6">
                  {step.number}
                </div>

                {/* Icon with solution styling */}
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-solution/10 flex items-center justify-center group-hover:bg-solution/20 transition-colors duration-300">
                  <step.icon className="w-7 h-7 icon-solution" />
                </div>

                {/* Content */}
                <h3 className="text-title text-foreground mb-2 group-hover:text-solution transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {step.description}
                </p>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-solution/30" />
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
          className="max-w-2xl"
        >
          <div className="p-6 card-cream mb-12 text-left border-l-4 border-accent">
            <p className="text-body text-foreground">
              "On ne met pas le toit avant les fondations."
            </p>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            asChild
            className="group gap-3 text-sm rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-500 h-14 px-10"
          >
            <Link to="/solutions">
              Lancer mon Audit Business
              <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
