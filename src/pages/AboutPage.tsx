import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Quote, Rocket, Target, Zap, Heart, Cpu, ArrowLeft, Trophy, TrendingUp, Star } from "lucide-react";
import fondateurPhoto from "@/assets/fondateur.png";
import presidentPhoto from "@/assets/president-senegal.webp";
import aboutImage from "@/assets/À Propos de Sen'Optima.jpg";
import { Button } from "@/components/ui/button";

const philosophyCards = [
  {
    icon: Target,
    title: "Réalisme Local",
    description: "Nous n'imposons pas des modèles théoriques occidentaux. Nous créons des stratégies adaptées au marché sénégalais (Wave, WhatsApp, Oralité).",
    resultIcon: Trophy,
  },
  {
    icon: Zap,
    title: "L'Outillage Moderne",
    description: "Nous armons nos clients avec les meilleures technologies (IA, Automatisation) pour qu'ils puissent scaler rapidement.",
    resultIcon: TrendingUp,
  },
  {
    icon: Rocket,
    title: "Croissance Durable",
    description: "Nous ne sommes pas là pour faire un coup. Nous vous accompagnons de l'idée jusqu'à l'expansion.",
    resultIcon: Star,
  }
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Colonne gauche : texte */}
            <div className="flex-1 text-center md:text-left">
              {/* Bouton Précédent */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex justify-start md:justify-start"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/diagnostics")}
                  className="gap-2 text-foreground/50 hover:text-accent transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Précédent
                </Button>
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 mb-12"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-caption text-foreground/50 uppercase tracking-widest">
                  Notre Mission
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-display font-bold text-foreground mb-8"
              >
                Plus qu'un cabinet.{" "}
                <span className="text-accent">Une vision.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-body-lg text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                Nous ne sommes pas là pour vendre du rêve, mais pour {" "}
                <span className="text-foreground/80">bâtir l'économie numérique de demain</span>,
                entrepreneur par entrepreneur.
              </motion.p>

              {/* Icons Row */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center justify-center md:justify-start gap-8"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 glass-card rounded-xl flex items-center justify-center mb-2">
                    <Heart className="w-6 h-6 text-foreground/50" />
                  </div>
                  <span className="text-caption text-foreground/40">Tradition</span>
                </div>
                <div className="w-12 h-px bg-foreground/10" />
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 glass-card rounded-xl flex items-center justify-center mb-2">
                    <Cpu className="w-6 h-6 text-foreground/50" />
                  </div>
                  <span className="text-caption text-foreground/40">Technologie</span>
                </div>
              </motion.div>
            </div>
            {/* Colonne droite : image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.05 }}
              className="flex-1 flex justify-center mb-8 md:mb-0"
            >
              <img
                src={aboutImage}
                alt="À Propos de Sen'Optima"
                className="rounded-3xl shadow-lg max-h-72 object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* L'Histoire */}
      <section className="py-section-lg relative">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2"
            >
              <span className="text-caption text-white/40 uppercase tracking-widest mb-6 block">
                Notre Histoire
              </span>

              <h2 className="text-headline text-white mb-8">
                Le Constat <span className="text-accent">d'Urgence</span>
              </h2>

              <div className="space-y-6 text-body text-white/60 leading-relaxed">
                <p>
                  Tout est parti d'une observation frustrante. Nous voyions quotidiennement des{" "}
                  <span className="text-white/80">jeunes brillants</span> et des{" "}
                  <span className="text-white/80">entrepreneurs passionnés</span> échouer.
                </p>
                <p>
                  Non pas par manque de talent, mais par <span className="text-accent">manque d'outils</span>.
                </p>
                <p>
                  Ils essayaient d'appliquer des méthodes "importées" qui ne collaient pas à nos réalités.
                </p>
                <p className="text-white/70 pt-6 border-t border-white/5">
                  Nous avons créé Sen'Optima pour combler ce fossé : transformer ce potentiel brut en{" "}
                  <span className="text-accent">machines de guerre économiques</span>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8 flex items-center justify-center w-full sm:w-1/2 min-h-[220px] sm:aspect-square"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full max-w-sm">
                <g className="text-white/10">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    d="M50,200 Q100,50 150,180 T250,120 T350,200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2.2 }}
                    d="M60,220 Q120,300 180,150 T280,250 T360,180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                  />
                </g>

                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  d="M50,350 Q150,300 200,200 T350,50"
                  fill="none"
                  stroke="hsl(43 65% 53%)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <motion.circle
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 2 }}
                  cx="50" cy="350" r="6"
                  className="fill-white/20"
                />
                <motion.circle
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 2.3 }}
                  cx="350" cy="50" r="8"
                  fill="hsl(43 65% 53%)"
                />

                <motion.text
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                  x="50" y="380"
                  className="fill-white/30 text-xs"
                  textAnchor="middle"
                >
                  Confusion
                </motion.text>
                <motion.text
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  x="350" y="30"
                  fill="hsl(43 65% 53%)"
                  className="text-xs"
                  textAnchor="middle"
                >
                  Succès
                </motion.text>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notre Philosophie */}
      <section className="py-section-lg relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-caption text-white/40 uppercase tracking-widest mb-4 block">
              Notre Différence
            </span>
            <h2 className="text-headline text-white">
              L'Adaptation <span className="text-accent">Locale</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {philosophyCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-8 group hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <card.icon className="w-6 h-6 text-white/50 group-hover:text-accent transition-colors" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <card.resultIcon className="w-4 h-4 icon-success-animated" />
                  </div>
                </div>

                <h3 className="text-title text-white mb-4">
                  {card.title}
                </h3>

                <p className="text-body text-white/50 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Sénégal 2050 */}
      <section className="py-section-lg relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Flag */}
            <div className="flex justify-center mb-10">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10">
                <div className="flex h-full">
                  <div className="w-1/3 h-full bg-[#00853F]" />
                  <div className="w-1/3 h-full bg-[#FDEF42] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#00853F] fill-current">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div className="w-1/3 h-full bg-[#E31B23]" />
                </div>
              </div>
            </div>

            <span className="text-caption text-white/40 uppercase tracking-widest mb-6 block">
              Patriotisme Économique
            </span>

            <h2 className="text-headline text-white mb-10">
              Vision <span className="text-accent">Sénégal 2050</span>
            </h2>

            <div className="glass-card rounded-xl p-10 md:p-14">
              <Quote className="w-8 h-8 text-white/10 mx-auto mb-6" />
              
              <p className="text-body-lg text-white/70 leading-relaxed mb-8 italic max-w-3xl mx-auto">
                "La transformation systémique du Sénégal ne se fera pas par la magie, mais par un travail méthodique, une vision claire et une exécution rigoureuse."
              </p>

              <div className="flex items-center justify-center gap-4">
                <img 
                  src={presidentPhoto} 
                  alt="S.E.M. Bassirou Diomaye Faye"
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div className="text-left">
                  <p className="text-sm text-white/80">S.E.M. Bassirou Diomaye Faye</p>
                  <p className="text-caption text-white/40">Président de la République du Sénégal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fondateur */}
      <section className="py-section-lg relative">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-caption text-white/40 uppercase tracking-widest mb-6 block">
                Le Fondateur
              </span>

              <div className="flex items-center gap-3 mb-6">
                {/* Avatar rond - petite taille */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex-shrink-0"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-accent/30">
                    <img 
                      src={fondateurPhoto} 
                      alt="Mandiaye Sylla - Fondateur Sen'Optima"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <div className="flex-1">
                  <h2 className="text-headline text-white mb-1">
                    Mandiaye Sylla
                  </h2>
                  <p className="text-caption text-accent uppercase tracking-widest">
                    Fondateur & Stratège Principal
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-body text-white/60 leading-relaxed">
                <p>
                  Entrepreneur dans l'âme, j'ai compris très tôt que le talent seul ne suffit pas. 
                  C'est la <span className="text-white/80">méthode et la structure</span> qui transforment une idée en empire.
                </p>
                <p>
                  J'ai fondé Sen'Optima avec une mission claire : équiper les entrepreneurs sénégalais 
                  des mêmes outils que les startups de la Silicon Valley, mais{" "}
                  <span className="text-accent">adaptés à notre réalité</span>.
                </p>
                <p>
                  Mon parcours m'a appris que l'excellence n'est pas un don, c'est une décision quotidienne.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-lg relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-headline text-white mb-6">
              Vous partagez cette <span className="text-accent">vision</span> ?
            </h2>
            <p className="text-body-lg text-white/50 mb-10 max-w-xl mx-auto">
              Discutons ensemble de la façon dont Sen'Optima peut accélérer votre transformation.
            </p>

            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/diagnostics")}
              className="border-white/20 text-white/70 hover:border-accent hover:text-accent h-14 px-10"
            >
              Réservez mon diagnostic
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;