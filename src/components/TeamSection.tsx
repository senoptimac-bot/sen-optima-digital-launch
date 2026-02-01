import { motion } from "framer-motion";
import { User } from "lucide-react";
import { staggerVariants } from "@/hooks/useStaggerReveal";

const teamMembers = [
  {
    name: "Mandiaye",
    role: "Stratégie & Vision",
    tagline: "Le Gardien du Cap.",
  },
  {
    name: "Coura",
    role: "Lead Tech & Systèmes",
    tagline: "L'Architecte Invisible.",
  },
  {
    name: "Mohamed",
    role: "Direction Créative",
    tagline: "L'Art de Convaincre.",
  },
  {
    name: "Cheikh",
    role: "Opérations & Growth",
    tagline: "Le Moteur de l'Agence.",
  },
];

const TeamSection = () => {
  return (
    <section className="py-section relative">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section Header - F-Pattern Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16 max-w-2xl"
        >
          <h2 className="text-headline text-foreground mb-4">
            Ceux qui portent{" "}
            <span className="text-accent">votre ambition.</span>
          </h2>
          <p className="text-body-lg text-muted-foreground font-subheading">
            Pas d'anonymat. Pas de sous-traitance obscure. Voici les experts qui pilotent votre croissance.
          </p>
        </motion.div>

        {/* Team Grid with Stagger Animation */}
        <motion.div 
          variants={staggerVariants.cards.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerVariants.cards.item}
              className="group"
            >
              {/* Card Container */}
              <div className="rounded-2xl overflow-hidden bg-white shadow-[0_4px_24px_-4px_hsl(218_70%_10%/0.12),0_8px_48px_-8px_hsl(218_70%_10%/0.08)] border-2 border-transparent hover:border-accent hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
                {/* Image Container - Reduced aspect ratio */}
                <div 
                  className="relative w-full bg-gradient-to-b from-[hsl(218_70%_20%)] to-[hsl(218_70%_8%)]"
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* Placeholder - Navy User Icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <User 
                      className="w-16 h-16 text-foreground/20" 
                      strokeWidth={1}
                    />
                    <span className="mt-2 text-xs text-foreground/30 italic">
                      Portrait à venir
                    </span>
                  </div>
                </div>

                {/* Text Content - BELOW the image */}
                <div className="p-5 bg-white">
                  <h3 className="text-xl font-heading font-bold text-brand-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-brand-navy-light font-subheading mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-brand-navy-light italic">
                    "{member.tagline}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
