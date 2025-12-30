import { motion } from "framer-motion";
import {
  Lightbulb,
  Globe,
  Megaphone,
  Palette,
  GraduationCap,
  Settings,
  Crown,
  TrendingUp,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Conseil & Stratégie Digitale",
    description: "Définissez une vision claire et un plan d'action concret pour votre présence en ligne.",
    size: "large",
    accent: true,
  },
  {
    icon: Globe,
    title: "Création de Sites Web",
    description: "Des sites modernes et optimisés pour convertir.",
    size: "medium",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Stratégies d'acquisition ciblées.",
    size: "medium",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Image de marque forte et cohérente.",
    size: "small",
  },
  {
    icon: GraduationCap,
    title: "Formation",
    description: "Montez en compétences.",
    size: "small",
  },
  {
    icon: Settings,
    title: "Consulting en Processus",
    description: "Digitalisez et optimisez vos processus internes.",
    size: "medium",
  },
  {
    icon: Crown,
    title: "Accompagnement Premium",
    description: "Un suivi personnalisé et exclusif.",
    size: "medium",
  },
];

const stats = [
  { value: "50+", label: "Clients" },
  { value: "100%", label: "Satisfaction" },
  { value: "3x", label: "Croissance moyenne" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const BentoServices = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Nos expertises
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5">
            Ce que nous <span className="text-gradient-gold">faisons</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Des solutions sur mesure pour chaque étape de votre croissance digitale.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5 auto-rows-[140px] md:auto-rows-[160px]"
        >
          {/* Large Strategy Card */}
          <motion.article
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="col-span-2 row-span-2 p-6 md:p-8 rounded-3xl glass-premium glow-gold-subtle hover:glow-gold transition-all duration-500 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
                {services[0].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {services[0].description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-accent font-medium text-sm mt-4">
              <span>Service phare</span>
              <Crown className="w-4 h-4" />
            </div>
          </motion.article>

          {/* Web Card */}
          <motion.article
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -3 }}
            className="col-span-2 row-span-1 p-5 rounded-2xl glass-card hover:glow-gold-subtle transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
              <Globe className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                {services[1].title}
              </h3>
              <p className="text-sm text-muted-foreground">{services[1].description}</p>
            </div>
          </motion.article>

          {/* Marketing Card */}
          <motion.article
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -3 }}
            className="col-span-2 row-span-1 p-5 rounded-2xl glass-card hover:glow-gold-subtle transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
              <Megaphone className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                {services[2].title}
              </h3>
              <p className="text-sm text-muted-foreground">{services[2].description}</p>
            </div>
          </motion.article>

          {/* Stats Card */}
          <motion.article
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="col-span-2 row-span-1 p-5 rounded-2xl bg-gradient-gold text-accent-foreground flex items-center justify-around"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-heading font-bold">{stat.value}</p>
                <p className="text-xs md:text-sm opacity-80">{stat.label}</p>
              </div>
            ))}
          </motion.article>

          {/* Small Cards Row */}
          <motion.article
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            className="col-span-1 row-span-1 p-4 rounded-2xl glass-card hover:glow-gold-subtle transition-all duration-300 flex flex-col items-center justify-center text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
              <Palette className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-sm font-heading font-semibold text-foreground">{services[3].title}</h3>
          </motion.article>

          <motion.article
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            className="col-span-1 row-span-1 p-4 rounded-2xl glass-card hover:glow-gold-subtle transition-all duration-300 flex flex-col items-center justify-center text-center group"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-2 group-hover:bg-accent/20 transition-colors">
              <GraduationCap className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-sm font-heading font-semibold text-foreground">{services[4].title}</h3>
          </motion.article>

          {/* Consulting Card */}
          <motion.article
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -3 }}
            className="col-span-2 row-span-1 p-5 rounded-2xl glass-card hover:glow-gold-subtle transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
              <Settings className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                {services[5].title}
              </h3>
              <p className="text-sm text-muted-foreground">{services[5].description}</p>
            </div>
          </motion.article>

          {/* Premium Card */}
          <motion.article
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -3 }}
            className="col-span-2 row-span-1 p-5 rounded-2xl glass-premium border-accent/30 hover:glow-gold transition-all duration-300 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Crown className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-gradient-gold">
                {services[6].title}
              </h3>
              <p className="text-sm text-muted-foreground">{services[6].description}</p>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoServices;
