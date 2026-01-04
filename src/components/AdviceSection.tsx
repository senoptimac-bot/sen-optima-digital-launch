import { motion } from "framer-motion";

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
            {/* Header */}
            <div className="flex items-center gap-3 mb-10">
              <span className="text-accent text-lg">✦</span>
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
              <p className="text-body-lg text-foreground/50 leading-relaxed">
                Beaucoup pensent que <span className="text-foreground">Digitaliser = Avoir une page TikTok.</span>
              </p>

              <p className="text-body-lg text-foreground/70 leading-relaxed">
                Digitaliser, c'est utiliser la technologie <span className="text-accent">(CRM, Automatisations, IA)</span> pour <span className="text-foreground">gagner du temps</span>.
              </p>

              <div className="pt-8 border-t border-foreground/5">
                <p className="text-body text-foreground/40">
                  Si votre "digital" vous prend plus de temps qu'il ne vous en fait gagner, <span className="text-foreground/60">c'est que vous le faites mal.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdviceSection;