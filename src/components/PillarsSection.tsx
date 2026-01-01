import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Settings, Target, Compass, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Solutions Numériques",
    subtitle: "Sites & Applications",
    color: "accent",
    link: "/services",
  },
  {
    icon: Settings,
    title: "Organisation",
    subtitle: "Process & Outils",
    color: "accent",
    link: "/services",
  },
  {
    icon: Target,
    title: "Marketing",
    subtitle: "Acquisition Clients",
    color: "accent",
    link: "/services",
  },
  {
    icon: Compass,
    title: "Stratégie",
    subtitle: "Conseil & Direction",
    color: "accent",
    link: "/services",
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const PillarsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Nos piliers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5">
            Nos Piliers <span className="text-gradient-gold">d'Intervention</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            4 axes stratégiques pour structurer votre croissance digitale.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {pillars.map((pillar, index) => (
            <motion.div key={pillar.title} variants={itemVariants}>
              <Link
                to={pillar.link}
                className="block h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative h-full p-6 md:p-8 rounded-2xl glass-card hover:glass-premium hover:glow-gold-subtle transition-all duration-300 group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <pillar.icon className="w-7 h-7 md:w-8 md:h-8 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-2 group-hover:text-gradient-gold transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {pillar.subtitle}
                  </p>

                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">En savoir plus</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">0{index + 1}</span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;
