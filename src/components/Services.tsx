import {
  Globe,
  Megaphone,
  Settings,
  Crown,
} from "lucide-react";
import { motion } from "framer-motion";

import serviceWeb from "@/assets/Website Creation & Solutions.jpg";
import serviceMarketing from "@/assets/Marketing Digital & Acquisition.jpg";
import serviceConsulting from "@/assets/Consulting en Processus.jpg";
import servicePremium from "@/assets/Accompagnement Premium.jpg";

// Service images mapping - use imported images or fallback to icons
const serviceImages: Record<string, string | null> = {
  "Architecture Business": serviceConsulting,
  "Plateformes de Vente": serviceWeb,
  "Acquisition Clients": serviceMarketing,
  "Identité d'Autorité": servicePremium,
};

const services = [
  {
    icon: Settings,
    title: "Architecture Business",
    description: "Organisation de vos flux, CRM et gestion d'équipe. On structure l'interne.",
  },
  {
    icon: Globe,
    title: "Plateformes de Vente",
    description: "Sites web ultra-rapides conçus pour le réseau mobile du Sénégal et optimisés pour vendre.",
  },
  {
    icon: Megaphone,
    title: "Acquisition Clients",
    description: "Campagnes ciblées pour transformer des inconnus en clients fidèles, pas juste en 'likes'.",
  },
  {
    icon: Crown,
    title: "Identité d'Autorité",
    description: "Branding et création de contenu qui inspirent une confiance immédiate aux gros clients.",
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
          className="text-left max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs text-foreground/40 uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-accent" />
            Ce que nous faisons
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Nos <span className="text-accent">Services</span>
          </h2>
          <p className="text-foreground/60">
            Des solutions complètes pour structurer et développer votre présence digitale.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const hasImage = serviceImages[service.title];
            
            return (
              <motion.article
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative rounded-2xl glass-card overflow-hidden transition-all duration-300"
              >
                {/* Micro-photo for services with images */}
                {hasImage && (
                  <div className="relative h-32 overflow-hidden -m-[1.75rem] mb-0">
                    <img
                      src={hasImage}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Blue overlay for color harmony */}
                    <div className="absolute inset-0 bg-[hsl(220,25%,8%)] opacity-20 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className={hasImage ? "p-6 md:p-8 pt-4" : "p-0"}>
                  {/* Icon - only show if no image */}
                  {!hasImage && (
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                  )}

                  {/* Icon overlay for image cards */}
                  {hasImage && (
                    <div className="w-10 h-10 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center mb-4 -mt-8 relative z-10 border border-accent/20">
                      <service.icon className="w-5 h-5 text-accent" />
                    </div>
                  )}

                  <h3 className="text-lg font-heading font-semibold mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
