import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Check, 
  ArrowRight, 
  Monitor, 
  Target, 
  Rocket, 
  Shield, 
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
    cta: "Démarrer gratuitement",
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
    cta: "Démarrer gratuitement",
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
    cta: "Démarrer gratuitement",
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
  const navigate = useNavigate();

  const handleStartDiagnostic = (diagnostic: typeof diagnostics[0]) => {
    playClick();
    navigate("/merci");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-caption text-white/40 uppercase tracking-widest mb-6 block">
              Passez à l'action
            </span>
            <h1 className="text-display font-bold text-white mb-6">
              Arrêtez de naviguer à vue.
              <br />
              <span className="text-accent">Passez à la stratégie.</span>
            </h1>
            <p className="text-body-lg text-white/50 max-w-3xl mx-auto">
              Beaucoup d'entrepreneurs échouent par manque de clarté. Chez Sen'Optima, nous ne vendons pas de magie, mais une méthode.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-section relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card rounded-xl p-8 md:p-10 text-center">
              <h2 className="text-title text-white mb-6">
                Pourquoi payer pour un diagnostic ?
              </h2>
              <p className="text-body text-white/50 mb-8 max-w-2xl mx-auto">
                Un médecin n'opère jamais sans radio. Un architecte ne construit pas sans étude de sol. 
                <span className="text-white/70"> Votre entreprise mérite la même rigueur.</span>
              </p>

              <div className="inline-block px-6 py-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-body text-white/70">
                  Le coût du diagnostic est <span className="text-accent">100% DÉDUIT</span> si vous signez l'accompagnement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-section-lg relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-headline text-white mb-4">
              Choisissez votre <span className="text-accent">diagnostic</span>
            </h2>
            <p className="text-body text-white/50">
              Trois formules adaptées à votre stade de développement
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {diagnostics.map((diagnostic) => (
              <motion.article
                key={diagnostic.name}
                variants={cardVariants}
                className="relative flex flex-col p-8 rounded-xl glass-card"
              >
                {/* Popular Badge */}
                {diagnostic.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-accent/20 text-accent text-caption uppercase tracking-widest rounded-full border border-accent/30">
                      Recommandé
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <diagnostic.icon className="w-6 h-6 text-accent" />
                </div>

                <div className="mb-4">
                  <h3 className="text-title text-white">
                    {diagnostic.name}
                  </h3>
                  <span className="text-caption text-white/40 uppercase tracking-widest">{diagnostic.subtitle}</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl text-accent font-bold">
                    {diagnostic.price}
                  </span>
                  <span className="text-white/40 ml-2 text-sm">FCFA</span>
                </div>

                {/* Target */}
                <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/5">
                  <p className="text-sm text-white/60">
                    <span className="text-white/40 text-caption uppercase tracking-widest block mb-1">Pour qui ?</span>
                    {diagnostic.targetAudience}
                  </p>
                </div>

                {/* What we analyze */}
                <div className="mb-6">
                  <p className="text-caption text-white/40 uppercase tracking-widest mb-3">Ce qu'on analyse :</p>
                  <ul className="space-y-2">
                    {diagnostic.analyses.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-white/30 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-white/60">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverable */}
                <div className="mb-8 p-4 rounded-lg bg-white/5 border border-white/5">
                  <p className="text-sm text-white/60">
                    <span className="text-white/40 text-caption uppercase tracking-widest block mb-1">Livrable</span>
                    {diagnostic.deliverable}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    className={`w-full border-white/10 text-white/60 hover:border-accent hover:text-accent ${
                      diagnostic.popular ? "border-accent/30 text-accent" : ""
                    }`}
                    onClick={() => handleStartDiagnostic(diagnostic)}
                  >
                    {diagnostic.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 relative">
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
                  <div className="relative z-10 w-20 h-20 mx-auto mb-4 rounded-2xl glass-card flex items-center justify-center border-2 border-accent/30">
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
      <section className="py-16 md:py-20 relative">
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
      <section className="py-16 md:py-24 relative">
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
    </>
  );
};

export default DiagnosticsPage;
