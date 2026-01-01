import { motion } from "framer-motion";
import { 
  Globe, 
  Target, 
  Palette, 
  Compass, 
  ArrowRight,
  Lightbulb,
  Users,
  Bot,
  Anchor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const pillars = [
  {
    icon: Globe,
    title: "La Vitrine Digitale",
    subtitle: "Sites Web & Solutions",
    problem: "Vos clients vous cherchent sur Google. S'ils ne vous trouvent pas, ils vont chez le concurrent.",
    solution: "Des sites web ultra-rapides, pensés pour mobile, qui travaillent pour vous 24h/24. Plus qu'une carte de visite, une machine à convaincre.",
    size: "large",
  },
  {
    icon: Target,
    title: "La Machine à Clients",
    subtitle: "Marketing & Acquisition",
    problem: "Poster au hasard sur Facebook ne suffit plus pour vendre.",
    solution: "Des stratégies d'acquisition ciblées. Nous transformons les 'likes' en chiffre d'affaires grâce à des tunnels de vente précis.",
    size: "medium",
  },
  {
    icon: Palette,
    title: "L'Identité de Marque",
    subtitle: "Branding",
    problem: "L'amateurisme fait fuir les gros contrats. L'image est la première chose qu'on achète.",
    solution: "Une identité visuelle (Logo, Chartes) qui inspire instantanément confiance et autorité. Soyez inoubliable.",
    size: "medium",
  },
  {
    icon: Compass,
    title: "La Boussole",
    subtitle: "Conseil & Stratégie",
    problem: "Naviguer à vue coûte cher en temps et en argent.",
    solution: "Un plan d'action clair. Nous auditons, nous structurons, et nous vous donnons la feuille de route pour scaler.",
    size: "large",
  },
];

const customServices = [
  { icon: Lightbulb, label: "Formation" },
  { icon: Users, label: "Accompagnement" },
  { icon: Bot, label: "Intégration IA" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/5" />
        
        {/* Lighthouse Visual Metaphor */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg
            viewBox="0 0 400 400"
            className="w-[600px] h-[600px]"
            fill="none"
          >
            {/* Stormy waves */}
            <motion.path
              d="M0 300 Q50 280 100 300 T200 300 T300 300 T400 300"
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted-foreground"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0 320 Q50 300 100 320 T200 320 T300 320 T400 320"
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted-foreground"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            />
            
            {/* Lighthouse */}
            <motion.rect
              x="180"
              y="150"
              width="40"
              height="150"
              className="fill-accent/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ transformOrigin: "bottom" }}
            />
            
            {/* Lighthouse light rays */}
            <motion.path
              d="M200 120 L100 80 M200 120 L300 80 M200 120 L200 60"
              stroke="hsl(var(--accent))"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
            />
          </svg>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-[100px] floating-orb" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] floating-orb" style={{ animationDelay: '-2s' }} />

        <div className="container relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-accent mb-6"
            >
              <Anchor className="w-4 h-4" />
              <span className="text-sm font-medium">Votre guide dans la tempête digitale</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Le Digital n'est plus une option.{" "}
              <span className="text-gradient-gold">C'est votre survie.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Dans un marché saturé, ceux qui bricolent disparaissent. 
              Ceux qui se structurent <span className="text-accent font-semibold">dominent</span>. 
              De quel côté voulez-vous être ?
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-accent/50 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section - Agitating Pain */}
      <section className="py-20 md:py-28 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass-premium p-8 md:p-12 rounded-3xl">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                Aujourd'hui, <span className="text-accent font-semibold">avoir un bon produit ne suffit plus</span>. 
                Si personne ne vous trouve, vous n'existez pas. 
                Si votre image est amateur, on ne vous paie pas au juste prix.
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-6" />
              <p className="text-muted-foreground text-lg">
                Chez Sen'Optima, nous avons identifié les{" "}
                <span className="text-foreground font-semibold">4 piliers indispensables</span>{" "}
                pour transformer une petite activité en entreprise solide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars Bento Grid */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] -translate-x-1/2" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
              Les Fondamentaux
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Les 4 Piliers de votre Réussite
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`group relative p-8 md:p-10 rounded-3xl glass-card hover:glow-gold-subtle transition-all duration-500 ${
                  pillar.size === "large" ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Pillar Number */}
                <div className="absolute top-6 right-6 text-6xl font-heading font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <pillar.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-accent/80 text-sm font-medium uppercase tracking-wider">
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Problem */}
                <div className="mb-6 p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-destructive font-semibold">Le Problème :</span>{" "}
                    {pillar.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                  <p className="text-sm text-foreground">
                    <span className="text-accent font-semibold">Notre Solution :</span>{" "}
                    {pillar.solution}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Approach Section */}
      <section className="py-16 md:py-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Vous avez un besoin <span className="text-gradient-gold">spécifique</span> ?
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Formation, Digitalisation de processus, Intégration IA...
              <br />
              <span className="text-foreground">Chaque entreprise est unique. Discutons de vos défis spécifiques.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {customServices.map((service) => (
                <div
                  key={service.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-muted-foreground"
                >
                  <service.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm">{service.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/20 blur-[150px]" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Vous ne savez pas par quel pilier{" "}
              <span className="text-gradient-gold">commencer</span> ?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10">
              On analyse votre situation avant de vous proposer une solution.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                variant="cta"
                size="lg"
                className="text-lg px-10 py-6 h-auto glow-gold"
              >
                <Link to="/diagnostics" className="flex items-center gap-3">
                  Faire mon Diagnostic maintenant
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Réponse sous 24h
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
