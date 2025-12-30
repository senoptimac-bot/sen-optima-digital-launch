import { 
  Lightbulb, 
  Globe, 
  Megaphone, 
  Palette, 
  GraduationCap, 
  Settings, 
  Crown 
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Conseil & Stratégie Digitale",
    description: "Définissez une vision claire et un plan d'action concret pour votre présence en ligne.",
  },
  {
    icon: Globe,
    title: "Création de Sites Web & Solutions",
    description: "Des sites modernes, rapides et optimisés pour convertir vos visiteurs en clients.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital & Acquisition",
    description: "Développez votre audience et attirez des clients qualifiés avec des stratégies ciblées.",
  },
  {
    icon: Palette,
    title: "Branding & Identité Visuelle",
    description: "Créez une image de marque forte et cohérente qui vous distingue de la concurrence.",
  },
  {
    icon: GraduationCap,
    title: "Formation & Accompagnement",
    description: "Montez en compétences avec nos formations pratiques adaptées à votre niveau.",
  },
  {
    icon: Settings,
    title: "Consulting en Processus",
    description: "Digitalisez et optimisez vos processus internes pour gagner en efficacité.",
  },
  {
    icon: Crown,
    title: "Accompagnement Premium",
    description: "Un suivi personnalisé et exclusif pour les entrepreneurs les plus ambitieux.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Ce que nous faisons
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3 mb-5">
            Nos Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Des solutions complètes pour structurer et développer votre présence digitale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
