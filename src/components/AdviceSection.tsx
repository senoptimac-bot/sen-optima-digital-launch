import { motion } from "framer-motion";
import { Trophy, TrendingUp, Star } from "lucide-react";

const AdviceSection = () => {
  return (
    <section className="py-section-lg relative bg-secondary/30">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] shape-blob opacity-30" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card-cream p-10 md:p-14">
            {/* Header with success icon */}
            <div className="flex items-center gap-3 mb-10">
              <div className="icon-circle-sm">
                <Trophy className="w-5 h-5 icon-success-animated" />
              </div>
              <span className="badge-accent">
                Le Saviez-vous ?
              </span>
            </div>

            {/* Title */}
            <h2 className="text-headline text-foreground mb-10">
              L'erreur n°1 au Sénégal
            </h2>

            {/* Content */}
            <div className="space-y-8">
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                Avoir un compte TikTok ou Instagram ne signifie pas être digitalisé. <span className="text-problem font-semibold">Ça signifie être dépendant d'un algorithme.</span>
              </p>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-accent/10 border border-accent/20">
                <TrendingUp className="w-6 h-6 icon-success-animated flex-shrink-0 mt-0.5" />
                <p className="text-body-lg text-foreground leading-relaxed">
                  Une vraie digitalisation, c'est <span className="text-accent font-semibold">posséder vos propres données</span>, votre propre site et votre propre fichier client.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 icon-success mt-1 flex-shrink-0" />
                  <p className="text-body text-muted-foreground">
                    C'est la différence entre être <span className="text-problem font-medium">locataire</span> et être <span className="text-accent font-semibold">propriétaire</span>.
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
