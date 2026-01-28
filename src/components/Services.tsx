import {
  Code,
  Palette,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

import serviceWeb from "@/assets/Website Creation & Solutions.jpg";
import serviceBranding from "@/assets/Branding & Visual Identity.jpg";
import serviceMarketing from "@/assets/Marketing Digital & Acquisition.jpg";

const services = [
  {
    icon: Code,
    title: "Stratégie & Développement",
    subtitle: "Des plateformes faites pour convertir.",
    description: "Nous ne codons pas pour faire joli. Nous créons des sites rapides, optimisés pour le mobile (car 90% de vos clients sont sur téléphone) et conçus pour vendre.",
    image: serviceWeb,
  },
  {
    icon: Palette,
    title: "Création de Contenu & Branding",
    subtitle: "Une image qui impose le respect.",
    description: "Dans un marché saturé, l'image est votre première carte de visite. Vidéos, Identité Visuelle, Messages : nous rendons votre marque inoubliable.",
    image: serviceBranding,
  },
  {
    icon: TrendingUp,
    title: "Acquisition & Croissance",
    subtitle: "Des prospects, pas juste des likes.",
    description: "Nous mettons en place les systèmes pour attirer les bons clients vers votre entreprise, jour après jour.",
    image: serviceMarketing,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Ce que nous faisons
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent mt-3 mb-5">
            Nos Services
          </h2>
          <p className="text-foreground/70 text-lg">
            Des solutions complètes pour structurer et développer votre présence digitale.
          </p>
        </motion.div>

        {/* Services Grid - 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative rounded-2xl glass-card overflow-hidden transition-all duration-300 border border-white/10"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Blue overlay for color harmony */}
                <div className="absolute inset-0 bg-[hsl(220,25%,8%)] opacity-30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Icon overlay */}
                <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center mb-4 -mt-12 relative z-10 border border-accent/30">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-accent font-medium text-sm mb-3">
                  {service.subtitle}
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
