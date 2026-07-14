import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Anchor, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const philosophyItems = [
  {
    icon: ShieldCheck,
    title: "Franchise",
    description: "Nous vous disons non quand c'est non. Un conseil honnête vaut mieux qu'une promesse vide.",
  },
  {
    icon: Anchor,
    title: "Enracinement",
    description: "On construit du solide avant de viser l'ailleurs. Pas de raccourci.",
  },
  {
    icon: Target,
    title: "Rigueur",
    description: "La méthode plutôt que la précipitation, la qualité plutôt que le volume.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const PhilosophySection = () => {
  return (
    <section className="py-section-lg relative bg-background">
      {/* Decorative shapes */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] shape-blob opacity-20" />
      
      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left max-w-2xl mb-20"
        >
          <span className="badge-accent mb-6 inline-block">
            Notre Philosophie
          </span>
          <h2 className="text-headline text-foreground">
            Les principes qui guident chacune de nos <span className="italic text-accent">décisions.</span>
          </h2>
        </motion.div>

        {/* Philosophy Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="relative p-8 card-cream group transition-all duration-200 text-left hover:translate-y-[-4px] hover:scale-[1.02]"
            >
              {/* Number indicator */}
              <div className="absolute top-6 right-6">
                <span className="text-caption text-accent/40">{String(index + 1).padStart(2, '0')}</span>
              </div>

              {/* Icon with accent styling */}
              <div className="icon-circle mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-title text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA link to About page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="ghost" size="lg" asChild className="gap-2 text-muted-foreground hover:text-accent">
            <Link to="/a-propos">
              En savoir plus sur nous
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
