import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Target, AlertTriangle, Lightbulb, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import BackButton from "@/components/BackButton";
import SiteImage from "@/components/SiteImage";
import { getProjectBySlug, categoryLabels } from "@/data/portfolioProjects";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/nos-projets" replace />;

  return (
    <>
      <SEOHead
        title={`${project.title} — Sen'Optima Consulting`}
        description={project.description}
        canonicalPath={`/nos-projets/${project.slug}`}
        noIndex
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-0 overflow-hidden">
          <div className="container relative z-10">
            <BackButton />
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl mb-12">
              <span className="badge-accent mb-6 inline-block">
                {categoryLabels[project.category].title} · {project.sector}
              </span>
              <h1 className="text-headline text-foreground mb-4">{project.title}</h1>
              <p className="text-body-lg text-muted-foreground leading-relaxed">{project.description}</p>

              {project.isMethodologyGuide && (
                <div className="mt-6 inline-flex items-start gap-3 p-4 rounded-2xl border border-accent/20 bg-accent/5 max-w-xl">
                  <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Ce cas d'étude illustre notre méthode face à une situation type. Il ne décrit pas un client
                    nommé, mais l'approche que nous appliquons concrètement à chaque accompagnement de ce type.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {project.image && (
          <section className="pb-16 md:pb-24">
            <div className="container max-w-5xl">
              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                <SiteImage
                  src={project.image}
                  alt={`Capture d'écran du projet ${project.title}`}
                  className="w-full rounded-[2rem] border-2 border-accent/40 shadow-2xl object-cover"
                  priority
                />
              </motion.div>
            </div>
          </section>
        )}

        <section className="pb-16 md:pb-24">
          <div className="container max-w-3xl">
            {project.intervention.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <span className="badge-accent mb-4 inline-block">Notre intervention</span>
                <div className="flex flex-wrap gap-2">
                  {project.intervention.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full border border-border text-xs text-foreground/70 bg-card">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="badge-accent mb-4 inline-block">Contexte</span>
              <p className="text-body text-muted-foreground leading-relaxed">{project.context}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 card-cream">
                <div className="icon-circle mb-4">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-title text-foreground mb-4">Problématique</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.problematique}</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 card-cream">
                <div className="icon-circle mb-4">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-title text-foreground mb-4">Notre approche</h2>
                <ul className="space-y-2">
                  {project.approche.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {project.results.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 p-6 md:p-8 card-cream">
                <div className="icon-circle mb-4">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-title text-foreground mb-4">Résultats</h2>
                <ul className="space-y-2">
                  {project.results.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {project.technologies.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
                <span className="badge-accent mb-4 inline-block">Technologies & approche</span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full border border-border text-xs text-foreground/70 bg-card">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap gap-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full border border-accent/30 bg-accent/5 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-sm font-medium"
                >
                  Voir le site
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">
                  Parler de mon projet
                  <span className="w-7 h-7 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectDetailPage;
