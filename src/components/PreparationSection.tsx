import { motion } from "framer-motion";
import SiteImage from "@/components/SiteImage";
import situationImage from "@/assets/notre-conviction.jpg";

const PreparationSection = () => {
  return (
    <section className="py-section-lg relative bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <SiteImage
              src={situationImage}
              alt="Consultante Sen'Optima Consulting échangeant avec une cliente sur son projet"
              className="w-full aspect-[3/4] object-cover object-[50%_25%] rounded-[2rem] border-2 border-accent/30"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="badge-accent mb-6 inline-block">Notre conviction</span>
            <h2 className="text-headline text-foreground mb-6">
              Un bon dossier est la conséquence <span className="italic text-accent">d'un bon profil.</span>
            </h2>
            <p className="text-body-lg text-muted-foreground leading-relaxed mb-6">
              Nous privilégions la préparation à la précipitation. Avant toute démarche,
              nous aidons chaque client à clarifier ses objectifs, structurer son parcours
              et construire un projet cohérent.
            </p>
            <p className="text-body-lg font-bold text-foreground leading-relaxed">
              Nous renforçons des profils réels. Nous n'habillons pas des dossiers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreparationSection;
