import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import BackButton from "@/components/BackButton";
// Image temporaire neutre (visage, engagement), en attente du vrai visuel fourni par le client.
import mobiliteImage from "@/assets/À Propos de Sen'Optima.jpg";
import entreprisesImage from "@/assets/developpement-entreprises.jpg";

const domains = [
  {
    title: "Mobilité Internationale",
    description:
      "Études, projet professionnel, visite : présentez-vous avec un dossier qui tient debout, sur un profil réellement prêt.",
    ctaLabel: "Construire mon projet international",
    href: "/nos-expertises/mobilite-internationale",
    image: mobiliteImage,
  },
  {
    title: "Développement des Entreprises",
    description:
      "Formalisez, structurez et rendez votre activité crédible — pour grandir, et pour vos futurs projets à l'international.",
    ctaLabel: "Structurer mon entreprise",
    href: "/nos-expertises/developpement-entreprises",
    image: entreprisesImage,
  },
];

const ExpertisesPage = () => {
  const seo = SEO_CONFIG.expertises;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        keywords={seo.keywords}
      />

      <div className="min-h-screen bg-background">
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container max-w-3xl">
            <BackButton />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge-accent mb-6 inline-block">Nos Expertises</span>
              <h1 className="text-headline text-foreground mb-6">
                Deux expertises, <span className="italic text-accent">une seule méthode.</span>
              </h1>
              <p className="text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
                Sen'Optima Consulting accompagne les particuliers, les entrepreneurs et les
                entreprises dans la construction de projets solides. Cette mission se décline
                aujourd'hui en deux domaines d'expertise.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-20 md:pb-32">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
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
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={domain.image}
                        alt={domain.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-8">
                      <h2 className="text-title text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                        {domain.title}
                      </h2>
                      <p className="text-body text-muted-foreground leading-relaxed mb-6">
                        {domain.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                        {domain.ctaLabel}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExpertisesPage;
