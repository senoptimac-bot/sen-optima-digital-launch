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
          <div className="glass-card glass-card-warning rounded-xl p-10 md:p-14">
            {/* Header with warning icon */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                <Trophy className="w-5 h-5 icon-semantic-warning" />
              </div>
              <span className="text-caption text-brand-navy-light uppercase tracking-widest">
                Le Saviez-vous ?
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy mb-10">
              L'erreur n°1 au Sénégal
            </h2>

            {/* Content */}
            <div className="space-y-8">
              <p className="text-lg text-brand-navy-light leading-relaxed">
                Avoir un compte TikTok ou Instagram ne signifie pas être digitalisé. <span className="text-brand-navy font-semibold">Ça signifie être dépendant d'un algorithme.</span>
              </p>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-orange-50 border border-orange-200">
                <TrendingUp className="w-6 h-6 icon-semantic-warning flex-shrink-0 mt-0.5" />
                <p className="text-lg text-brand-navy-light leading-relaxed">
                  Une vraie digitalisation, c'est <span className="text-brand-navy font-semibold">posséder vos propres données</span>, votre propre site et votre propre fichier client.
                </p>
              </div>

              <div className="pt-8 border-t border-brand-navy/10">
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 icon-semantic-success flex-shrink-0 mt-1" />
                  <p className="text-body text-brand-navy-light">
                    C'est la différence entre être <span className="text-brand-navy font-medium">locataire</span> et être <span className="text-brand-navy font-medium">propriétaire</span>.
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
