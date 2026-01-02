import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, MapPin, Cpu, Globe, Rocket, Target, Zap, Heart, ArrowRight, Shield, Award } from "lucide-react";
import fondateurPhoto from "@/assets/fondateur.png";
import presidentPhoto from "@/assets/president-senegal.webp";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";

const philosophyCards = [
  {
    icon: Target,
    title: "Réalisme Local",
    description: "Nous n'imposons pas des modèles théoriques occidentaux. Nous créons des stratégies adaptées au marché sénégalais (Wave, WhatsApp, Oralité)."
  },
  {
    icon: Zap,
    title: "L'Outillage Moderne",
    description: "Nous armons nos clients avec les meilleures technologies (IA, Automatisation) pour qu'ils puissent scaler rapidement."
  },
  {
    icon: Rocket,
    title: "Croissance Durable",
    description: "Nous ne sommes pas là pour faire un coup. Nous vous accompagnons de l'idée jusqu'à l'expansion."
  }
];

const AboutPage = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      {/* Hero Section - L'Ambition */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-gradient-hero">
        {/* Background Pattern - Fusion Tradition/Modernité */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Circuit Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,167,59,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,167,59,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* African Pattern Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="africanPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-accent" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#africanPattern)" />
          </svg>

          {/* Gradient Orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.12, 0.08] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-primary/20 blur-3xl"
          />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-8"
            >
              <Globe className="w-4 h-4" />
              Notre Mission
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 leading-tight">
              Plus qu'un cabinet.{" "}
              <span className="text-gradient-gold block mt-2">Une vision pour le Sénégal numérique.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Nous ne sommes pas là pour vendre du rêve, mais pour{" "}
              <span className="text-foreground font-medium">bâtir l'économie numérique de demain</span>, 
              entrepreneur par entrepreneur.
            </p>

            {/* Visual: Tradition meets Technology */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-16 flex justify-center items-center gap-8"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center mb-3">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Tradition</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-accent/50 to-accent" />
                <div className="w-3 h-3 rounded-full bg-accent glow-gold" />
                <div className="w-8 h-0.5 bg-gradient-to-l from-accent/50 to-accent" />
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center mb-3">
                  <Cpu className="w-8 h-8 text-accent" />
                </div>
                <span className="text-sm text-muted-foreground">Technologie</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* L'Histoire - Le Déclic */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-6">
                Notre Histoire
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8">
                Le Constat <span className="text-gradient-gold">d'Urgence</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Tout est parti d'une observation frustrante. Nous voyions quotidiennement des{" "}
                  <span className="text-foreground font-medium">jeunes brillants</span> et des{" "}
                  <span className="text-foreground font-medium">entrepreneurs passionnés</span> échouer.
                </p>
                <p>
                  Non pas par manque de talent, mais par <span className="text-accent font-semibold">manque d'outils</span>.
                </p>
                <p>
                  Ils essayaient d'appliquer des méthodes "importées" qui ne collaient pas à nos réalités.
                </p>
                <p>
                  Dans un monde où l'IA et le numérique redéfinissent les règles, ne pas maîtriser ces outils est une{" "}
                  <span className="text-destructive font-medium">pénalité majeure</span>.
                </p>
                <p className="text-foreground font-medium text-xl pt-4 border-t border-border/50">
                  Nous avons créé Sen'Optima pour combler ce fossé : transformer ce potentiel brut en{" "}
                  <span className="text-gradient-gold">machines de guerre économiques</span>.
                </p>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square relative rounded-3xl glass-premium p-8 overflow-hidden">
                {/* Abstract Illustration */}
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Chaos - Lines emmêlées */}
                  <g className="text-muted-foreground/30">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M50,200 Q100,50 150,180 T250,120 T350,200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2.2, ease: "easeInOut" }}
                      d="M60,220 Q120,300 180,150 T280,250 T360,180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2.4, ease: "easeInOut" }}
                      d="M40,180 Q90,280 140,100 T240,220 T340,160"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </g>

                  {/* La ligne de clarté - Vers le succès */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                    d="M50,350 Q150,300 200,200 T350,50"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  {/* Points clés */}
                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 2 }}
                    cx="50" cy="350" r="8"
                    className="fill-muted-foreground/50"
                  />
                  <motion.circle
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 2.3 }}
                    cx="350" cy="50" r="12"
                    fill="url(#goldGradient)"
                  />

                  {/* Labels */}
                  <motion.text
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    x="50" y="380"
                    className="fill-muted-foreground text-sm"
                    textAnchor="middle"
                  >
                    Confusion
                  </motion.text>
                  <motion.text
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    x="350" y="30"
                    className="fill-accent text-sm font-bold"
                    textAnchor="middle"
                  >
                    Succès
                  </motion.text>

                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--accent) / 0.5)" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notre Philosophie - L'Adaptation Locale */}
      <section className="py-20 md:py-28 relative bg-secondary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-6">
              Notre Différence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              L'Adaptation <span className="text-gradient-gold">Locale</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ce qui nous distingue des consultants "copier-coller".
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {philosophyCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-3xl glass-card hover:glow-gold-subtle transition-all duration-500"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold"
                >
                  <card.icon className="w-7 h-7 text-accent-foreground" />
                </motion.div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  {card.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Sénégal 2050 - Patriotisme Économique */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Background doré subtil */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/3" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,167,59,0.08),transparent_70%)]" />
        
        {/* Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,167,59,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,167,59,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Drapeau du Sénégal - Cercle moderne */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-10"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full" />
                
                {/* Drapeau circulaire */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-xl ring-2 ring-accent/30">
                  {/* Bandes du drapeau */}
                  <div className="absolute inset-0 flex">
                    <div className="w-1/3 h-full bg-[#00853F]" />
                    <div className="w-1/3 h-full bg-[#FDEF42] flex items-center justify-center">
                      {/* Étoile verte */}
                      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 text-[#00853F] fill-current">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div className="w-1/3 h-full bg-[#E31B23]" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-8"
            >
              <Shield className="w-4 h-4" />
              Patriotisme Économique
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8">
              Vision <span className="text-gradient-gold">Sénégal 2050</span>
            </h2>

            <div className="relative p-8 md:p-12 rounded-3xl glass-premium">
              <Quote className="w-10 h-10 text-accent/30 absolute top-6 left-6" />
              
              <p 
                className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "Nous sommes les artisans du{" "}
                <span className="text-gradient-gold font-bold not-italic">New Deal Technologique</span>."
              </p>

              <div 
                className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left md:text-center"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <p>
                  Notre mission s'inscrit au cœur de l'Agenda National de Transformation. 
                  En structurant les PME et en bâtissant une{" "}
                  <span className="text-accent font-bold">Souveraineté Numérique</span> solide, 
                  nous faisons du Sénégal un{" "}
                  <span className="text-accent font-bold">Pôle d'Excellence</span> technologique.
                </p>
                <p className="text-foreground font-medium text-xl pt-6 border-t border-accent/20">
                  Chaque entreprise que nous accompagnons est un moteur de progrès social 
                  et de compétitivité pour notre économie nationale.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Souveraineté - New Deal Technologique */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Dark Background with golden border */}
        <div className="absolute inset-0 bg-[#030912]" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-accent/5" />
        
        {/* Golden border lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <div className="container relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-6">
              <Award className="w-4 h-4" />
              Vision & Souveraineté
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Le <span className="text-gradient-gold">New Deal Technologique</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Colonne Gauche - Portrait du Président */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-center order-first"
            >
              <div className="relative">
                {/* Cadre élégant avec bordure dorée */}
                <div className="relative p-1 rounded-2xl bg-gradient-to-br from-accent via-accent/50 to-accent shadow-gold">
                  <div className="rounded-xl overflow-hidden bg-[#0A1628]">
                    <img 
                      src={presidentPhoto} 
                      alt="Son Excellence M. Bassirou Diomaye Diakhar FAYE - Président de la République du Sénégal" 
                      className="w-72 md:w-80 h-auto object-cover"
                    />
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-accent/10 blur-2xl -z-10 rounded-3xl" />
              </div>
              
              {/* Caption italique */}
              <p className="mt-6 text-center italic text-muted-foreground text-sm max-w-xs" style={{ fontFamily: "'Playfair Display', serif" }}>
                S.E.M. Bassirou Diomaye Faye,<br />
                Président de la République du Sénégal
              </p>
            </motion.div>

            {/* Colonne Droite - Citation & Alignement */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-left"
            >
              {/* Citation Présidentielle */}
              <div className="relative mb-10">
                {/* Guillemets dorés imposants */}
                <span 
                  className="absolute -top-4 -left-2 text-6xl md:text-7xl text-accent/40 font-serif leading-none select-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "
                </span>
                
                <blockquote 
                  className="pl-8 pr-4 py-4 text-lg md:text-xl text-foreground leading-relaxed italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Le Sénégal s'engage résolument sur la voie d'une nouvelle ère où le numérique se révèle être le moteur d'un développement inclusif et durable... J'ai lancé le{" "}
                  <span className="text-accent font-semibold not-italic">« New Deal Technologique »</span>, une initiative audacieuse qui renforce la souveraineté numérique du Sénégal.
                </blockquote>

                {/* Guillemet fermant */}
                <span 
                  className="absolute -bottom-8 right-4 text-6xl md:text-7xl text-accent/40 font-serif leading-none select-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  "
                </span>
              </div>

              {/* Séparateur doré */}
              <div className="my-10 h-px bg-gradient-to-r from-accent/60 via-accent to-accent/60 max-w-xs" />

              {/* Notre Rôle dans le New Deal */}
              <div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gradient-gold mb-6">
                  Notre Rôle dans le New Deal
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  <span className="text-foreground font-semibold">Sen'Optima Consulting</span> se fait l'écho de cette ambition nationale. 
                  Nous transformons cette vision en réalité opérationnelle pour les entrepreneurs sénégalais. 
                  En structurant les PME et en digitalisant leurs processus, nous bâtissons l'écosystème dynamique 
                  et compétitif voulu par le Chef de l'État pour l'horizon 2050.
                </p>

                {/* Badge & CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="cta"
                      size="lg"
                      asChild
                      className="text-base"
                    >
                      <a href="/services">
                        Découvrir nos solutions
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </motion.div>

                  {/* Badge discret */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs text-accent font-medium uppercase tracking-wider">
                      Champions Nationaux
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Le Fondateur */}
      <section className="py-24 md:py-32 relative bg-secondary/30 dark:bg-secondary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
              Le Fondateur
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              L'Homme Derrière la <span className="text-gradient-gold">Vision</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-10 md:p-14 rounded-3xl glass-premium">
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                {/* Photo du Fondateur */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative flex-shrink-0"
                >
                  <img 
                    src={fondateurPhoto} 
                    alt="Mandiaye Sylla - Fondateur de Sen'Optima" 
                    className="w-48 h-48 md:w-52 md:h-52 rounded-full object-cover ring-4 ring-accent/30"
                    style={{ objectPosition: '50% 15%' }}
                  />
                  {/* Glow */}
                  <div className="absolute -inset-3 rounded-full bg-accent/20 blur-xl -z-10" />
                </motion.div>

                {/* Bio & Storytelling */}
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1">
                    Mandiaye Sylla
                  </h3>
                  <p className="text-accent font-semibold text-lg mb-2">
                    Fondateur & Stratège Principal
                  </p>
                  <p className="text-sm text-muted-foreground italic mb-8">
                    Architecte de Systèmes & Visionnaire Digital
                  </p>

                  {/* Le Pourquoi */}
                  <div className="space-y-6 leading-loose">
                    <p className="text-foreground text-lg">
                      Mon parcours m'a montré une réalité frappante au Sénégal : nous avons une{" "}
                      <span className="text-accent font-semibold">ambition débordante</span> et un{" "}
                      <span className="text-accent font-semibold">talent brut immense</span>, mais nos structures 
                      manquent souvent de la colonne vertébrale nécessaire pour passer à l'échelle. 
                      J'ai créé Sen'Optima pour combler ce vide.
                    </p>

                    {/* La Mission */}
                    <p className="text-muted-foreground text-lg">
                      Ce qui m'anime chaque matin, c'est de voir une activité informelle se transformer 
                      en une entreprise digitale solide, prévisible et hautement rentable. Mon engagement 
                      est de mettre la{" "}
                      <span className="text-foreground font-medium">rigueur du conseil de haut niveau</span> au 
                      service de chaque entrepreneur qui ose rêver grand pour notre nation.
                    </p>
                  </div>

                  {/* Signature manuscrite */}
                  <div className="mt-10 pt-6 border-t border-border/30">
                    <svg 
                      viewBox="0 0 200 60" 
                      className="w-40 h-auto mx-auto md:mx-0"
                      aria-label="Signature de Mandiaye Sylla"
                    >
                      <path 
                        d="M10 45 Q20 20 40 35 T70 30 Q85 25 95 40 Q105 50 120 35 Q130 25 145 38 Q155 45 170 30 Q180 20 190 35"
                        fill="none" 
                        stroke="hsl(var(--accent))" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        className="opacity-80"
                      />
                      <text 
                        x="60" 
                        y="55" 
                        className="fill-accent/60 text-[8px]"
                        style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
                      >
                        M. Sylla
                      </text>
                    </svg>
                  </div>

                  {/* Localisation */}
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>Grand Mbao, Dakar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Vous partagez cette <span className="text-gradient-gold">vision</span> ?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Construisons votre avenir ensemble.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="cta"
                size="lg"
                onClick={() => setBookingOpen(true)}
                className="text-lg px-10 py-6 h-auto"
              >
                Rejoindre le mouvement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <p className="text-sm text-muted-foreground mt-4">
              Réservez un appel stratégique gratuit
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
};

export default AboutPage;
