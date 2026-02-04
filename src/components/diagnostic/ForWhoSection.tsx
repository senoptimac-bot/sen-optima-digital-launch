import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const ForWhoSection = () => {
  const forWho = [
    "Activité déjà lancée",
    "Volonté de structuration",
    "Ouverture à une remise en question",
  ];

  const notForWho = [
    "Recherche de solution magique",
    "Refus de changer ses méthodes",
    "Besoin d'un simple site ou publicité",
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
          Ce diagnostic est-il <span className="italic text-accent">fait pour vous</span> ?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pour qui */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-title font-heading font-bold text-solution mb-6 text-left">
              Pour vous si...
            </h3>
            <ul className="space-y-4">
              {forWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-left">
                  <div className="w-6 h-6 rounded-full bg-solution/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-solution" />
                  </div>
                  <span className="text-foreground font-subheading">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pas pour qui */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-title font-heading font-bold text-destructive mb-6 text-left">
              Pas pour vous si...
            </h3>
            <ul className="space-y-4">
              {notForWho.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-left">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-foreground font-subheading">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
