import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Quote, ArrowRight, Sparkles, Rocket, TrendingUp, ArrowLeft } from "lucide-react";
import presidentPhoto from "@/assets/president-senegal.webp";
import { Button } from "@/components/ui/button";

// Les 3 valeurs/piliers
const valuesData = [
  {
    icon: Sparkles,
    title: "Clarté",
    description: "Nous vous expliquons chaque étape, chaque investissement, sans jargon. Vous comprenez où va votre argent et pourquoi.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Nos solutions sont testées et éprouvées. Nous ne recommandons que ce qui fonctionne réellement dans notre contexte.",
  },
  {
    icon: TrendingUp,
    title: "Stratégie",
    description: "Nous construisons pour durer. Chaque action vise la pérennité de votre business sur 10 ans, pas un coup d'éclat temporaire.",
  },
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative py-20 pt-32 md:py-28 md:pt-40">
        <div className="container px-5 md:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="gap-2 text-foreground/50 hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Label */}
            <span className="inline-flex items-center gap-2 text-xs text-foreground/40 uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-accent" />
              À Propos
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
              L'Expertise de la Grande Entreprise,
              <span className="block text-accent mt-1">adaptée à votre Projet.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-foreground/60 leading-relaxed">
              Sen'Optima est né d'un constat : les porteurs de projets échouent souvent 
              par manque de structure, pas par manque de talent. Nous vous apportons 
              la rigueur et les méthodes qui font le succès des entreprises établies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION HISTOIRE - Notre Parcours */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            {/* Label */}
            <span className="inline-flex items-center gap-2 text-xs text-foreground/40 uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-accent" />
              Notre Parcours
            </span>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              De l'intérieur du système
              <span className="text-accent"> vers votre réussite.</span>
            </h2>

            {/* Text */}
            <div className="space-y-4 text-foreground/60 leading-relaxed">
              <p>
                Avant de lancer cette agence, nous avons travaillé au cœur des entreprises. 
                Nous avons piloté des projets, optimisé des structures et généré de la 
                croissance réelle.
              </p>
              <p>
                Nous avons vu de l'intérieur ce qui fonctionne.
              </p>
              <p className="text-foreground/70">
                Aujourd'hui, notre mission est de transférer ce savoir-faire "corporate" 
                aux entrepreneurs ambitieux qui veulent concrétiser leurs idées.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION VISION - Pourquoi nous ? */}
      <section className="py-16 md:py-24">
        <div className="container px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            {/* Label */}
            <span className="inline-flex items-center gap-2 text-xs text-foreground/40 uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-accent" />
              Pourquoi Nous ?
            </span>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Nous transformons des idées floues
              <span className="text-accent"> en business solides.</span>
            </h2>

            {/* Text */}
            <div className="space-y-4 text-foreground/60 leading-relaxed">
              <p>
                Beaucoup de jeunes entrepreneurs ont l'énergie, mais pas la méthode. 
                Nous sommes là pour combler ce vide.
              </p>
              <p className="text-foreground/70">
                Nous ne sommes pas là pour vous vendre du rêve, mais pour bâtir 
                les fondations (Marketing, Gestion, Process) qui permettront 
                à votre projet de durer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION VALEURS - Les 3 Piliers */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container px-5 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-12 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-xs text-foreground/40 uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-accent" />
              Nos Valeurs
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Les 3 Piliers
            </h2>
          </motion.div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 max-w-4xl">
            {valuesData.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-card border border-foreground/10 hover:border-accent/20 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Sénégal 2050 - Conservé mais aligné à gauche */}
      <section className="py-16 md:py-24">
        <div className="container px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            {/* Elegant Flag Accent */}
            <div className="flex items-center gap-3 mb-8">
              {/* Thin tricolor bar with star */}
              <div className="flex items-center h-8 rounded-lg overflow-hidden shadow-sm">
                <div className="w-3 h-full bg-[#00853F]" />
                <div className="w-8 h-full bg-[#FDEF42] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#00853F] fill-current">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="w-3 h-full bg-[#E31B23]" />
              </div>
              {/* Decorative line */}
              <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-foreground/20 to-transparent" />
            </div>

            <span className="inline-flex items-center gap-2 text-xs text-foreground/40 uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-accent" />
              Patriotisme Économique
            </span>

            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">
              Vision <span className="text-accent">Sénégal 2050</span>
            </h2>

            <div className="glass-card rounded-2xl p-6 md:p-8">
              <Quote className="w-6 h-6 text-foreground/10 mb-4" />

              <p className="text-foreground/70 leading-relaxed mb-6 italic">
                "La transformation systémique du Sénégal ne se fera pas par la magie, 
                mais par un travail méthodique, une vision claire et une exécution rigoureuse."
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={presidentPhoto}
                  alt="S.E.M. Bassirou Diomaye Faye"
                  className="w-10 h-10 rounded-full object-cover border border-foreground/10"
                />
                <div>
                  <p className="text-sm text-foreground/80">S.E.M. Bassirou Diomaye Faye</p>
                  <p className="text-xs text-foreground/40">Président de la République du Sénégal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 md:py-28 bg-secondary/20">
        <div className="container px-5 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Vous avez l'ambition,
              <span className="block text-accent mt-1">nous avons la méthode.</span>
            </h2>
            <p className="text-foreground/60 mb-8 leading-relaxed">
              Structurons ensemble votre projet pour qu'il tienne la route.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-cta-success hover:bg-cta-success/90 text-cta-success-foreground px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-cta-success/20"
            >
              <Link to="/solutions">
                Structurer mon projet maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
