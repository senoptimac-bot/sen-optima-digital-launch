import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  Globe,
  Megaphone,
  Palette,
  GraduationCap,
  Settings,
  Crown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Lightbulb,
    title: "Conseil & Stratégie Digitale",
    description: "Définissez une vision claire et un plan d'action concret pour votre présence en ligne.",
    details: "Nous analysons votre marché, vos concurrents et vos objectifs pour élaborer une stratégie digitale sur mesure. Chaque recommandation est actionnable et mesurable.",
    featured: true,
  },
  {
    icon: Globe,
    title: "Création de Sites Web",
    description: "Des sites modernes, rapides et optimisés pour convertir vos visiteurs en clients.",
    details: "Sites vitrines, e-commerce, landing pages. Nous créons des expériences web mémorables avec un focus sur la performance et l'expérience utilisateur.",
    featured: false,
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Stratégies d'acquisition ciblées pour attirer et fidéliser vos clients.",
    details: "Campagnes publicitaires, SEO, email marketing, réseaux sociaux. Nous mettons en place des canaux d'acquisition rentables et mesurables.",
    featured: false,
  },
  {
    icon: Palette,
    title: "Branding & Identité Visuelle",
    description: "Créez une image de marque forte, cohérente et mémorable.",
    details: "Logo, charte graphique, supports de communication. Votre identité visuelle reflètera vos valeurs et vous différenciera de la concurrence.",
    featured: false,
  },
  {
    icon: GraduationCap,
    title: "Formation & Coaching",
    description: "Montez en compétences sur les outils et stratégies digitales.",
    details: "Formations personnalisées sur le marketing digital, les réseaux sociaux, le SEO. Devenez autonome dans votre communication digitale.",
    featured: false,
  },
  {
    icon: Settings,
    title: "Consulting en Processus",
    description: "Digitalisez et optimisez vos processus internes pour gagner en efficacité.",
    details: "Audit organisationnel, automatisation des tâches, mise en place d'outils collaboratifs. Gagnez du temps et de la productivité.",
    featured: false,
  },
  {
    icon: Crown,
    title: "Accompagnement Premium",
    description: "Un suivi personnalisé et exclusif pour les entrepreneurs ambitieux.",
    details: "Accès prioritaire, consulting illimité, suivi mensuel. Le partenariat idéal pour ceux qui veulent aller plus loin, plus vite.",
    featured: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden bg-secondary dark:bg-gradient-hero">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] dark:block hidden" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-6">
              Nos Expertises
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Des solutions pour chaque <span className="text-gradient-gold">étape</span> de votre croissance
            </h1>
            <p className="text-xl text-muted-foreground">
              7 domaines d'expertise pour accompagner votre transformation digitale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 relative">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`p-8 rounded-3xl transition-all duration-300 ${
                  service.featured
                    ? "glass-premium glow-gold-subtle hover:glow-gold"
                    : "glass-card hover:glow-gold-subtle"
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  service.featured ? "bg-accent/20" : "bg-accent/10"
                }`}>
                  <service.icon className="w-8 h-8 text-accent" />
                </div>

                <h3 className={`text-xl font-heading font-bold mb-3 ${
                  service.featured ? "text-gradient-gold" : "text-foreground"
                }`}>
                  {service.title}
                </h3>

                <p className="text-foreground/80 mb-4">
                  {service.description}
                </p>

                <p className="text-sm text-muted-foreground">
                  {service.details}
                </p>

                {service.featured && (
                  <div className="mt-6 pt-4 border-t border-accent/20">
                    <div className="flex items-center gap-2 text-accent text-sm font-medium">
                      <Crown className="w-4 h-4" />
                      <span>Service Premium</span>
                    </div>
                  </div>
                )}
              </motion.article>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button variant="cta" size="lg" className="gap-2" asChild>
              <Link to="/diagnostics">
                Commencer avec un diagnostic
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
