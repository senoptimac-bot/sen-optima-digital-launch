import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SiteImage from "@/components/SiteImage";
import mobiliteImage from "@/assets/mobilite-home.jpg";
import entreprisesImage from "@/assets/developpement-entreprises-home.jpg";

const domains = [
  {
    title: "Mobilité Internationale",
    description: "Études, projet professionnel, visite : présentez-vous avec un dossier qui tient debout, sur un profil réellement prêt.",
    href: "/nos-expertises/mobilite-internationale",
    image: mobiliteImage,
    imageAlt: "Voyageur souriant avec sa valise dans un aéroport, prêt pour son projet international",
    imagePosition: "object-top",
  },
  {
    title: "Développement des Entreprises",
    description: "Formalisez, structurez et rendez votre activité crédible — pour grandir, et pour vos futurs projets à l'international.",
    href: "/nos-expertises/developpement-entreprises",
    image: entreprisesImage,
    imageAlt: "Consultante Sen'Optima Consulting présentant l'offre Développement des Entreprises",
    imagePosition: "object-[center_20%]",
  },
];

const ExpertisesOverviewSection = () => {
  return (
    <section id="nos-expertises" className="py-section-lg relative bg-background scroll-mt-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="badge-accent mb-6 inline-block">Nos Expertises</span>
          <h2 className="text-headline text-foreground">
            Une seule mission, <span className="italic text-accent">deux expertises.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={domain.href} className="block card-cream overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <SiteImage
                    src={domain.image}
                    alt={domain.imageAlt}
                    className={`w-full h-full object-cover ${domain.imagePosition} group-hover:scale-105 transition-transform duration-500`}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-title text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {domain.title}
                  </h3>
                  <p className="text-body text-muted-foreground leading-relaxed mb-5">
                    {domain.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertisesOverviewSection;
