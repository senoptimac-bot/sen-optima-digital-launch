import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Globe, Zap, Eye, Handshake, TrendingUp, MessageCircle } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
import PhilosophyCard from "@/components/services/PhilosophyCard";
import servicesHeroImage from "@/assets/services-hero-visionary.jpg";

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
  return (
    <div className="min-h-screen">
      {/* HERO - Split Screen Corporate */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex flex-col md:flex-row">
        {/* Left Column - Text on Blue Night Background */}
        <div className="relative w-full md:w-1/2 bg-[hsl(220,25%,8%)] flex items-center py-20 pt-32 md:py-0">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
          
          <div className="container relative z-10 px-6 md:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              {/* Label */}
              <span className="inline-flex items-center gap-2 text-xs text-foreground/40 uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-accent" />
                Nos Services
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6 text-left">
                Transformez votre Vision
                <span className="block text-accent mt-1">en Système Rentable.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-foreground/60 leading-relaxed text-left">
                Que vous démarriez ou cherchiez à scaler, nous structurons 
                votre activité pour qu'elle dure.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Visionary Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full md:w-1/2 h-64 md:h-auto"
        >
          <img
            src={servicesHeroImage}
            alt="Entrepreneur visionnaire africain"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Subtle blue overlay for brand harmony */}
          <div className="absolute inset-0 bg-[hsl(220,25%,8%)] opacity-10 mix-blend-multiply" />
          {/* Left gradient fade for seamless transition on desktop */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[hsl(220,25%,8%)] to-transparent" />
        </motion.div>
      </section>

      {/* SERVICES - Cards avec expansion */}
      <section className="py-16 md:py-24">
        <div className="container px-5 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <span className="inline-flex items-center gap-2 text-xs text-foreground/40 uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-accent" />
              4 Piliers
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Nos axes d'intervention
            </h2>
          </motion.div>

          {/* Cards Grid - 1 col mobile, 2 cols tablet+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY - Compact */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container px-5 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-12"
          >
            <span className="inline-flex items-center gap-2 text-xs text-foreground/40 uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-accent" />
              Notre Approche
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Comment nous travaillons
            </h2>
          </motion.div>

          {/* Philosophy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {philosophyItems.map((item, index) => (
              <PhilosophyCard key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Simple */}
      <section className="py-20 md:py-28">
        <div className="container px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Votre ambition compte.
              <span className="block text-accent mt-1">Pas votre niveau.</span>
            </h2>
            <p className="text-foreground/60 mb-8 leading-relaxed">
              Faisons le point ensemble sur votre projet et vos objectifs.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-cta-success hover:bg-cta-success/90 text-cta-success-foreground px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-cta-success/20"
            >
              <Link to="/solutions">
                Faire le point sur mon projet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
