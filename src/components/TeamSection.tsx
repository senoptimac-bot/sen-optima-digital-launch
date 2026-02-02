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
    <section className="py-section relative bg-secondary/30">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] shape-blob opacity-20" />
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-accent mb-6 inline-block">
            Notre Équipe
          </span>
          <h2 className="text-headline text-foreground mb-4">
            Ceux qui portent{" "}
            <span className="italic text-accent">votre ambition.</span>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              {/* Card Container */}
              <div className="rounded-3xl overflow-hidden card-cream">
                {/* Image Container */}
                <div 
                  className="relative w-full bg-gradient-to-b from-secondary to-muted"
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* Placeholder - Gold User Icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <User 
                      className="w-16 h-16 text-accent/30" 
                      strokeWidth={1}
                    />
                    <span className="mt-2 text-xs text-accent/50 italic">
                      Portrait à venir
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 bg-card">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
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
