import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Quote, ArrowRight, Sparkles, Rocket, TrendingUp } from "lucide-react";
import presidentPhoto from "@/assets/president-senegal.webp";
import equipePhoto from "@/assets/equipe-senoptima.jpg";
import fondateurPhoto from "@/assets/fondateur.jpg";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import TeamSection from "@/components/TeamSection";
import visionPhoto from "@/assets/vision-photo.jpg";
import BackButton from "@/components/BackButton";

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
  const seo = SEO_CONFIG.about;

  return (
    <>
      <SEOHead 
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        keywords={seo.keywords}
      />
      
      <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative py-20 pt-32 md:py-32 md:pt-44 lg:py-40 lg:pt-52 overflow-hidden">
        {/* Background with decorative shape */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-secondary/30 rounded-bl-[100px] hidden lg:block" />
        
        <div className="container px-5 md:px-8 lg:px-12 relative z-10">
          {/* Back Button */}
          <BackButton />

          {/* Photo en haut */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-10 lg:mb-14"
          >
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-full h-full bg-accent/10 rounded-[2rem] transform rotate-3 hidden lg:block" />
              <img src={equipePhoto} alt="Équipe Sen'Optima" className="relative w-full aspect-[16/9] rounded-[2rem] object-cover border-2 border-accent/40 shadow-[0_0_20px_rgba(var(--accent),0.15)]" loading="eager" decoding="async" />
            </div>
          </motion.div>

          {/* Titre et contenu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <span className="badge-accent mb-6 lg:mb-8">
              À Propos
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight mb-6 lg:mb-8">
              L'Expertise de la <span className="italic text-accent">Grande Entreprise</span>,
              <span className="block mt-1 lg:mt-2">adaptée à votre Projet.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed lg:leading-loose max-w-2xl mb-8">
              Sen'Optima est né d'un constat : les porteurs de projets échouent souvent 
              par manque de structure, pas par manque de talent. Nous vous apportons 
              la rigueur et les méthodes qui font le succès des entreprises établies.
            </p>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="group gap-3 text-sm rounded-full bg-foreground text-primary hover:bg-foreground/90 transition-all duration-300 h-14 px-8"
            >
              <Link to="/solutions">
                Découvrir nos solutions
                <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SECTION HISTOIRE - Notre Parcours */}
      <section className="py-16 md:py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
        {/* Decorative shape */}
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-accent/5 rounded-tr-[100px] hidden lg:block" />
        
        <div className="container px-5 md:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              {/* Badge */}
              <span className="badge-accent mb-4 lg:mb-6">
                Notre Parcours
              </span>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6 lg:mb-8">
                De l'intérieur du <span className="italic text-accent">système</span>
                <span className="block mt-1">vers votre réussite.</span>
              </h2>

              {/* Text */}
              <div className="space-y-4 lg:space-y-6 text-muted-foreground leading-relaxed lg:leading-loose text-base lg:text-lg">
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

            {/* Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -top-6 -right-6 w-full h-full bg-accent/10 rounded-[2rem] transform rotate-3 hidden lg:block" />
              <div className="relative">
                <img src={fondateurPhoto} alt="Le Fondateur de Sen'Optima" className="w-full h-auto rounded-[2rem] object-contain border-2 border-accent/40 shadow-[0_0_20px_rgba(var(--accent),0.15)]" loading="lazy" decoding="async" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION VISION - Pourquoi nous ? */}
      <section className="py-16 md:py-28 lg:py-36 relative overflow-hidden">
        {/* Decorative shape */}
        <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-secondary/30 rounded-bl-[100px] hidden lg:block" />
        
        <div className="container px-5 md:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo Placeholder - Left on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -top-6 -left-6 w-full h-full bg-accent/10 rounded-[2rem] transform -rotate-3 hidden lg:block" />
              <div className="relative">
                <img src={visionPhoto} alt="Vision Sen'Optima - Consulting en stratégie" className="w-full aspect-[4/3] rounded-[2rem] object-cover border-2 border-accent/40 shadow-[0_0_20px_rgba(var(--accent),0.15)]" loading="lazy" decoding="async" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl order-1 lg:order-2"
            >
              {/* Badge */}
              <span className="badge-accent mb-4 lg:mb-6">
                Pourquoi Nous ?
              </span>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-6 lg:mb-8">
                Nous transformons des <span className="italic text-accent">idées floues</span>
                <span className="block mt-1">en business solides.</span>
              </h2>

              {/* Text */}
              <div className="space-y-4 lg:space-y-6 text-muted-foreground leading-relaxed lg:leading-loose text-base lg:text-lg">
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
        </div>
      </section>

      {/* SECTION VALEURS - Les 3 Piliers */}
      <section className="py-16 md:py-28 lg:py-36 bg-secondary/30 relative overflow-hidden">
        {/* Decorative shape */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[30%] h-[50%] bg-accent/5 rounded-l-[100px] hidden lg:block" />
        
        <div className="container px-5 md:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-12 lg:mb-16 max-w-3xl lg:max-w-4xl"
          >
            <span className="badge-accent mb-4 lg:mb-6">
              Nos Valeurs
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
              Les 3 <span className="italic text-accent">Piliers</span>
            </h2>
          </motion.div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-5xl">
            {valuesData.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative p-6 lg:p-8 card-cream group"
              >
                {/* Number indicator */}
                <div className="absolute top-6 right-6">
                  <span className="text-xs text-accent/40">{String(index + 1).padStart(2, '0')}</span>
                </div>

                {/* Icon */}
                <div className="icon-circle mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 lg:w-7 lg:h-7 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl font-heading font-bold text-foreground mb-2 lg:mb-3 group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm lg:text-base leading-relaxed lg:leading-loose">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Sénégal 2050 - Conservé mais aligné à gauche */}
      <section className="py-16 md:py-28 lg:py-36">
        <div className="container px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl lg:max-w-4xl"
          >
            {/* Elegant Flag Accent */}
            <div className="flex items-center gap-3 mb-8 lg:mb-10">
              {/* Thin tricolor bar with star */}
              <div className="flex items-center h-8 lg:h-10 rounded-lg overflow-hidden shadow-sm">
                <div className="w-3 lg:w-4 h-full bg-[#00853F]" />
                <div className="w-8 lg:w-10 h-full bg-[#FDEF42] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 lg:w-5 lg:h-5 text-[#00853F] fill-current">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="w-3 lg:w-4 h-full bg-[#E31B23]" />
              </div>
              {/* Decorative line */}
              <div className="h-px flex-1 max-w-24 lg:max-w-32 bg-gradient-to-r from-foreground/20 to-transparent" />
            </div>

            <span className="inline-flex items-center gap-2 text-xs text-foreground/40 uppercase tracking-widest mb-4 lg:mb-6">
              <span className="w-8 h-px bg-accent" />
              Patriotisme Économique
            </span>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-8 lg:mb-10">
              Vision <span className="text-accent">Sénégal 2050</span>
            </h2>

            <div className="card-cream p-6 md:p-8 lg:p-10">
              <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-foreground/10 mb-4 lg:mb-6" />

              <p className="text-foreground/70 leading-relaxed lg:leading-loose mb-6 lg:mb-8 italic text-base lg:text-lg">
                "La transformation systémique du Sénégal ne se fera pas par la magie, 
                mais par un travail méthodique, une vision claire et une exécution rigoureuse."
              </p>

              <div className="flex items-center gap-3 lg:gap-4">
                <img
                  src={presidentPhoto}
                  alt="S.E.M. Bassirou Diomaye Faye"
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover border border-foreground/10"
                />
                <div>
                  <p className="text-sm lg:text-base text-foreground/80">S.E.M. Bassirou Diomaye Faye</p>
                  <p className="text-xs lg:text-sm text-foreground/40">Président de la République du Sénégal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION TEAM - Ceux qui portent votre ambition */}
      <TeamSection />

      {/* CTA FINAL */}
      <section className="py-20 md:py-32 lg:py-40 bg-secondary/20">
        <div className="container px-5 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl lg:max-w-2xl"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4 lg:mb-6">
              Vous avez l'ambition,
              <span className="block text-accent mt-1 lg:mt-2">nous avons la méthode.</span>
            </h2>
            <p className="text-foreground/60 mb-8 lg:mb-10 leading-relaxed lg:leading-loose text-base lg:text-lg">
              Structurons ensemble votre projet pour qu'il tienne la route.
            </p>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default AboutPage;
