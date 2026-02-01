import { motion } from "framer-motion";
import { Eye, Shield, Target } from "lucide-react";
import { staggerVariants } from "@/hooks/useStaggerReveal";

const philosophyItems = [
  {
    icon: Eye,
    title: "Clarté",
    description: "On ne vous parle pas chinois. On vous explique clairement où va chaque franc CFA investi.",
  },
  {
    icon: Shield,
    title: "Performance",
    description: "Nous ne sommes pas des bricoleurs. Nos solutions sont testées, sécurisées et solides.",
  },
  {
    icon: Target,
    title: "Stratégie",
    description: "On ne construit pas pour demain, mais pour que votre entreprise tienne 10 ans.",
  },
];

const PhilosophySection = () => {
  return (
    <section className="py-section-lg relative">
      <div className="container">
        {/* Header - F-Pattern Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left max-w-2xl mb-20"
        >
          <span className="inline-flex items-center gap-2 text-caption text-foreground/40 uppercase tracking-widest mb-6">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Notre Philosophie
          </span>
          <h2 className="text-headline text-foreground">
            Nos <span className="text-accent">Valeurs</span>
          </h2>
        </motion.div>

        {/* Philosophy Cards with Stagger Animation */}
        <motion.div
          variants={staggerVariants.cards.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={staggerVariants.cards.item}
              className="relative p-8 glass-card rounded-xl group text-left"
            >
              {/* Number indicator */}
              <div className="absolute top-6 right-6">
                <span className="text-caption text-brand-navy-light">{String(index + 1).padStart(2, '0')}</span>
              </div>

              {/* Icon with navy styling */}
              <div className="w-14 h-14 rounded-xl bg-brand-navy/10 flex items-center justify-center mb-6 group-hover:bg-brand-navy/15 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-brand-navy" />
              </div>

              {/* Content */}
              <h3 className="text-title text-brand-navy mb-4 group-hover:text-brand-navy-light transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-body text-brand-navy-light leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-brand-navy/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
