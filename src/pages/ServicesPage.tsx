import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Check, Server, Target, Search } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

// Service Card Component
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  sections: {
    label: string;
    content: string;
    type: "neutral" | "warning" | "negative" | "positive";
  }[];
}

const ServiceCard = ({ icon: Icon, title, subtitle, sections }: ServiceCardProps) => {
  const getTypeStyles = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-orange-500/10 border-orange-500/20 text-orange-300";
      case "negative":
        return "bg-red-500/10 border-red-500/20 text-red-300";
      case "positive":
        return "bg-green-500/10 border-green-500/20 text-green-300";
      default:
        return "bg-foreground/5 border-foreground/10 text-foreground/70";
    }
  };

  return (
    <motion.article
      variants={itemVariants}
      className="glass-card p-6 md:p-8 rounded-2xl border border-foreground/10 hover:border-accent/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-accent/70 font-medium">
            {subtitle}
          </span>
          <h3 className="text-xl font-heading font-bold text-foreground mt-1">
            {title}
          </h3>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${getTypeStyles(section.type)}`}
          >
            <span className="text-xs uppercase tracking-wider font-semibold block mb-2 opacity-80">
              {section.label}
            </span>
            <p className="text-sm leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>
    </motion.article>
  );
};

const services: ServiceCardProps[] = [
  {
    icon: Server,
    title: "Infrastructure de Vente",
    subtitle: "Sites & Tech",
    sections: [
      {
        label: "C'est quoi",
        content:
          "Pas de \"sites vitrines\". Nous construisons des machines à convertir (Landing pages, CRM, Automatisations).",
        type: "neutral",
      },
      {
        label: "L'effort requis",
        content:
          "Vous devrez valider chaque étape. Si vous n'avez pas de contenu ni d'offre, on ne code rien.",
        type: "warning",
      },
      {
        label: "Ce que ce n'est PAS",
        content: "De l'art pour faire joli. C'est un outil commercial.",
        type: "negative",
      },
      {
        label: "Résultat réaliste",
        content:
          "Un système qui capture et traite les prospects 24/7 sans erreur humaine.",
        type: "positive",
      },
    ],
  },
  {
    icon: Target,
    title: "Stratégie d'Acquisition",
    subtitle: "Marketing",
    sections: [
      {
        label: "C'est quoi",
        content:
          "Le déploiement de campagnes ciblées sur les canaux où se trouve VOTRE argent (pas forcément TikTok).",
        type: "neutral",
      },
      {
        label: "L'effort requis",
        content:
          "Un budget publicitaire dédié. Sans carburant, la machine ne tourne pas.",
        type: "warning",
      },
      {
        label: "Ce que nous ne garantissons PAS",
        content:
          "Des millions en 24h. Le marché décide, nous on optimise.",
        type: "negative",
      },
      {
        label: "Résultat réaliste",
        content:
          "Un coût d'acquisition client (CAC) maîtrisé et prévisible.",
        type: "positive",
      },
    ],
  },
  {
    icon: Search,
    title: "Audit & Restructuration",
    subtitle: "Conseil",
    sections: [
      {
        label: "C'est quoi",
        content:
          "Une autopsie de votre business pour trouver où l'argent fuite.",
        type: "neutral",
      },
      {
        label: "L'effort requis",
        content:
          "Une transparence totale sur vos chiffres. Si vous mentez, le diagnostic sera faux.",
        type: "warning",
      },
      {
        label: "Ce que ce n'est PAS",
        content:
          "Du coaching motivationnel. On parle de mathématiques, pas d'état d'esprit.",
        type: "negative",
      },
      {
        label: "Résultat réaliste",
        content:
          "Un plan d'action clair (le Rapport 15 pages) pour arrêter de perdre de l'argent.",
        type: "positive",
      },
    ],
  },
];

// Disqualification items
const disqualifyRed = [
  "Vous pensez que l'IA fait tout toute seule.",
  "Vous n'avez pas de budget à investir (min. 100k FCFA).",
  "Vous cherchez un exécutant \"oui-oui\", pas un partenaire stratégique.",
];

const qualifyGreen = [
  "Vous avez un business existant (ou un projet validé).",
  "Vous comprenez que la croissance demande de la rigueur.",
  "Vous êtes prêt à entendre la vérité sur vos processus actuels.",
];

const ServicesPage = () => {
  return (
    <>
      {/* HERO - Le Filtre Immédiat */}
      <section className="relative min-h-[60vh] flex items-center justify-center py-24 pt-36 bg-background">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-8">
              Nous ne vendons pas de magie.
              <br />
              <span className="text-accent">Nous vendons des systèmes.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-3xl">
              Sen'Optima construit l'infrastructure technique et stratégique de
              votre croissance.{" "}
              <span className="text-foreground/40">
                Si vous cherchez un bouton magique pour devenir riche sans
                effort, quittez cette page.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES - Format Anti-Promesse */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] -translate-x-1/2" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
              Ce que nous faisons réellement
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Nos Services
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* DISQUALIFICATION - À qui c'est destiné ? */}
      <section className="py-20 md:py-28 bg-secondary/30 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              À qui c'est destiné ?
            </h2>
            <p className="text-foreground/60 text-lg">
              La transparence évite les mauvaises surprises des deux côtés.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Colonne Rouge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl bg-red-500/5 border border-red-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-red-400">
                  Ne nous contactez pas si...
                </h3>
              </div>
              <ul className="space-y-4">
                {disqualifyRed.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Colonne Verte */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 rounded-2xl bg-green-500/5 border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-green-400">
                  On travaille ensemble si...
                </h3>
              </div>
              <ul className="space-y-4">
                {qualifyGreen.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/70">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 bg-background relative">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] translate-x-1/2" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Vous êtes toujours là ?
            </h2>
            <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
              Si vous avez lu tout ça et que vous êtes prêt à travailler
              sérieusement, alors on peut parler.
            </p>
            <Button
              asChild
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300"
            >
              <Link to="/solutions">
                Auditer mon Business (50k - 100k FCFA)
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
