import { motion } from "framer-motion";
import { CreditCard, FileQuestion, BarChart3, PhoneCall } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: CreditCard,
      title: "Paiement sécurisé",
      description: "Réglez une seule fois pour accéder au diagnostic complet.",
    },
    {
      icon: FileQuestion,
      title: "30 questions guidées",
      description: "Répondez à des questions précises sur votre activité.",
    },
    {
      icon: BarChart3,
      title: "Score + Synthèse",
      description: "Recevez votre niveau de maturité et une analyse claire.",
    },
    {
      icon: PhoneCall,
      title: "Appel stratégique",
      description: "Option de réserver un appel pour aller plus loin.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-headline font-bold text-foreground mb-12 text-left"
        >
          Comment <span className="italic text-accent">ça fonctionne</span> ?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-left"
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-heading font-bold text-sm">
                  {index + 1}
                </span>
                <step.icon className="w-5 h-5 text-accent" />
              </div>
              
              <h3 className="font-heading font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground font-subheading">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
