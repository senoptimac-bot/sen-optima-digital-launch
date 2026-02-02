import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Globe, Zap, Eye, Handshake, TrendingUp, MessageCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import ServiceCard from "@/components/services/ServiceCard";
import PhilosophyCard from "@/components/services/PhilosophyCard";
import BackButton from "@/components/BackButton";
import servicesHeroImage from "@/assets/services-hero-woman.jpg";

// Service data
const services = [
  {
    icon: Rocket,
    number: "01",
    title: "Modélisation & Démarrage",
    subtitle: "Lancement & Structure",
    forWho: "Ceux qui ont une idée et veulent éviter les erreurs de débutant.",
    whatWeDo: "On transforme votre idée en Plan d'Action concret : Business Model viable, Offre claire, et stratégie pour vos premiers clients.",
    ourRequirement: "Vous devez être prêt à confronter votre idée à la réalité du marché.",
  },
  {
    icon: Globe,
    number: "02",
    title: "Écosystème Tech & Web",
    subtitle: "Infrastructure Digitale",
    forWho: "Ceux qui veulent vendre, pas juste être vus.",
    whatWeDo: "Sites, Tunnels de vente et CRM qui travaillent pour vous 24h/24. Des outils qui convertissent, pas des vitrines.",
    ourRequirement: "Nous ne faisons pas de \"joli\", nous faisons du fonctionnel qui convertit.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Optimisation & Automatisation",
    subtitle: "Accélération & IA",
    forWho: "Les business établis qui veulent gagner du temps et passer à l'échelle.",
    whatWeDo: "Audit des fuites de rentabilité, intégration IA pour automatiser le répétitif, et campagnes marketing ciblées.",
    ourRequirement: "Une transparence totale sur vos chiffres actuels pour pouvoir les améliorer.",
  },
  {
    icon: Eye,
    number: "04",
    title: "Identité Visuelle Stratégique",
    subtitle: "L'Autorité",
    forWho: "Ceux qui veulent inspirer confiance et justifier des tarifs premium.",
    whatWeDo: "Le design n'est pas de l'art, c'est de la psychologie. Nous forgeons une image de marque qui inspire confiance.",
    ourRequirement: "Une vision claire de votre positionnement et de votre clientèle cible.",
  },
];

// Philosophy items
const philosophyItems = [
  {
    icon: Handshake,
    title: "Partenariat, pas prestation",
    description: "Nous sommes vos conseillers stratégiques qui s'investissent dans votre réussite.",
  },
  {
    icon: TrendingUp,
    title: "Investissement, pas dépense",
    description: "Chaque franc investi doit avoir un objectif de retour clair.",
  },
  {
    icon: MessageCircle,
    title: "Vérité, pas complaisance",
    description: "Nous vous dirons ce qui est mieux pour votre business.",
  },
];

const ServicesPage = () => {
  const seo = SEO_CONFIG.services;
  
  return (
    <>
      <SEOHead 
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        keywords={seo.keywords}
      />
      
      <div className="min-h-screen bg-background">
      {/* HERO - Design inspiré de la page d'accueil */}
      <section className="relative min-h-[100svh] flex items-center pt-16 pb-8 md:pt-20 md:pb-0 overflow-hidden">
        {/* Simple static background */}
        <div className="absolute inset-0 z-0 bg-background" />

        <div className="container relative z-10">
          {/* Back Button */}
          <BackButton />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              {/* Badge - Accent pill */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8"
              >
                <span className="badge-accent">
                  Nos Services
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="text-display font-bold text-foreground mb-6"
              >
                Transformez votre <span className="italic text-accent">Vision</span>
                <br />
                en Système Rentable.
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-body-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
              >
                Que vous démarriez ou cherchiez à scaler, nous structurons 
                votre activité pour qu'elle dure.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button
                  size="lg"
                  asChild
                  className="group gap-3 text-sm rounded-full bg-foreground text-primary hover:bg-foreground/90 transition-all duration-300 h-14 px-8"
                >
                  <Link to="/solutions">
                    Lancer mon Diagnostic
                    <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="gap-2 text-sm text-foreground hover:text-accent hover:bg-transparent"
                >
                  <a href="#services">
                    Découvrir nos axes
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Right Visual - Hero Image with floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Background shape */}
              <div className="absolute -top-10 -right-10 w-full h-full bg-accent/10 rounded-[3rem] transform rotate-6 hidden lg:block" />
              
              {/* Main image container */}
              <div className="relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-2xl bg-secondary/30">
                <img
                  src={servicesHeroImage}
                  alt="Professionnelle travaillant sur son projet"
                  className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover object-top"
                  loading="eager"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
              </div>

              {/* Floating notification card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -left-4 lg:-left-8 bottom-10 lg:bottom-20 bg-card rounded-2xl p-3 lg:p-4 shadow-xl border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-accent flex items-center justify-center">
                    <Rocket className="w-4 h-4 lg:w-5 lg:h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] lg:text-xs text-muted-foreground">4 Piliers</p>
                    <p className="text-base lg:text-lg font-bold text-foreground">Stratégiques</p>
                    <p className="text-[10px] lg:text-xs text-muted-foreground">Pour votre croissance</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES - Modern Cards */}
      <section id="services" className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="container px-5 md:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
          >
            <span className="badge-accent mb-6">
              4 Piliers Stratégiques
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Nos axes <span className="italic text-accent">d'intervention</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Des solutions adaptées à chaque étape de votre croissance.
            </p>
          </motion.div>

          {/* Cards Grid - Modern Bento-style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY - Compact */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Decorative shape */}
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-secondary/30 rounded-bl-[100px] hidden lg:block" />
        
        <div className="container px-5 md:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-12"
          >
            <span className="badge-accent mb-4">
              Notre Approche
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Comment nous <span className="italic text-accent">travaillons</span>
            </h2>
          </motion.div>

          {/* Philosophy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {philosophyItems.map((item, index) => (
              <PhilosophyCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Simple */}
      <section className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
        {/* Decorative shape */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[25%] h-[60%] bg-accent/5 rounded-l-[100px] hidden lg:block" />
        
        <div className="container px-5 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="badge-accent mb-4">
              Prêt à démarrer ?
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Votre <span className="italic text-accent">ambition</span> compte.
              <span className="block mt-1">Pas votre niveau.</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Faisons le point ensemble sur votre projet et vos objectifs.
            </p>
            <Button
              asChild
              size="lg"
              className="group gap-3 text-sm rounded-full bg-foreground text-primary hover:bg-foreground/90 transition-all duration-300 h-14 px-8"
            >
              <Link to="/solutions">
                Faire le point sur mon projet
                <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
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

export default ServicesPage;
