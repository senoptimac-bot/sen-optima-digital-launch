import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import BackButton from "@/components/BackButton";
import PhotoPlaceholder from "@/components/about/PhotoPlaceholder";
import projectsHeroImage from "@/assets/services-hero-woman.jpg";
import { portfolioProjects } from "@/data/portfolioProjects";

type PortfolioProject = (typeof portfolioProjects)[number];

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:border-border hover:shadow-lg"
    >
      <div className="relative flex-shrink-0 overflow-hidden">
        <div className="aspect-[16/10] w-full">
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              onError={() => setImgError(true)}
            />
          ) : (
            <PhotoPlaceholder
              label={project.title}
              subtitle="Projet réalisé"
              aspectRatio="landscape"
              className="h-full w-full rounded-none border-0"
            />
          )}
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-background/95 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-foreground/90 backdrop-blur-sm">
            <Globe className="h-3 w-3 text-accent" />
            {project.sector}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 font-heading text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        {"url" in project && project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Voir le site
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

const ProjectsPage = () => {
  const seo = SEO_CONFIG.projects;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        keywords={seo.keywords}
      />

      <div className="min-h-screen bg-background">
        {/* HERO - même structure que Accueil / Services */}
        <section className="relative min-h-[100svh] flex items-center pt-16 pb-8 md:pt-20 md:pb-0 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-background" />

          <div className="container relative z-10">
            <BackButton />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-8"
                >
                  <span className="badge-accent">Nos Réalisations</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="text-display font-bold text-foreground mb-6"
                >
                  Des <span className="italic text-accent">projets concrets</span>,
                  <br />
                  pour des résultats mesurables.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="text-body-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
                >
                  Découvrez une sélection de sites web et plateformes que nous avons accompagnés.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="group gap-3 text-sm rounded-full bg-foreground text-primary hover:bg-foreground/90 transition-all duration-300 h-14 px-8"
                  >
                    <Link to="/solutions">
                      Lancer mon projet avec Sen'Optima
                      <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="absolute -top-10 -right-10 w-full h-full bg-accent/10 rounded-[3rem] transform rotate-6 hidden lg:block" />
                <div className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl bg-secondary/30">
                  <img
                    src={projectsHeroImage}
                    alt="Projets réalisés par Sen'Optima"
                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GRILLE PROJETS */}
        <section className="py-16 md:py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
          <div className="container px-5 md:px-8 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 md:mb-12 lg:mb-16 max-w-3xl"
            >
              <span className="badge-accent mb-4 lg:mb-6">
                Portfolio
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
                Projets <span className="italic text-accent">réalisés</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {portfolioProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ProjectsPage;
