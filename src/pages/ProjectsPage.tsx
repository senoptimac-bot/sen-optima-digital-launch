import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Compass, Search, PenTool, Code2, Rocket, LineChart, Check, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import BackButton from "@/components/BackButton";
import PhotoPlaceholder from "@/components/about/PhotoPlaceholder";
import { portfolioProjects, categoryLabels, ProjectCategory } from "@/data/portfolioProjects";

type PortfolioProject = (typeof portfolioProjects)[number];

const methodSteps = [
  { icon: Compass, title: "Découverte", description: "Comprendre votre projet, vos objectifs et vos contraintes." },
  { icon: Search, title: "Recherche", description: "Étudier la faisabilité et identifier la meilleure approche." },
  { icon: PenTool, title: "Conception", description: "Structurer la solution avant d'écrire la moindre ligne de code." },
  { icon: Code2, title: "Développement", description: "Construire avec rigueur, en gardant le cap sur l'objectif initial." },
  { icon: Rocket, title: "Livraison", description: "Mettre en ligne dans des conditions maîtrisées, pas dans l'urgence." },
  { icon: LineChart, title: "Suivi", description: "Rester disponible après la livraison pour ajuster ce qui doit l'être." },
];

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const [imgError, setImgError] = useState(false);

  if (project.isMethodologyGuide) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-24px" }}
        transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className="card-cream group flex h-full flex-col p-6 sm:p-7"
      >
        <div className="icon-circle mb-5">
          <Lightbulb className="h-5 w-5 text-accent" />
        </div>
        <span className="mb-2 text-[11px] font-medium uppercase tracking-wider text-accent">{project.sector}</span>
        <h3 className="mb-2 font-heading text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <Link
          to={`/nos-projets/${project.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-4 py-2.5 text-sm font-medium text-accent transition-all duration-250 hover:bg-accent hover:text-accent-foreground"
        >
          Découvrir
          <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-0.5" />
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="card-cream group relative flex h-full flex-col overflow-hidden"
    >
      <div className="relative flex-shrink-0 overflow-hidden">
        <div className="aspect-[16/10] w-full bg-muted/30">
          {project.image && !imgError ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              onError={() => setImgError(true)}
            />
          ) : (
            <PhotoPlaceholder
              label={project.title}
              subtitle={project.typeLabel}
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
        <h3 className="mb-1 font-heading text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mb-4 text-xs font-medium text-accent">{project.typeLabel}</p>

        {project.results.length > 0 && (
          <ul className="mb-4 space-y-1.5">
            {project.results.slice(0, 4).map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                <Check className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.technologies.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="rounded-full border border-border px-2.5 py-1 text-[11px] text-foreground/60">
                {tech}
              </span>
            ))}
          </div>
        )}

        <Link
          to={`/nos-projets/${project.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-4 py-2.5 text-sm font-medium text-accent transition-all duration-250 hover:bg-accent hover:text-accent-foreground"
        >
          Voir l'étude de cas
          <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}

function ProjectSection({ category, projects }: { category: ProjectCategory; projects: PortfolioProject[] }) {
  if (projects.length === 0) return null;
  const label = categoryLabels[category];
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 md:mb-12 max-w-2xl">
          <span className="badge-accent mb-4 inline-block">{label.title}</span>
          <p className="text-body text-muted-foreground">{label.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectsPage = () => {
  const seo = SEO_CONFIG.projects;

  const projets = portfolioProjects.filter((p) => p.category === "projet");
  const concepts = portfolioProjects.filter((p) => p.category === "concept");
  const casEtude = portfolioProjects.filter((p) => p.category === "cas-etude");

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} canonicalPath={seo.canonicalPath} keywords={seo.keywords} />

      <div className="min-h-screen bg-background">
        {/* HERO */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          <div className="container relative z-10">
            <BackButton />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <span className="badge-accent mb-6 inline-block">Études de cas</span>
              <h1 className="text-headline text-foreground mb-6">
                Chaque projet raconte <span className="italic text-accent">une méthode.</span>
              </h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                Nous ne créons pas simplement des sites web ou des stratégies. Nous construisons des solutions
                adaptées à des objectifs réels.
              </p>
            </motion.div>
          </div>
        </section>

        <ProjectSection category="projet" projects={projets} />
        <ProjectSection category="cas-etude" projects={casEtude} />
        <ProjectSection category="concept" projects={concepts} />

        {/* LES PROJETS ARRIVENT PROGRESSIVEMENT */}
        <section className="pb-16 md:pb-20">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl border-l-4 border-accent pl-5"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-accent mb-2 block">
                Les projets arrivent progressivement
              </span>
              <p className="text-body text-muted-foreground leading-relaxed">
                Sen'Optima Consulting est un cabinet jeune. Nous privilégions la qualité à la quantité. Chaque
                nouveau projet intégré à notre portfolio correspond à une collaboration réelle et à un travail que
                nous sommes fiers de présenter.
              </p>
            </motion.div>
          </div>
        </section>

        {/* NOTRE MANIÈRE DE TRAVAILLER */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 max-w-2xl">
              <span className="badge-accent mb-4 inline-block">Notre manière de travailler</span>
              <h2 className="text-headline text-foreground">
                Six étapes, <span className="italic text-accent">jamais de raccourci.</span>
              </h2>
            </motion.div>

            <div className="relative pl-8">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />
              <div className="space-y-10">
                {methodSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative flex items-start gap-5"
                  >
                    <div className="absolute -left-8 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-background">
                      <step.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="text-title text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <PhotoPlaceholder label="[PHOTO ÉQUIPE SEN'OPTIMA]" subtitle="Photo officielle à venir" aspectRatio="landscape" />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h2 className="text-headline text-foreground mb-4">
                  Votre projet pourrait être <span className="italic text-accent">le prochain.</span>
                </h2>
                <p className="text-body-lg text-muted-foreground leading-relaxed mb-8">
                  Nous accompagnons actuellement des entrepreneurs, des étudiants et des entreprises dans la création
                  de projets utiles et durables.
                </p>
                <Button asChild size="lg" variant="hero">
                  <Link to="/contact">
                    Parler de mon projet
                    <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
