import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamMandiaye from "@/assets/team-mandiaye.svg";
import teamCoura from "@/assets/team-coura.svg";
import teamMohamed from "@/assets/team-mohamed.svg";
import teamCheikh from "@/assets/team-cheikh.svg";

const teamMembers = [
  {
    name: "Mohamed Alpha Ndiaye",
    role: "Stratégie Digitale & Direction Créative",
    tagline: "Intervient sur la définition des angles marketing, la structuration des messages et la cohérence globale des prises de parole digitales. Il relie la stratégie à l'exécution visuelle et garantit un positionnement clair et différenciant.",
    image: teamMohamed,
  },
  {
    name: "Coura Dieye Diop",
    role: "Lead Tech & Architecture Systèmes",
    tagline: "Conçoit des infrastructures digitales robustes, rapides et évolutives. Garantit la stabilité, la performance et la sécurité des plateformes déployées.",
    image: teamCoura,
  },
  {
    name: "Mandiaye Sylla",
    role: "Stratégie & Direction",
    tagline: "Définit les orientations stratégiques et supervise la cohérence globale des projets. Responsable des décisions structurantes et de l'alignement croissance / rentabilité.",
    image: teamMandiaye,
  },
  {
    name: "Cheikh A. Tidiane Ndiour",
    role: "Opérations & Développement",
    tagline: "Structure la prospection, le suivi client et l'optimisation des performances commerciales. Assure la fluidité entre stratégie, exécution et résultats.",
    image: teamCheikh,
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
            L'équipe qui structure{" "}
            <span className="italic text-accent">votre croissance.</span>
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
                <div className="relative w-full overflow-hidden bg-muted">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
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

        {/* CTA to contact page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild className="gap-2 rounded-full border-border hover:border-accent">
            <Link to="/contact">
              Discuter avec notre équipe
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
