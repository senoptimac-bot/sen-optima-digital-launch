import { motion } from "framer-motion";
import { Trophy, TrendingUp, Star } from "lucide-react";

const AdviceSection = () => {
  return (
    <section className="py-section-lg relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-xl p-10 md:p-14">
            {/* Header with success icon */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 icon-success-animated" />
              </div>
              <span className="text-caption text-foreground/40 uppercase tracking-widest">
                Le Saviez-vous ?
              </span>
            </div>

            {/* Title */}
            <h2 className="text-headline text-foreground mb-10">
              L'erreur n°1 au Sénégal
            </h2>

            {/* Content */}
            <div className="space-y-8">
              <p className="text-body-lg text-foreground/70 leading-relaxed">
                Avoir un compte TikTok ou Instagram ne signifie pas être digitalisé. <span className="text-problem">Ça signifie être dépendant d'un algorithme.</span>
              </p>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/5 border border-accent/10">
                <TrendingUp className="w-6 h-6 icon-success-animated flex-shrink-0 mt-0.5" />
                <p className="text-body-lg text-foreground/70 leading-relaxed">
                  Une vraie digitalisation, c'est <span className="text-accent">posséder vos propres données</span>, votre propre site et votre propre fichier client.
                </p>
              </div>

              <div className="pt-8 border-t border-foreground/5">
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 icon-success mt-1 flex-shrink-0" />
                  <p className="text-body text-foreground/50">
                    C'est la différence entre être <span className="text-problem/80">locataire</span> et être <span className="text-accent">propriétaire</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdviceSection;
