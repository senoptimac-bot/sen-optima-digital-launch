import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const timelineSteps = [
  {
    number: "01",
    title: "Clic",
    description: "Vous choisissez votre niveau de diagnostic.",
  },
  {
    number: "02",
    title: "Analyse",
    description: "Nous auditons votre situation (sans jugement).",
  },
  {
    number: "03",
    title: "Clarté",
    description: "Vous repartez avec une feuille de route précise.",
  },
];

const BridgeSection = () => {
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
            Prochaine étape
          </span>
          <h2 className="font-display text-headline text-foreground">
            À quoi vous attendre
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                {/* Number */}
                <div className="font-display text-display text-foreground/10 mb-4">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-title text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-body text-foreground/40">
                  {step.description}
                </p>
              </motion.div>
            ))}
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
            variant="outline"
            size="lg"
            className="gap-3 text-sm border-foreground/20 bg-transparent hover:border-accent hover:text-accent active:scale-[0.98] text-foreground/70 transition-all duration-300 h-14 px-8 md:px-10 w-full md:w-auto max-w-sm"
            asChild
          >
            <Link to="/diagnostics">
              Arrêter de naviguer à vue
            </Link>
          </Button>
          <p className="text-caption text-foreground/30 mt-4">
            Voir les Diagnostics disponibles
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BridgeSection;