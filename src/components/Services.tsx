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

// Service images mapping
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
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] shape-blob opacity-30" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] shape-blob opacity-20" style={{ animationDelay: '-15s' }} />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-2xl mb-16"
        >
          <span className="badge-accent mb-6 inline-block">
            Nos Services
          </span>
          <h2 className="text-headline text-foreground mb-4">
            Des solutions pour votre <span className="italic text-accent">croissance</span>
          </h2>
          <p className="text-muted-foreground">
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
                className="group relative rounded-3xl card-cream overflow-hidden transition-all duration-200 hover:translate-y-[-4px] hover:scale-[1.02]"
              >
                {/* Micro-photo for services with images */}
                {hasImage && (
                  <div className="relative h-36 overflow-hidden">
                      <img
                        src={hasImage}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    {/* Overlay for color harmony */}
                    <div className="absolute inset-0 bg-foreground/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Icon - only show if no image */}
                  {!hasImage && (
                    <div className="icon-circle mb-5 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                  )}

                  {/* Icon overlay for image cards */}
                  {hasImage && (
                    <div className="w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center mb-4 -mt-8 relative z-10 border border-border">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                  )}

                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
