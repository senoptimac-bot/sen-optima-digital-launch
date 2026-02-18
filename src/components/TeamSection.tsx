import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mandiayeImg from "@/assets/Mandiaye.jpg";
import couraImg from "@/assets/Coura.jpg";
import mohamedImg from "@/assets/Mohamed.jpg";
import ndiourImg from "@/assets/Ndiour.jpg";
import djibyImg from "@/assets/djiby.jpeg";

const teamMembers = [
  {
    name: "Mandiaye Sylla",
    role: "Direction & Stratégie Digitale",
    tagline: "Définit les orientations stratégiques, les angles marketing et supervise les décisions structurantes.",
    image: mandiayeImg,
  },
  {
    name: "Mohamed Alpha Ndiaye",
    role: "Direction Créative & Exécution Digitale",
    tagline: "Met en œuvre les stratégies définies et assure la cohérence visuelle et marketing des projets.",
    image: mohamedImg,
  },
  {
    name: "Coura Dieye Diop",
    role: "Architecture & Systèmes",
    tagline: "Conçoit et déploie les infrastructures digitales.",
    image: couraImg,
  },
  {
    name: "Cheikh A. Tidiane Ndiour",
    role: "Opérations & Développement",
    tagline: "Structure la prospection et le suivi des performances.",
    image: ndiourImg,
  },
  {
    name: "Djiby",
    role: "Pilote du Pôle Production Visuelle",
    tagline: "Pilote la production visuelle et la cohérence créative des contenus.",
    image: djibyImg,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group h-full flex"
            >
              {/* Card Container - hauteur fixe pour toutes les cartes */}
              <div className="rounded-3xl overflow-hidden card-cream flex flex-col h-full w-full">
                {/* Image - même ratio pour toutes */}
                <div className="relative w-full overflow-hidden bg-muted aspect-[3/4] shrink-0 flex-none">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Text - hauteur fixe identique pour toutes les cartes */}
                <div className="p-5 bg-card flex-1 flex flex-col min-h-[170px] h-[170px]">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300 truncate" title={member.name}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-subheading mb-2 line-clamp-2" title={member.role}>
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground italic line-clamp-3 flex-1" title={member.tagline}>
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
