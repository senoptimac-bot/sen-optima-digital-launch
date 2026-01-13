import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Check, 
  ArrowRight, 
  Eye, 
  Target, 
  Crown, 
  Shield, 
  ClipboardList, 
  Video, 
  FileText,
  Sparkles,
  FileCheck,
  Presentation,
  Clock,
  AlertTriangle,
  Radio
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppSounds } from "@/hooks/useAppSounds";

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    duration: `${15 + Math.random() * 10}s`,
    size: `${2 + Math.random() * 3}px`,
  }));

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
};

// Animated micro-copy component
const MicroCopy = () => {
  const words = ["Expertise.", "Précision.", "Croissance."];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 overflow-hidden">
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="block text-lg text-accent/80 font-medium tracking-[0.3em] uppercase"
      >
        {words[currentIndex]}
      </motion.span>
    </div>
  );
};

const diagnostics = [
  {
    icon: Eye,
    name: "DIAGNOSTIC VISIBILITÉ",
    focus: "Audit Technique & SEO",
    price: "50.000",
    deliverables: [
      { icon: FileCheck, text: "Rapport Stratégique PDF (10 pages)", isLive: false },
      { icon: Presentation, text: "Session de restitution (45 min)", isLive: true },
    ],
    features: [
      "Analyse vitesse de chargement",
      "Audit sécurité SSL",
      "Indexation Google",
      "Score Mobile & Responsive",
    ],
    cta: "Sécuriser mon Audit",
    popular: false,
  },
  {
    icon: Target,
    name: "STRATÉGIE 360°",
    focus: "Web + Social Media + Concurrence",
    price: "70.000",
    deliverables: [
      { icon: FileCheck, text: "Rapport Expertise PDF (15 pages)", isLive: false },
      { icon: Presentation, text: "Masterclass Stratégique (45 min)", isLive: true },
      { icon: Clock, text: "Plan d'action sur 90 jours", isLive: false },
    ],
    features: [
      "Tout du pack Visibilité inclus",
      "Audit Facebook & Instagram",
      "Analyse concurrentielle approfondie",
      "Audit d'image de marque",
    ],
    cta: "Lancer ma Transformation",
    popular: true,
  },
  {
    icon: Crown,
    name: "AUDIT GLOBAL OPTIMA",
    focus: "Digitalisation Totale & Processus",
    price: "100.000",
    deliverables: [
      { icon: FileCheck, text: "Rapport Complet + Vidéo explicative", isLive: false },
      { icon: Presentation, text: "Présentation stratégique (45 min)", isLive: true },
      { icon: Sparkles, text: "Coaching VIP avec le Fondateur (15 min)", isLive: true },
    ],
    features: [
      "Tout des packs précédents",
      "Audit des processus internes",
      "Analyse outils CRM & Automation",
      "Opportunités d'IA pour votre business",
    ],
    cta: "Dominer mon Marché",
    popular: false,
  },
];

const processSteps = [
  {
    icon: ClipboardList,
    step: "1",
    title: "Remplir le formulaire",
    description: "Partagez vos informations et objectifs",
  },
  {
    icon: Video,
    step: "2",
    title: "La Session",
    description: "1h30 en Visio ou à Grand Mbao",
  },
  {
    icon: FileText,
    step: "3",
    title: "Le Plan d'Action",
    description: "Reçu sous 48h par email",
  },
];

const faqItems = [
  {
    question: "Pourquoi ce n'est pas gratuit ?",
    answer: "Parce que c'est une séance de travail réelle, pas un appel commercial. Vous repartez avec des recommandations concrètes et actionnables dans un rapport de 10 à 15 pages, pas avec une simple proposition commerciale.",
  },
  {
    question: "Suis-je obligé de travailler avec vous après ?",
    answer: "Non, le livrable vous appartient. Vous êtes libre de l'implémenter vous-même ou de faire appel à un autre prestataire. Cependant, si vous choisissez de continuer avec nous, le coût du diagnostic est 100% déduit.",
  },
  {
    question: "Comment se passe le paiement ?",
    answer: "Le paiement se fait via Wave ou Orange Money avant la session. Vous recevrez un lien de paiement sécurisé après votre réservation.",
  },
  {
    question: "Puis-je avoir un remboursement ?",
    answer: "Oui. Si à la fin de la session, vous n'avez reçu aucune valeur ou stratégie claire, nous vous remboursons intégralement. C'est notre garantie satisfait ou remboursé.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const DiagnosticsPage = () => {
  const { playClick } = useAppSounds();
  const navigate = useNavigate();
  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });

  const handleStartDiagnostic = () => {
    playClick();
    navigate('/formulaire-diagnostic');
  };

  return (
    <div className="min-h-screen bg-[#0a1a3a] relative overflow-hidden">
      {/* Floating Grid Background */}
      <div className="fixed inset-0 floating-grid opacity-50 pointer-events-none" />
      
      {/* Floating Particles */}
      <FloatingParticles />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <Crown className="w-4 h-4 text-accent icon-bounce" />
              <span className="text-xs text-white/60 uppercase tracking-[0.2em] font-medium">
                Consulting Premium
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Arrêtez de naviguer à vue.
              <br />
              <span className="bg-gradient-to-r from-accent via-amber-400 to-accent bg-clip-text text-transparent">
                Passez à la stratégie.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed mb-6">
              Beaucoup d'entrepreneurs échouent par manque de clarté. Chez Sen'Optima, 
              nous ne vendons pas de magie, mais une <span className="text-white/70">méthode éprouvée</span>.
            </p>

            {/* Animated Micro-copy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center"
            >
              <MicroCopy />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-20 relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="rounded-2xl p-8 md:p-10 text-center bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Pourquoi payer pour un diagnostic ?
              </h2>
              <p className="text-white/50 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Un médecin n'opère jamais sans radio. Un architecte ne construit pas sans étude de sol. 
                <span className="text-white/70"> Votre entreprise mérite la même rigueur.</span>
              </p>

              <div className="inline-block px-8 py-5 rounded-xl bg-accent/10 border border-accent/20">
                <p className="text-white/80 text-lg">
                  Le coût du diagnostic est <span className="shimmer-gold font-bold text-xl">100% DÉDUIT</span> si vous signez l'accompagnement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Pricing Cards */}
      <section className="py-16 md:py-24 relative overflow-hidden z-10">
        {/* Background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Choisissez votre <span className="text-accent">diagnostic</span>
            </h2>
            <p className="text-white/50 text-lg">
              Trois formules adaptées à votre ambition
            </p>
          </motion.div>

          <motion.div
            ref={cardsRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
          >
            {diagnostics.map((diagnostic, index) => (
              <motion.article
                key={diagnostic.name}
                variants={cardVariants}
                whileHover={{ 
                  y: -24,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className={`group relative flex flex-col rounded-2xl transition-all duration-500 ${
                  diagnostic.popular
                    ? "bg-white/[0.06] border-2 border-accent/40 shadow-[0_0_60px_-10px_rgba(212,167,59,0.3)] lg:scale-105 z-10 border-pulse-gold"
                    : "bg-white/[0.03] border border-white/10 hover:border-accent/50 hover:shadow-[0_0_50px_-10px_rgba(212,167,59,0.25)]"
                } backdrop-blur-xl`}
              >
                {/* Popular Badge */}
                {diagnostic.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="px-6 py-2 bg-gradient-to-r from-accent to-amber-500 rounded-full shadow-lg relative overflow-hidden"
                    >
                      <span className="text-xs font-bold text-[#0a1a3a] uppercase tracking-[0.15em] relative z-10">
                        Recommandé
                      </span>
                      {/* Shimmer effect on badge */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer-sweep_2s_infinite]" style={{ backgroundSize: '200% 100%' }} />
                    </motion.div>
                  </div>
                )}

                <div className={`flex flex-col flex-1 p-8 ${diagnostic.popular ? 'pt-12' : ''}`}>
                  {/* Icon with animation */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 relative ${
                      diagnostic.popular 
                        ? "bg-accent/20 border border-accent/30" 
                        : "bg-white/5 border border-white/10 group-hover:border-accent/30 group-hover:bg-accent/10"
                    } transition-all duration-300`}
                  >
                    <diagnostic.icon 
                      className={`w-8 h-8 transition-all duration-300 ${
                        diagnostic.popular 
                          ? "text-accent icon-bounce" 
                          : "text-white/60 group-hover:text-accent"
                      }`} 
                    />
                  </motion.div>

                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-white tracking-[0.1em] mb-2">
                      {diagnostic.name}
                    </h3>
                    <p className="text-sm text-white/40 uppercase tracking-wider">
                      {diagnostic.focus}
                    </p>
                  </div>

                  {/* Price with Shimmer Effect */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold shimmer-gold tracking-tight">
                        {diagnostic.price}
                      </span>
                      <span className="text-lg text-white/40 font-medium">FCFA</span>
                    </div>
                  </div>

                  {/* Key Deliverables - Gold Highlighted with animations */}
                  <div className="mb-6">
                    <p className="text-xs text-accent uppercase tracking-[0.2em] mb-4 font-semibold flex items-center justify-center gap-2">
                      <Sparkles className="w-3 h-3" />
                      Livrables Clés
                    </p>
                    <ul className="space-y-3">
                      {diagnostic.deliverables.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10 group/item hover:bg-accent/10 transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <item.icon className="w-5 h-5 text-accent flex-shrink-0 icon-bounce" />
                          <span className="text-sm text-white/80 flex-1">{item.text}</span>
                          {item.isLive && (
                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/30">
                              <Radio className="w-3 h-3 text-green-400 pulse-live" />
                              <span className="text-[10px] text-green-400 uppercase font-semibold tracking-wider">Live</span>
                            </div>
                          )}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Features List */}
                  <div className="flex-1 mb-8">
                    <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-4">
                      Inclus dans l'analyse
                    </p>
                    <ul className="space-y-3">
                      {diagnostic.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={feature} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 + featureIndex * 0.05 }}
                        >
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          <span className="text-sm text-white/60">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button with Shiny Effect */}
                  <Button
                    onClick={handleStartDiagnostic}
                    className={`w-full h-14 text-base gap-3 font-semibold transition-all duration-300 btn-shiny ${
                      diagnostic.popular 
                        ? "bg-gradient-to-r from-accent to-amber-500 text-[#0a1a3a] hover:shadow-[0_0_40px_rgba(212,167,59,0.6)] hover:scale-[1.02]" 
                        : "bg-white/5 border border-white/20 text-white hover:border-accent/50 hover:text-accent hover:bg-accent/10"
                    }`}
                  >
                    {diagnostic.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="max-w-3xl mx-auto mt-12"
          >
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
              <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 pulse-live" />
              <p className="text-sm text-amber-200/80 text-center">
                <span className="font-semibold text-amber-300">Attention :</span> En raison de la profondeur de nos analyses (Rapports de 15 pages + Sessions de 45min), nous n'acceptons que <span className="font-bold text-amber-300">3 diagnostics par semaine</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comment ça se passe ?
            </h2>
            <p className="text-white/50 text-lg">
              Un processus simple et transparent
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting line - desktop only */}
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative text-center"
                >
                  <motion.div 
                    className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center group hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <step.icon className="w-10 h-10 text-accent icon-bounce" />
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-r from-accent to-amber-500 text-[#0a1a3a] text-sm font-bold flex items-center justify-center shadow-lg">
                      {step.step}
                    </span>
                  </motion.div>
                  <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-white/50">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-20 relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden bg-gradient-to-br from-accent/10 via-white/[0.03] to-transparent border border-accent/20">
              {/* Decorative shield */}
              <div className="absolute top-4 right-4 opacity-10">
                <Shield className="w-32 h-32 text-accent" />
              </div>

              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(212,167,59,0.2)",
                      "0 0 40px rgba(212,167,59,0.4)",
                      "0 0 20px rgba(212,167,59,0.2)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield className="w-10 h-10 text-accent" />
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Garantie Satisfait ou Remboursé
                </h2>

                <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
                  Si à la fin de la session, vous n'avez reçu aucune valeur ou stratégie claire, nous vous remboursons intégralement. 
                  <span className="text-white font-medium"> Zéro risque pour vous.</span>
                </p>

                <Button 
                  onClick={handleStartDiagnostic}
                  className="h-14 px-8 text-base bg-gradient-to-r from-accent to-amber-500 text-[#0a1a3a] font-semibold hover:shadow-[0_0_40px_rgba(212,167,59,0.4)] transition-all duration-300 btn-shiny"
                >
                  Réserver mon diagnostic maintenant
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-white/50 text-lg">
              Tout ce que vous devez savoir avant de commander
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-6 overflow-hidden hover:border-accent/30 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left font-bold text-white hover:no-underline py-5 hover:text-accent transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-5 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 relative z-10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à passer de la confusion à la clarté ?
            </h2>
            <p className="text-white/50 mb-8 text-lg">
              Réservez votre diagnostic dès aujourd'hui et recevez votre plan d'action sous 48h.
            </p>
            <Button 
              onClick={handleStartDiagnostic}
              className="h-14 px-10 text-base bg-gradient-to-r from-accent to-amber-500 text-[#0a1a3a] font-semibold hover:shadow-[0_0_40px_rgba(212,167,59,0.4)] transition-all duration-300 btn-shiny"
            >
              Commander mon Diagnostic
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DiagnosticsPage;
