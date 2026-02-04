import { motion } from "framer-motion";
import { Target, Layers, AlertTriangle, Eye, Compass } from "lucide-react";

const WhatYouGetSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Score global de maturité",
      description: "Un chiffre clair pour évaluer votre situation actuelle.",
    },
    {
      icon: Layers,
      title: "Lecture par pilier",
      description: "Situation, Offre, Vente, Organisation, Vision.",
    },
    {
      icon: AlertTriangle,
      title: "Identification des blocages",
      description: "Les points faibles qui freinent votre croissance.",
    },
    {
      icon: Eye,
      title: "Vision claire des priorités",
      description: "Savoir par où commencer pour progresser.",
    },
    {
      icon: Compass,
      title: "Orientation stratégique",
      description: "Des pistes concrètes pour avancer.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card/30">
      <div className="container max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-headline font-bold text-foreground mb-12 text-left"
        >
          Ce que vous <span className="italic text-accent">obtenez</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="font-heading font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground font-subheading">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
