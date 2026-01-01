import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  ArrowRight, 
  Monitor, 
  Target, 
  Rocket, 
  Shield, 
  CreditCard, 
  ClipboardList, 
  Video, 
  FileText,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppSounds } from "@/hooks/useAppSounds";
import PaymentModal from "@/components/PaymentModal";

const diagnostics = [
  {
    icon: Monitor,
    name: "L'Audit Flash",
    subtitle: "Focus Technique",
    price: "20.000",
    targetAudience: "Vous avez déjà un site mais \"ça ne marche pas\" ou c'est lent.",
    analyses: [
      "UX/Design de votre site",
      "Performance Mobile",
      "Tunnel de vente",
      "Intégrations Wave/Orange Money",
    ],
    deliverable: "Rapport PDF \"Check-up Technique\"",
    cta: "Commander l'Audit Flash",
    popular: false,
  },
  {
    icon: Target,
    name: "Le Diagnostic Stratégie",
    subtitle: "Best-Seller",
    price: "25.000",
    targetAudience: "Vous voulez plus de clients mais ne savez pas par où commencer.",
    analyses: [
      "Votre Client Idéal (Persona)",
      "Vos réseaux sociaux",
      "Votre Offre irrésistible",
      "Votre positionnement marché",
    ],
    deliverable: "Roadmap sur 3 mois + Calendrier Éditorial",
    cta: "Commander la Stratégie",
    popular: true,
  },
  {
    icon: Rocket,
    name: "Business Scan 360",
    subtitle: "Transformation",
    price: "30.000",
    targetAudience: "PME ou Entrepreneur ambitieux qui veut structurer et automatiser (CRM, IA).",
    analyses: [
      "Tout le pack Stratégie inclus",
      "Processus internes",
      "Outils de gestion actuels",
      "Opportunités d'automatisation IA",
    ],
    deliverable: "Rapport de Transformation Digitale Complète",
    cta: "Commander le Business Scan",
    popular: false,
  },
];

const processSteps = [
  {
    icon: CreditCard,
    step: "1",
    title: "Réservation & Paiement",
    description: "Via Wave ou Orange Money",
  },
  {
    icon: ClipboardList,
    step: "2",
    title: "Questionnaire Préparatoire",
    description: "Pour arriver préparé à la session",
  },
  {
    icon: Video,
    step: "3",
    title: "La Session",
    description: "1h30 en Visio ou à Grand Mbao",
  },
  {
    icon: FileText,
    step: "4",
    title: "Le Plan d'Action",
    description: "Reçu sous 48h par email",
  },
];

const faqItems = [
  {
    question: "Pourquoi ce n'est pas gratuit ?",
    answer: "Parce que c'est une séance de travail réelle, pas un appel commercial. Vous repartez avec des recommandations concrètes et actionnables, pas avec une simple proposition commerciale.",
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
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const DiagnosticsPage = () => {
  const { playClick } = useAppSounds();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedDiagnostic, setSelectedDiagnostic] = useState<typeof diagnostics[0] | null>(null);

  const handleOpenPayment = (diagnostic: typeof diagnostics[0]) => {
    playClick();
    setSelectedDiagnostic(diagnostic);
    setIsPaymentModalOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-0 left-[5%] w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-6">
              Passez à l'action
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Arrêtez de naviguer à vue.<br />
              <span className="text-gradient-gold">Passez à la stratégie.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Beaucoup d'entrepreneurs échouent par manque de clarté. Chez Sen'Optima, nous ne vendons pas de magie, mais une méthode.
            </p>

            {/* Visual representation */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 flex items-center justify-center gap-4 md:gap-8"
            >
              {/* Chaos side */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl glass-card flex items-center justify-center">
                  <svg className="w-12 h-12 md:w-14 md:h-14 text-muted-foreground" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 80 Q30 20 50 50 T80 30" className="animate-pulse" />
                    <path d="M10 50 Q40 70 60 30 T90 60" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <path d="M30 70 Q50 10 70 60 T85 40" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground font-medium">Confusion</span>
              </div>

              {/* Arrow */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="flex items-center"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-accent -ml-4" />
              </motion.div>

              {/* Clarity side */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl glass-premium glow-gold-subtle flex items-center justify-center">
                  <svg className="w-12 h-12 md:w-14 md:h-14 text-accent" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 70 L50 30 L80 20" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="80" cy="20" r="6" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-sm text-accent font-medium">Clarté</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section - Why Pay */}
      <section className="py-16 md:py-20 bg-background relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
                Pourquoi payer pour un diagnostic ?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Un médecin n'opère jamais sans radio. Un architecte ne construit pas sans étude de sol. 
                <span className="text-foreground font-medium"> Votre entreprise mérite la même rigueur.</span>
              </p>

              {/* Key argument */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-4 md:px-8 md:py-5 rounded-2xl bg-accent/10 border border-accent/30"
              >
                <p className="text-lg md:text-xl font-heading font-bold text-foreground">
                  💡 Le coût du diagnostic est <span className="text-gradient-gold">100% DÉDUIT</span> si vous signez l'accompagnement complet par la suite.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Choisissez votre diagnostic
            </h2>
            <p className="text-muted-foreground text-lg">
              Trois formules adaptées à votre stade de développement
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {diagnostics.map((diagnostic) => (
              <motion.article
                key={diagnostic.name}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                className={`relative flex flex-col p-8 rounded-3xl transition-all duration-500 ${
                  diagnostic.popular
                    ? "glass-premium glow-gold lg:scale-105 lg:z-10"
                    : "glass-card hover:glow-gold-subtle"
                }`}
              >
                {/* Popular Badge */}
                {diagnostic.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                  >
                    <span className="px-5 py-1.5 bg-gradient-gold text-accent-foreground text-xs font-bold rounded-full shadow-gold">
                      Recommandé
                    </span>
                  </motion.div>
                )}

                {/* Icon & Title */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                  diagnostic.popular ? "bg-accent/20" : "bg-accent/10"
                }`}>
                  <diagnostic.icon className="w-7 h-7 text-accent" />
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {diagnostic.name}
                  </h3>
                  <span className="text-sm text-accent font-medium">{diagnostic.subtitle}</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-4xl font-heading font-bold ${
                    diagnostic.popular ? "text-gradient-gold" : "text-foreground"
                  }`}>
                    {diagnostic.price}
                  </span>
                  <span className="text-muted-foreground ml-2">FCFA</span>
                </div>

                {/* Target Audience */}
                <div className="mb-6 p-4 rounded-xl bg-foreground/5 border border-foreground/10">
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-accent">Pour qui ?</span><br />
                    {diagnostic.targetAudience}
                  </p>
                </div>

                {/* What we analyze */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Ce qu'on analyse :</p>
                  <ul className="space-y-2">
                    {diagnostic.analyses.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverable */}
                <div className="mb-8 p-4 rounded-xl bg-accent/5 border border-accent/20">
                  <p className="text-sm">
                    <span className="font-medium text-accent">Livrable : </span>
                    <span className="text-foreground">{diagnostic.deliverable}</span>
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Button
                    variant={diagnostic.popular ? "cta" : "outline"}
                    className={`w-full gap-2 group ${
                      diagnostic.popular 
                        ? "glow-gold-subtle hover:glow-gold" 
                        : "glass border-foreground/20 hover:border-accent/50"
                    }`}
                    onClick={() => handleOpenPayment(diagnostic)}
                  >
                    {diagnostic.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-background/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Comment ça se passe ?
            </h2>
            <p className="text-muted-foreground text-lg">
              Un processus simple et transparent
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
              {/* Connecting line - desktop only */}
              <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-20 h-20 mx-auto mb-4 rounded-2xl glass-card flex items-center justify-center border-2 border-accent/30 bg-background">
                    <step.icon className="w-8 h-8 text-accent" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-premium glow-gold rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              {/* Decorative shield */}
              <div className="absolute top-4 right-4 opacity-10">
                <Shield className="w-24 h-24 text-accent" />
              </div>

              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-accent" />
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Garantie Satisfait ou Remboursé
                </h2>

                <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
                  Si à la fin de la session, vous n'avez reçu aucune valeur ou stratégie claire, nous vous remboursons intégralement. 
                  <span className="text-foreground font-medium"> Zéro risque pour vous.</span>
                </p>

                <Button variant="cta" size="lg" className="glow-gold" asChild>
                  <a
                    href="https://wa.me/221781926969?text=Bonjour, je souhaite réserver un diagnostic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Réserver mon diagnostic maintenant
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary dark:bg-background/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-muted-foreground text-lg">
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
                  className="glass-card rounded-2xl border-none px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-heading font-bold text-foreground hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Prêt à passer de la confusion à la clarté ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Réservez votre diagnostic dès aujourd'hui et recevez votre plan d'action sous 48h.
            </p>
            <Button variant="cta" size="lg" className="glow-gold" asChild>
              <a
                href="https://wa.me/221781926969?text=Bonjour, je souhaite réserver un diagnostic Sen'Optima"
                target="_blank"
                rel="noopener noreferrer"
              >
                Réserver sur WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        diagnosticName={selectedDiagnostic?.name || ""}
        price={selectedDiagnostic?.price || ""}
      />
    </>
  );
};

export default DiagnosticsPage;
