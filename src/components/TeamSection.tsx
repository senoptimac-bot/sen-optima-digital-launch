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
    name: "Mandiaye Sylla",
    role: "Direction & Stratégie Digitale",
    tagline: "Définit les orientations stratégiques, les angles marketing et supervise les décisions structurantes.",
    image: teamMandiaye,
  },
  {
    name: "Mohamed Alpha Ndiaye",
    role: "Direction Créative & Exécution Digitale",
    tagline: "Met en œuvre les stratégies définies et assure la cohérence visuelle et marketing des projets.",
    image: teamMohamed,
  },
  {
    name: "Coura Dieye Diop",
    role: "Architecture & Systèmes",
    tagline: "Conçoit et déploie les infrastructures digitales.",
    image: teamCoura,
  },
  {
    name: "Cheikh A. Tidiane Ndiour",
    role: "Opérations & Développement",
    tagline: "Structure la prospection et le suivi des performances.",
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
