import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Globe, Zap, Eye, Handshake, TrendingUp, MessageCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Service Pillar Component
interface ServicePillarProps {
  icon: React.ElementType;
  number: string;
  title: string;
  subtitle: string;
  forWho: string;
  whatWeDo: string;
  ourRequirement: string;
}

const ServicePillar = ({ icon: Icon, number, title, subtitle, forWho, whatWeDo, ourRequirement }: ServicePillarProps) => {
  return (
    <motion.article
      variants={itemVariants}
      className="p-8 md:p-10 rounded-2xl glass-card border border-foreground/10 hover:border-accent/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-7 h-7 text-accent" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-accent/70 font-medium">
            Pilier {number}
          </span>
          <h3 className="text-2xl font-heading font-bold text-foreground mt-1">
            {title}
          </h3>
          <p className="text-foreground/50 text-sm mt-1">{subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6 text-left">
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-accent block mb-2">
            Pour qui
          </span>
          <p className="text-foreground/70 leading-relaxed">{forWho}</p>
        </div>

        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-accent block mb-2">
            Ce qu'on fait
          </span>
          <p className="text-foreground/70 leading-relaxed">{whatWeDo}</p>
        </div>

        <div className="p-4 rounded-lg bg-foreground/5 border border-foreground/10">
          <span className="text-xs uppercase tracking-wider font-semibold text-foreground/50 block mb-2">
            Notre exigence
          </span>
          <p className="text-foreground/60 text-sm leading-relaxed italic">{ourRequirement}</p>
        </div>
      </div>
    </motion.article>
  );
};

const services: ServicePillarProps[] = [
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
    whatWeDo: "Le design n'est pas de l'art, c'est de la psychologie. Nous forgeons une image de marque qui inspire immédiatement confiance et justifie vos tarifs premium aux yeux de vos clients.",
    ourRequirement: "Une vision claire de votre positionnement et de votre clientèle cible.",
  },
];

// Philosophy items
const philosophyItems = [
  {
    icon: Handshake,
    title: "Partenariat, pas prestation",
    description: "Nous ne sommes pas des exécutants muets. Nous sommes vos conseillers stratégiques qui s'investissent dans votre réussite.",
  },
  {
    icon: TrendingUp,
    title: "Investissement, pas dépense",
    description: "Chaque franc que vous mettez doit avoir un objectif de retour (ROI). Nous concevons tout avec cette logique.",
  },
  {
    icon: MessageCircle,
    title: "Vérité, pas complaisance",
    description: "Nous vous dirons toujours ce qui est mieux pour votre business, même si ce n'est pas ce que vous voulez entendre.",
  },
];

const ServicesPage = () => {
  return (
    <>
      {/* HERO - L'Ambition pour tous */}
      <section className="relative min-h-[50vh] flex items-center py-24 pt-36 bg-background">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="inline-flex items-center gap-2 text-caption text-foreground/40 uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Nos Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Transformez votre Vision
              <br />
              <span className="text-accent">en Système Rentable.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-3xl">
              Que vous soyez en phase de lancement ou en pleine croissance, 
              Sen'Optima structure votre activité pour qu'elle dure. 
              <span className="text-foreground/80 font-medium"> Pas de bricolage, juste des fondations solides.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* LES 3 PILIERS DE SERVICE */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] -translate-x-1/2" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-16 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-caption text-foreground/40 uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Nos Piliers
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Quatre axes pour structurer votre croissance
            </h2>
            <p className="text-foreground/60 text-lg">
              Du lancement à l'accélération, nous vous accompagnons à chaque étape clé de votre développement.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl"
          >
            {services.map((service) => (
              <ServicePillar key={service.title} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* NOTRE PHILOSOPHIE - Le Filtre Doux */}
      <section className="py-20 md:py-28 bg-secondary/30 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-left mb-16 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-caption text-foreground/40 uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Notre Approche
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Comment nous travaillons
            </h2>
            <p className="text-foreground/60 text-lg">
              Notre méthode repose sur trois principes fondamentaux qui guident chaque collaboration.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl"
          >
            {philosophyItems.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="text-left"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL - Inclusif */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] translate-x-1/2" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-left"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Votre niveau de maturité n'importe pas.
              <br />
              <span className="text-accent">Votre ambition, oui.</span>
            </h2>
            <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
              Que vous démarriez de zéro ou que vous cherchiez à passer au niveau supérieur, 
              commençons par faire le point ensemble sur votre projet et vos objectifs.
            </p>
            <Button
              asChild
              size="lg"
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-green-600/20 hover:shadow-green-600/30 transition-all duration-300"
            >
              <Link to="/solutions">
                Faire le point sur mon projet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
