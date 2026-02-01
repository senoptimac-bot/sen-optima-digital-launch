import { motion } from "framer-motion";
import { Bot, UserCheck, FileText, ArrowRight } from "lucide-react";

const SolutionsEducational = () => {
  const steps = [
    {
      icon: Bot,
      title: "Ce que l'IA a fait",
      description: "Identifier vos symptômes digitaux à travers 10 indicateurs clés de maturité.",
      color: "text-blue-400",
    },
    {
      icon: UserCheck,
      title: "Ce qu'un humain doit faire",
      description: "Creuser les causes profondes, comprendre votre contexte unique, et designer une solution sur mesure.",
      color: "text-accent",
    },
    {
      icon: FileText,
      title: "Ce que vous obtiendrez",
      description: "Un plan d'action chiffré avec priorités, budget, et calendrier de déploiement.",
      color: "text-green-400",
    },
  ];

  return (
    <section className="py-20 relative border-t border-foreground/5">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-headline text-foreground mb-4">
            Pourquoi le <span className="text-accent">Diagnostic Humain</span> est Obligatoire
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-subheading">
            L'IA identifie la fracture. L'expert construit le pont.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card rounded-2xl p-6 relative"
            >
              {/* Arrow between cards */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-accent/50" />
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl bg-background/50 border border-foreground/10 flex items-center justify-center mb-4 ${step.color}`}>
                <step.icon className="w-7 h-7" />
              </div>

              <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-foreground/80 italic font-subheading">
            "Un score sans plan d'action, c'est comme un diagnostic médical sans ordonnance."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default SolutionsEducational;
