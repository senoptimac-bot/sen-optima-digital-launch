import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Globe, Zap, Eye, Handshake, TrendingUp, MessageCircle } from "lucide-react";
import ServiceCard from "@/components/services/ServiceCard";
import PhilosophyCard from "@/components/services/PhilosophyCard";

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
    <div className="min-h-screen bg-background">
      {/* HERO - Clean cream background like reference */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center py-20 pt-32 md:py-28 md:pt-40 overflow-hidden">
        {/* Background with decorative shape */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 right-0 w-[60%] h-full bg-secondary/30 rounded-bl-[100px] hidden lg:block" />

        <div className="container px-5 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              {/* Badge */}
              <span className="badge-accent mb-6">
                Nos Services
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
                Transformez votre <span className="italic text-accent">Vision</span>
                <span className="block mt-1">en Système Rentable.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Que vous démarriez ou cherchiez à scaler, nous structurons 
                votre activité pour qu'elle dure.
              </p>

              {/* CTA */}
              <Button
                asChild
                size="lg"
                className="group gap-3 text-sm rounded-full bg-foreground text-primary hover:bg-foreground/90 transition-all duration-300 h-14 px-8"
              >
                <Link to="/solutions">
                  Lancer mon Diagnostic
                  <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Right side - Service icons grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-6"
            >
              {services.slice(0, 4).map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-sm">{service.subtitle}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES - Cards avec expansion */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container px-5 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <span className="badge-accent mb-4">
              4 Piliers
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Nos axes d'intervention
            </h2>
          </motion.div>

          {/* Cards Grid - 1 col mobile, 2 cols tablet+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY - Compact */}
      <section className="py-16 md:py-24">
        <div className="container px-5 md:px-8">
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
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
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
  );
};

export default ServicesPage;
