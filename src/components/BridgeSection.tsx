import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MousePointer, Search, Map, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const timelineSteps = [
  {
    icon: MousePointer,
    number: "1",
    title: "Clic",
    description: "Vous choisissez votre niveau de diagnostic.",
  },
  {
    icon: Search,
    number: "2",
    title: "Analyse",
    description: "Nous auditons votre situation (sans jugement).",
  },
  {
    icon: Map,
    number: "3",
    title: "Clarté",
    description: "Vous repartez avec une feuille de route précise, que vous travailliez avec nous ou non.",
  },
];

const BridgeSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/10 blur-[150px]" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Prochaine étape
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            À quoi vous attendre en <span className="text-gradient-gold">cliquant ci-dessous</span> ?
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative">
            {/* Connecting line - Desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

            <div className="grid md:grid-cols-3 gap-8">
              {timelineSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Icon circle */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-full glass-premium border-2 border-accent flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                      <span className="text-sm font-bold text-accent-foreground">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="cta"
            size="lg"
            className="gap-3 text-lg px-10 py-7 glow-gold hover:glow-gold transition-all duration-300"
            asChild
          >
            <Link to="/diagnostics">
              Arrêter de naviguer à vue
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Voir les Diagnostics disponibles
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BridgeSection;
