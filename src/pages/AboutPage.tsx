import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Quote, Rocket, Target, Zap, Heart, Cpu, ArrowLeft, Trophy, TrendingUp, Star, Check, Users, Lightbulb, Handshake, Globe, Wrench, Phone, FileText, Clock, BarChart3 } from "lucide-react";
import fondateurPhoto from "@/assets/fondateur.png";
import presidentPhoto from "@/assets/president-senegal.webp";
import aboutImage from "@/assets/about-team.jpg";
import { Button } from "@/components/ui/button";
const philosophyCards = [{
  icon: Target,
  title: "Réalisme Local",
  description: "Nous ne vous vendons pas des stratégies Silicon Valley copiées-collées. Notre équipe a vendu sur le terrain sénégalais, géré des milliers de conversations clients, testé ce qui marche vraiment. Nous connaissons notre écosystème de l'intérieur : les comportements d'achat, les plateformes efficaces, les défis logistiques, les réalités budgétaires.",
  resultIcon: Trophy
}, {
  icon: Zap,
  title: "L'Outillage Moderne",
  description: "Nous vous apportons les meilleures technologies (IA, Automatisation, Analytics) adaptées à notre contexte. Vous n'avez pas besoin d'un budget de multinationale pour avoir des outils de multinationale. Nous équipons nos clients avec exactement ce dont ils ont besoin pour rivaliser avec n'importe qui.",
  resultIcon: TrendingUp
}, {
  icon: Rocket,
  title: "Croissance Durable",
  description: "Nous savons ce que c'est de construire avec peu. Nous vous accompagnons étape par étape, avec des stratégies réalistes qui respectent vos ressources actuelles tout en visant la croissance exponentielle. Nous ne sommes pas là pour des coups d'éclat temporaires, mais pour bâtir une croissance solide et pérenne.",
  resultIcon: Star
}];
const teamDNA = [{
  icon: Target,
  title: "Expertise terrain",
  description: "Chaque membre de notre équipe a une expérience opérationnelle concrète : gestion commerciale, communication digitale, relation client, stratégie marketing. Nous ne théorisons pas, nous appliquons ce que nous avons testé."
}, {
  icon: Rocket,
  title: "Innovation constante",
  description: "Nous sommes en veille permanente sur les nouvelles technologies. Nous testons les outils, nous expérimentons pour identifier ce qui marche vraiment dans notre contexte."
}, {
  icon: Handshake,
  title: "Engagement total",
  description: "Votre succès est notre succès. Nous nous investissons dans chaque projet comme si c'était le nôtre. Nous ne lâchons rien tant que vous n'avez pas les résultats que vous méritez."
}, {
  icon: Globe,
  title: "Vision locale, standards internationaux",
  description: "Nous combinons notre connaissance du marché sénégalais avec les meilleures pratiques mondiales. Le résultat ? Des stratégies qui fonctionnent ici, maintenant."
}];
const trustPoints = [{
  icon: Phone,
  text: "Expérience terrain vérifiable – Notre équipe a géré des milliers de conversations clients, construit des stratégies qui ont doublé des portefeuilles, vendu dans la vraie vie"
}, {
  icon: Wrench,
  text: "Maîtrise complète de la chaîne – Marketing digital, communication visuelle, automatisation, relation client : nous couvrons tout"
}, {
  icon: Globe,
  text: "Connaissance de l'écosystème – Nous parlons votre langue, nous connaissons votre marché, nous vivons vos défis"
}, {
  icon: Zap,
  text: "Approche pragmatique – Nous testons tout avant de vous le proposer. Si ça ne marche pas ici, nous ne le recommandons pas"
}];
const approachPoints = ["Diagnostic gratuit – 30 minutes pour analyser votre situation et identifier vos opportunités", "Stratégies concrètes – Vous repartez avec un plan d'action, pas de la théorie", "Tarifs adaptés – Pensés pour les budgets d'entrepreneurs sénégalais", "Accompagnement continu – Nous restons disponibles pour vos questions", "Résultats mesurables – Chaque action a un objectif chiffré"];
const missionPoints = ["Une stratégie claire et actionnable dès le lendemain – Un plan précis avec des étapes concrètes que nous construisons ensemble", "Les outils technologiques adaptés à votre budget – Vous n'avez pas besoin de millions pour être professionnel", "Les compétences pour piloter votre croissance – Nous vous formons, nous ne faisons pas juste du conseil", "La confiance pour conquérir votre marché – Vous saurez exactement quoi faire et comment le faire"];
const AboutPage = () => {
  const navigate = useNavigate();
  return <>
      {/* Hero Section - Mission */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Colonne gauche : texte */}
            <div className="flex-1 text-center md:text-left">
              {/* Bouton Précédent */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} className="mb-8 flex justify-start md:justify-start">
                <Button variant="ghost" size="sm" onClick={() => navigate("/diagnostics")} className="gap-2 text-foreground/50 hover:text-accent transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Précédent
                </Button>
              </motion.div>

              {/* Badge */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }} className="inline-flex items-center gap-2 mb-12">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-caption text-foreground/50 uppercase tracking-widest">
                  Notre Mission
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 initial={{
              opacity: 0,
              y: 40
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1]
            }} className="text-display font-bold text-foreground mb-8">
                Plus qu'un cabinet.{" "}
                <span className="text-accent">Une vision collective.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p initial={{
              opacity: 0,
              y: 40
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }} className="text-body-lg text-foreground/60 max-w-2xl mx-auto mb-8 leading-relaxed">
                Sen'Optima, c'est le cabinet que nous aurions voulu avoir en démarrant. Celui qui dit la vérité, qui donne des stratégies applicables immédiatement, qui fait gagner des années.
              </motion.p>

              <motion.p initial={{
              opacity: 0,
              y: 40
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1]
            }} className="text-body text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                <span className="text-accent font-semibold">Notre mission :</span> Bâtir l'économie numérique de demain, entrepreneur par entrepreneur.
              </motion.p>

              {/* Icons Row */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} className="flex items-center justify-center md:justify-start gap-8">
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
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 1,
            delay: 0.05
          }} className="flex-1 flex justify-center mb-8 md:mb-0">
              <img alt="À Propos de Sen'Optima" className="w-full rounded-3xl shadow-lg object-cover" loading="lazy" src="/lovable-uploads/88a3cec3-5e2a-4612-9c92-d88ce96ba1a8.jpg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Details */}
      <section className="py-section-lg relative">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <h3 className="text-title text-white mb-8">
                Nous voulons que chaque entrepreneur qui nous fait confiance reparte avec :
              </h3>
              <div className="space-y-4">
                {missionPoints.map((point, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <p className="text-body text-white/70">{point}</p>
                  </motion.div>)}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-body text-white/50 leading-relaxed">
                  Nous ne vendons pas du rêve. Nous construisons des fondations solides avec la méthode que nous avons perfectionnée sur le terrain, les outils que nous avons testés, et un accompagnement qui respecte votre rythme.
                </p>
                <p className="text-body text-accent mt-4 font-medium">
                  Notre engagement : Vous rendre autonome et redoutable, pas créer une dépendance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* L'Histoire - Constat d'Urgence */}
      <section className="py-section-lg relative">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="w-full sm:w-1/2">
              <span className="text-caption text-white/40 uppercase tracking-widest mb-6 block">
                Notre Histoire
              </span>

              <h2 className="text-headline text-white mb-8">
                Le Constat <span className="text-accent">d'Urgence</span>
              </h2>

              <div className="space-y-6 text-body text-white/60 leading-relaxed">
                <p>
                  Tout est parti d'une observation douloureuse que nous vivons encore aujourd'hui.
                </p>
                <p>
                  Nous croisons quotidiennement des{" "}
                  <span className="text-white/80">jeunes brillants</span>, des{" "}
                  <span className="text-white/80">entrepreneurs passionnés</span> avec des idées qui pourraient changer la donne... mais qui échouent.
                </p>
                <p>
                  Non pas par manque de talent.<br />
                  Non pas par manque de courage.<br />
                  Mais par <span className="text-accent">manque d'outils adaptés</span> et de méthodologie structurée.
                </p>
                <p>
                  Ils essaient d'appliquer des méthodes vues sur YouTube, conçues pour des marchés occidentaux. Des stratégies qui ignorent nos spécificités : nos moyens de paiement, nos comportements consommateurs, nos contraintes réelles.
                </p>
                <p className="text-white/50">
                  Le résultat ? De l'énergie gaspillée. Des mois perdus. Du potentiel gâché.
                </p>
                <p className="text-white/70 pt-6 border-t border-white/5">
                  Nous avons vécu cette frustration. Nous avons tâtonné avant de comprendre ce qui marche vraiment ici. Nous avons payé le prix de l'apprentissage par essai-erreur.
                </p>
                <p>
                  Nous avons créé Sen'Optima pour que vous n'ayez pas à perdre ce temps. Pour transformer votre potentiel en{" "}
                  <span className="text-accent">machine de guerre économique</span>, capable de créer de l'emploi, de générer du chiffre et de bâtir le Sénégal de demain.
                </p>
                <p className="text-white/80 font-medium">
                  Nous croyons fermement que notre continent a tout ce qu'il faut pour réussir. Il suffit de la bonne méthode, des bons outils, et d'une équipe qui connaît le chemin.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="glass-card rounded-2xl p-8 flex items-center justify-center w-full sm:w-1/2 min-h-[220px] sm:aspect-square">
              <svg viewBox="0 0 400 400" className="w-full h-full max-w-sm">
                <g className="text-white/10">
                  <motion.path initial={{
                  pathLength: 0
                }} whileInView={{
                  pathLength: 1
                }} transition={{
                  duration: 2
                }} d="M50,200 Q100,50 150,180 T250,120 T350,200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                  <motion.path initial={{
                  pathLength: 0
                }} whileInView={{
                  pathLength: 1
                }} transition={{
                  duration: 2.2
                }} d="M60,220 Q120,300 180,150 T280,250 T360,180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                </g>

                <motion.path initial={{
                pathLength: 0,
                opacity: 0
              }} whileInView={{
                pathLength: 1,
                opacity: 1
              }} transition={{
                duration: 1.5,
                delay: 1
              }} d="M50,350 Q150,300 200,200 T350,50" fill="none" stroke="hsl(43 65% 53%)" strokeWidth="2" strokeLinecap="round" />

                <motion.circle initial={{
                scale: 0
              }} whileInView={{
                scale: 1
              }} transition={{
                delay: 2
              }} cx="50" cy="350" r="6" className="fill-white/20" />
                <motion.circle initial={{
                scale: 0
              }} whileInView={{
                scale: 1
              }} transition={{
                delay: 2.3
              }} cx="350" cy="50" r="8" fill="hsl(43 65% 53%)" />

                <motion.text initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} transition={{
                delay: 2.2
              }} x="50" y="380" className="fill-white/30 text-xs" textAnchor="middle">
                  Confusion
                </motion.text>
                <motion.text initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} transition={{
                delay: 2.5
              }} x="350" y="30" fill="hsl(43 65% 53%)" className="text-xs" textAnchor="middle">
                  Succès
                </motion.text>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notre Philosophie - Adaptation Locale */}
      <section className="py-section-lg relative">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <span className="text-caption text-white/40 uppercase tracking-widest mb-4 block">
              Notre Différence
            </span>
            <h2 className="text-headline text-white">
              L'Adaptation <span className="text-accent">Locale</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {philosophyCards.map((card, index) => <motion.div key={card.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="glass-card rounded-xl p-8 group hover:border-accent/30 transition-all duration-300">
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
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Fondateur */}
      <section className="py-section-lg relative">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>
              <span className="text-caption text-white/40 uppercase tracking-widest mb-8 block text-center">
                Fondateur & Stratège Principal
              </span>

              <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
                {/* Photo élargie */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="md:col-span-2"
                >
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-2xl blur-xl"></div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <img 
                        alt="Mandiaye Sylla - Fondateur Sen'Optima" 
                        className="w-full h-full object-cover" 
                        src="/lovable-uploads/2077d491-8e17-4c74-b956-95d81833f708.jpg" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Cadre moderne pour le texte */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="md:col-span-3"
                >
                  <div className="relative">
                    {/* Cadre décoratif */}
                    <div className="absolute -inset-px bg-gradient-to-br from-accent/30 via-white/5 to-accent/20 rounded-2xl"></div>
                    <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/5">
                      {/* Accent corner */}
                      <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-accent/50 rounded-tl-2xl"></div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-accent/50 rounded-br-2xl"></div>
                      
                      <h2 className="text-headline text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-0.5 bg-accent"></span>
                        Mandiaye Sylla
                      </h2>

                      <div className="space-y-5 text-body text-white/60 leading-relaxed">
                        <p>
                          Je m'appelle Mandiaye Sylla, et notre histoire a commencé dans les tranchées du commerce sénégalais.
                        </p>
                        <p>
                          En 2020, pendant que tout le monde était confiné, j'ai lancé mon premier business de livraison. Puis un accident m'a immobilisé pendant des mois. Ce qui aurait pu être une fin est devenu un déclic :{" "}
                          <span className="text-white/80">coincé avec juste un téléphone, j'ai découvert le digital et je n'ai plus jamais lâché.</span>
                        </p>
                        <p>
                          De la gestion d'une boutique avec plus de 2 000 messages WhatsApp par semaine, à la direction de communication d'une agence où nous avons{" "}
                          <span className="text-accent">doublé le portefeuille clients</span>, j'ai appris une vérité fondamentale : le talent seul ne suffit jamais. C'est la méthode et les bons outils qui transforment une idée en empire.
                        </p>
                        <p className="text-white/70 pt-2 border-t border-white/10">
                          Aujourd'hui, avec l'équipe Sen'Optima, nous mettons cette expérience terrain au service des entrepreneurs qui veulent réussir sans perdre 10 ans à tâtonner.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* L'Équipe Sen'Optima */}
      <section className="py-section-lg relative">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <span className="text-caption text-white/40 uppercase tracking-widest mb-4 block">
              L'Équipe Sen'Optima
            </span>
            <h2 className="text-headline text-white mb-6">
              Une équipe terrain qui <span className="text-accent">comprend vos défis</span>
            </h2>
            <p className="text-body-lg text-white/50 max-w-3xl mx-auto">
              Nous ne sommes pas des consultants en tour d'ivoire. Nous sommes une équipe de jeunes entrepreneurs et stratèges digitaux qui ont construit leur expertise dans les tranchées du commerce sénégalais.
            </p>
            <p className="text-body text-white/60 max-w-3xl mx-auto mt-4">
              Nous avons tous vécu les mêmes défis que vous : budget limité, infrastructure instable, concurrence féroce. C'est précisément ce qui fait notre force.
            </p>
          </motion.div>

          {/* Notre ADN */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {teamDNA.map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="glass-card rounded-xl p-6 group hover:border-accent/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-title text-white mb-2">{item.title}</h3>
                    <p className="text-body text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>)}
          </div>

          {/* Notre manière de travailler */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-title text-white mb-6">Notre manière de travailler</h3>
              <p className="text-body text-white/60 leading-relaxed mb-4">
                Nous ne faisons pas de la consultation classique. Nous devenons votre partenaire de croissance.
              </p>
              <p className="text-body text-white/60 leading-relaxed mb-4">
                Quand vous travaillez avec Sen'Optima, nous plongeons dans votre entreprise. Nous comprenons votre marché, vos clients, vos contraintes. Nous construisons <span className="text-white/80">avec vous, pas pour vous</span>.
              </p>
              <p className="text-body text-white/60 leading-relaxed mb-4">
                Nous restons disponibles, même après la mission. Une question ? Un doute ? Nous sommes là.
              </p>
              <p className="text-body text-accent font-medium">
                Pour nous, votre transformation n'est pas un projet ponctuel, c'est un partenariat durable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi nous faire confiance */}
      <section className="py-section-lg relative">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <span className="text-caption text-white/40 uppercase tracking-widest mb-4 block">
              Pourquoi Nous Faire Confiance
            </span>
            <h2 className="text-headline text-white">
              Ce qui nous <span className="text-accent">différencie</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {/* Trust Points */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {trustPoints.map((point, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-body text-white/60">{point.text}</p>
                </motion.div>)}
            </div>

            {/* Notre approche */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="glass-card rounded-2xl p-8 md:p-12 mb-12">
              <h3 className="text-title text-white mb-8 text-center">Notre approche</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {approachPoints.map((point, index) => <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-body text-white/60">{point}</p>
                  </div>)}
              </div>
            </motion.div>

            {/* Notre promesse */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="text-center">
              <div className="glass-card rounded-2xl p-8 md:p-12 border-accent/20">
                <h3 className="text-title text-accent mb-6">Notre promesse</h3>
                <p className="text-body-lg text-white/70 leading-relaxed mb-4">
                  Vous ne paierez jamais pour du conseil que vous ne pouvez pas appliquer.
                </p>
                <p className="text-body text-white/50 leading-relaxed">
                  Chaque stratégie que nous concevons est pensée pour être exécutable avec vos ressources actuelles. Nous testons tout nous-mêmes. Si ça ne marche pas dans notre contexte, nous ne le recommandons pas.
                </p>
                <p className="text-body text-white/60 mt-4">
                  Nous construisons avec vous, pas pour vous. Notre objectif : vous rendre <span className="text-accent">autonome, compétent et redoutable</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Sénégal 2050 */}
      <section className="py-section-lg relative">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-4xl mx-auto text-center">
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
                <img src={presidentPhoto} alt="S.E.M. Bassirou Diomaye Faye" className="w-12 h-12 rounded-full object-cover border border-white/10" />
                <div className="text-left">
                  <p className="text-sm text-white/80">S.E.M. Bassirou Diomaye Faye</p>
                  <p className="text-caption text-white/40">Président de la République du Sénégal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-section-lg relative">
        <div className="container">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="max-w-3xl mx-auto text-center">
            <span className="text-caption text-white/40 uppercase tracking-widest mb-6 block">
              Appel à l'action
            </span>

            <h2 className="text-headline text-white mb-6">
              Rejoignez les entrepreneurs qui <span className="text-accent">passent à l'action</span>
            </h2>
            
            <div className="space-y-4 text-body text-white/60 mb-10 max-w-xl mx-auto">
              <p>
                Nous avons fait le chemin. Nous connaissons les raccourcis, les pièges à éviter, les stratégies qui fonctionnent.
              </p>
              <p>
                Aujourd'hui, nous mettons cette expertise à votre service.
              </p>
              <p>
                Que vous démarriez ou que vous cherchiez à scaler, nous avons les outils, la méthode et l'expérience pour vous accompagner.
              </p>
              <p className="text-white/80 font-medium">
                Arrêtez de tâtonner. Construisons ensemble votre succès.
              </p>
            </div>

            <Button size="lg" onClick={() => navigate("/diagnostics")} className="bg-accent hover:bg-accent/90 text-background h-14 px-10">
              Réservez votre diagnostic gratuit
            </Button>
          </motion.div>
        </div>
      </section>
    </>;
};
export default AboutPage;