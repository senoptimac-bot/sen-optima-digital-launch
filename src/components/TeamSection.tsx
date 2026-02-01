import { motion } from "framer-motion";
import { User } from "lucide-react";

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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline text-foreground mb-4">
            Ceux qui portent{" "}
            <span className="text-accent">votre ambition.</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto font-subheading">
            Pas d'anonymat. Pas de sous-traitance obscure. Voici les experts qui pilotent votre croissance.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Card Container */}
              <div className="rounded-2xl border border-[#D4A73B]/20 overflow-hidden bg-background/20">
                {/* Image Container - Reduced aspect ratio */}
                <div 
                  className="relative w-full bg-gradient-to-b from-[#11224A] to-[#050A15]"
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* Placeholder - Gold User Icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <User 
                      className="w-16 h-16 text-accent/20" 
                      strokeWidth={1}
                    />
                    <span className="mt-2 text-xs text-accent/30 italic">
                      Portrait à venir
                    </span>
                  </div>
                </div>

                {/* Text Content - BELOW the image */}
                <div className="p-5 bg-background/40">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-subheading mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    "{member.tagline}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
