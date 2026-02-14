import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Rocket, Globe, Target, Zap, Eye, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import BackButton from "@/components/BackButton";
import PhotoPlaceholder from "@/components/about/PhotoPlaceholder";
import { cn } from "@/lib/utils";
import projectsHeroImage from "@/assets/services-hero-woman.jpg";

export type ProjectServiceType =
  | "tous"
  | "modelisation"
  | "tech-web"
  | "marketing"
  | "automatisation"
  | "identite";

const serviceFilters: { id: ProjectServiceType; label: string; icon: React.ElementType }[] = [
  { id: "tous", label: "Tous les projets", icon: Briefcase },
  { id: "modelisation", label: "Modélisation & Démarrage", icon: Rocket },
  { id: "tech-web", label: "Site Web & Plateforme", icon: Globe },
  { id: "marketing", label: "Marketing & Acquisition", icon: Target },
  { id: "automatisation", label: "Optimisation & Automatisation", icon: Zap },
  { id: "identite", label: "Identité Visuelle", icon: Eye },
];

// Exemples de projets par type de service (à remplacer par de vrais cas clients)
const projectsData = [
  {
    id: "1",
    serviceType: "modelisation",
    title: "Structuration & Lancement",
    sector: "Agroalimentaire",
    description: "Accompagnement d’un porteur de projet du concept à la mise sur le marché : business model, offre, premiers clients.",
    icon: Rocket,
    imageLabel: "Exemple – Projet agroalimentaire",
  },
  {
    id: "7",
    serviceType: "modelisation",
    title: "Business Model & Plan d'action",
    sector: "Tech",
    description: "Modélisation du business model et plan d'action pour le lancement d'une startup locale à Dakar.",
    icon: Rocket,
    imageLabel: "Exemple – Projet consulting tech",
  },
  {
    id: "8",
    serviceType: "modelisation",
    title: "Validation d'offre & Premiers clients",
    sector: "Services",
    description: "Structuration de l'offre et stratégie d'acquisition des 10 premiers clients pour un cabinet de formation.",
    icon: Rocket,
    imageLabel: "Exemple – Projet formation",
  },
  {
    id: "2",
    serviceType: "tech-web",
    title: "Site & Tunnel de vente",
    sector: "Services",
    description: "Création d’un site vitrine convertisseur et d’un tunnel de vente pour une entreprise de services à Dakar.",
    icon: Globe,
    imageLabel: "Exemple – Projet digital services",
  },
  {
    id: "9",
    serviceType: "tech-web",
    title: "Plateforme de réservation",
    sector: "Tourisme",
    description: "Site web avec prise de rendez-vous en ligne et gestion des disponibilités pour une structure d'hébergement.",
    icon: Globe,
    imageLabel: "Exemple – Projet plateforme réservation",
  },
  {
    id: "10",
    serviceType: "tech-web",
    title: "Site institutionnel & CRM",
    sector: "B2B",
    description: "Refonte du site corporate et mise en place d'un CRM pour qualifier et suivre les leads.",
    icon: Globe,
    imageLabel: "Exemple – Projet site & CRM",
  },
  {
    id: "3",
    serviceType: "tech-web",
    title: "E-commerce & Process",
    sector: "Commerce",
    description: "Mise en place d’une boutique en ligne et optimisation des process de commande et livraison.",
    icon: Globe,
    imageLabel: "Exemple – Projet e-commerce",
  },
  {
    id: "11",
    serviceType: "marketing",
    title: "Tunnel de vente & Lead nurturing",
    sector: "Formation",
    description: "Conception d'un tunnel de vente et séquences email pour convertir les visiteurs en inscrits.",
    icon: Target,
    imageLabel: "Exemple – Projet tunnel formation",
  },
  {
    id: "12",
    serviceType: "marketing",
    title: "Campagnes & Réseaux sociaux",
    sector: "Retail",
    description: "Stratégie de contenu et campagnes payantes pour augmenter la notoriété et les ventes en ligne.",
    icon: Target,
    imageLabel: "Exemple – Projet campagnes retail",
  },
  {
    id: "4",
    serviceType: "identite",
    title: "Identité & Positionnement",
    sector: "Consulting",
    description: "Refonte de l’identité visuelle et du positionnement pour un cabinet de conseil local.",
    icon: Eye,
    imageLabel: "Exemple – Projet identité",
  },
  {
    id: "15",
    serviceType: "identite",
    title: "Charte graphique & Supports",
    sector: "Santé",
    description: "Création d'une charte graphique et déclinaison sur tous les supports de communication.",
    icon: Eye,
    imageLabel: "Exemple – Projet charte santé",
  },
  {
    id: "16",
    serviceType: "identite",
    title: "Logo & Identité de marque",
    sector: "Agroalimentaire",
    description: "Conception du logo et de l'identité de marque pour une gamme de produits locaux.",
    icon: Eye,
    imageLabel: "Exemple – Projet logo agro",
  },
  {
    id: "5",
    serviceType: "automatisation",
    title: "Automatisation & Croissance",
    sector: "PME",
    description: "Audit des process et intégration d’outils pour automatiser la relation client et la facturation.",
    icon: Zap,
    imageLabel: "Exemple – Projet automatisation",
  },
  {
    id: "13",
    serviceType: "automatisation",
    title: "Workflow & Notifications",
    sector: "Services",
    description: "Automatisation des relances, des devis et des notifications pour gagner du temps au quotidien.",
    icon: Zap,
    imageLabel: "Exemple – Projet workflow",
  },
  {
    id: "14",
    serviceType: "automatisation",
    title: "Reporting & Tableaux de bord",
    sector: "Commerce",
    description: "Mise en place de tableaux de bord et rapports automatiques pour piloter l'activité.",
    icon: Zap,
    imageLabel: "Exemple – Projet reporting",
  },
  {
    id: "6",
    serviceType: "marketing",
    title: "Stratégie d'acquisition",
    sector: "B2B",
    description: "Tunnels de vente et campagnes ciblées pour une entreprise de services.",
    icon: Target,
    imageLabel: "Exemple – Projet marketing",
  },
];

const ProjectsPage = () => {
  const seo = SEO_CONFIG.projects;
  const [selectedService, setSelectedService] = useState<ProjectServiceType>("tous");

  const filteredProjects =
    selectedService === "tous"
      ? projectsData
      : projectsData.filter((p) => p.serviceType === selectedService);

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
                  Découvrez une sélection de missions que nous avons accompagnées : structuration,
                  digital, marketing et automatisation.
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

            {/* Filtres par service - centrés */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
              {serviceFilters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setSelectedService(filter.id)}
                    className={cn(
                      "inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                      selectedService === filter.id
                        ? "bg-foreground text-primary"
                        : "bg-card border border-border text-foreground hover:border-accent hover:bg-accent/10"
                    )}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="whitespace-nowrap">{filter.label}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {filteredProjects.length === 0 ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-muted-foreground text-center py-12"
                >
                  Aucun projet dans cette catégorie pour le moment.
                </motion.p>
              ) : (
                <motion.div
                  key={selectedService}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                  {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-3xl card-cream h-full flex flex-col"
                >
                  <div className="absolute top-6 right-6 z-10 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-[10px] font-semibold uppercase tracking-wider">
                      Exemple
                    </span>
                    <span className="text-xs text-accent/60 font-heading font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative flex-shrink-0 overflow-hidden rounded-t-3xl">
                    <PhotoPlaceholder
                      label={project.imageLabel}
                      subtitle="Exemple de projet réalisé"
                      aspectRatio="landscape"
                      className="rounded-t-3xl rounded-b-none border-0 border-b border-border/50"
                    />
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 text-xs font-medium text-foreground/80 backdrop-blur-sm">
                        <project.icon className="w-3.5 h-3.5 text-accent" />
                        {project.sector}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 lg:p-8 flex-1 flex flex-col">
                    <h3 className="text-lg lg:text-xl font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed flex-1">
                      {project.description}
                    </p>
                  </div>
                </motion.article>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

      </div>
    </>
  );
};

export default ProjectsPage;
