import { motion } from "framer-motion";
import { Settings, Layers, Presentation, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const steps = [{
  icon: Settings,
  number: "01",
  title: "DIAGNOSTIC",
  description: "On regarde votre situation réelle, sans complaisance. Ce qui est déjà solide, et ce qui ne l'est pas encore."
}, {
  icon: Layers,
  number: "02",
  title: "STRUCTURATION",
  description: "On construit ce qui manque : le projet, le profil, le dossier. Étape par étape, avec vous."
}, {
  icon: Presentation,
  number: "03",
  title: "PRÉSENTATION",
  description: "Vous vous présentez prêt. Solide sur le fond, jamais maquillé en surface."
}];
const MethodSection = () => {
  return <section className="py-section-lg relative bg-background">
      {/* Decorative shapes */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] shape-blob opacity-20 -translate-y-1/2" />
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-left max-w-2xl mb-20">
          <span className="badge-accent mb-6 inline-block">
            Notre Méthode
          </span>
          <h2 className="text-headline text-foreground">
            Diagnostic. Structuration. <span className="italic text-accent">Présentation.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7
      }} className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => <motion.div key={step.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.4,
            delay: index * 0.1
          }} className="relative p-8 card-cream text-center group transition-all duration-200 hover:translate-y-[-4px] hover:scale-[1.02]">
                {/* Number */}
                <div className="text-caption text-accent font-bold mb-6">
                  {step.number}
                </div>

                {/* Icon with accent styling */}
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-title text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {step.description}
                </p>

                {/* Connector line for desktop */}
                {index < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30" />}
              </motion.div>)}
          </div>
        </motion.div>

        {/* Key Message */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3
      }} className="max-w-2xl">
          <div className="p-6 card-cream mb-12 text-left border-l-4 border-accent">
            <p className="text-body text-foreground">
              "On ne met pas le toit avant les fondations."
            </p>
          </div>

          {/* CTA Button */}
          <Button size="lg" asChild variant="hero">
            <Link to="/contact">
              Discuter de mon projet
              <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default MethodSection;