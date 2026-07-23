import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, MapPin, ExternalLink, Calendar, Clock, ShieldCheck, ArrowRight, Inbox, Search, Compass, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import contactHeroImage from "@/assets/contact-hero.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import { useAppSounds } from "@/hooks/useAppSounds";
import BackButton from "@/components/BackButton";
import ContactForm from "@/components/ContactForm";
import SiteImage from "@/components/SiteImage";

const faqItems = [
  {
    question: "Le premier rendez-vous est-il gratuit ?",
    answer: "Oui. Le Rendez-vous Découverte est gratuit et dure 20 à 30 minutes. Il sert uniquement à comprendre votre projet et à vous orienter vers le parcours adapté.",
  },
  {
    question: "Proposez-vous des consultations en ligne ?",
    answer: "Oui, la majorité de nos échanges se font par visioconférence ou par WhatsApp. Une rencontre en présentiel à Dakar est également possible sur rendez-vous.",
  },
  {
    question: "Garantissez-vous un visa ?",
    answer: "Non. Aucun cabinet sérieux ne peut garantir une décision qui appartient aux autorités compétentes. Nous nous engageons sur la qualité de votre préparation et de votre dossier, pas sur une décision qui ne dépend pas de nous.",
  },
  {
    question: "Travaillez-vous uniquement sur le Canada ?",
    answer: "Non. Nous accompagnons des projets vers plusieurs destinations (France, Belgique, Luxembourg, Norvège, Royaume-Uni, Canada, entre autres), selon la cohérence de votre profil et de votre objectif.",
  },
  {
    question: "Puis-je suivre une formation avant un accompagnement ?",
    answer: "Oui. Nos programmes Sen'Optima Academy (Business Launch et Profil International) sont accessibles indépendamment d'un accompagnement personnalisé, et peuvent constituer une première étape.",
  },
  {
    question: "Quels documents dois-je préparer ?",
    answer: "Cela dépend de votre projet et de votre situation. C'est justement l'objet du Diagnostic : identifier les documents et justificatifs pertinents pour votre dossier, sans raccourci ni document falsifié.",
  },
  {
    question: "Combien de temps dure un accompagnement ?",
    answer: "La durée varie selon la complexité du projet — de quelques semaines à plusieurs mois. Elle est évaluée avec vous après le Diagnostic, jamais promise à l'avance de façon générique.",
  },
  {
    question: "Comment réserver un rendez-vous ?",
    answer: "En cliquant sur « Réserver un rendez-vous » sur cette page, ou en nous écrivant directement sur WhatsApp. Nous vous proposons ensuite un créneau disponible.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Les paiements se font par Wave, Orange Money ou virement bancaire. Les modalités précises vous sont communiquées après confirmation de votre rendez-vous ou de votre diagnostic.",
  },
  {
    question: "Puis-je venir sans rendez-vous ?",
    answer: "Nous recevons uniquement sur rendez-vous, afin de consacrer à chaque personne le temps et l'attention nécessaires. Réservez un créneau, nous nous adaptons à vos disponibilités.",
  },
];

const processSteps = [
  { icon: Inbox, title: "Nous recevons votre demande" },
  { icon: Search, title: "Nous analysons votre besoin" },
  { icon: Compass, title: "Nous vous orientons vers l'accompagnement adapté" },
  { icon: CalendarCheck, title: "Nous planifions votre rendez-vous" },
];

const whyChooseUs = [
  "Conseils personnalisés",
  "Accompagnement transparent",
  "Informations vérifiées",
  "Aucune promesse irréaliste",
];

const commitments = [
  "Réponse rapide",
  "Informations vérifiées",
  "Confidentialité garantie",
  "Aucun faux espoir",
];

const ContactPage = () => {
  const seo = SEO_CONFIG.contact;
  const { playClick } = useAppSounds();

  const whatsappLink = "https://wa.me/221781926969?text=Bonjour%20SenOptima,%20j'aimerais%20discuter%20d'un%20projet.";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Grand+Mbao+Cite+Baobab+Dakar+Senegal";
  const mapsEmbedSrc = "https://www.google.com/maps?q=Grand+Mbao+Cite+Baobab+Dakar+Senegal&output=embed";

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} canonicalPath={seo.canonicalPath} keywords={seo.keywords} />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-background" />

          <div className="container relative z-10">
            <BackButton />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="badge-accent mb-6">Contact</span>
                <h1 className="text-headline text-foreground mb-6">
                  Un échange, et vous saurez <span className="italic text-accent">où vous en êtes.</span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Un échange suffit pour savoir si votre projet est réaliste et quelle est la meilleure prochaine
                  étape.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -top-6 -right-6 w-full h-full rounded-3xl bg-accent/10 border border-accent/20 hidden md:block" />
                <div className="absolute -bottom-4 -left-4 w-3/4 h-3/4 rounded-3xl bg-primary/5 border border-primary/10 hidden md:block" />

                <div className="relative rounded-3xl border-2 border-accent/40 overflow-hidden">
                  <SiteImage
                    src={contactHeroImage}
                    alt="Consultante Sen'Optima Consulting, prête à échanger avec vous"
                    className="relative w-full aspect-[4/3] object-cover object-top"
                    priority
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-4 -right-2 md:top-6 md:-right-8 z-20"
                >
                  <div className="card-cream px-4 py-3 shadow-lg backdrop-blur-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">WhatsApp</p>
                      <p className="text-sm font-heading font-semibold text-foreground">Moins de 15 min</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -bottom-4 -left-2 md:bottom-8 md:-left-8 z-20"
                >
                  <div className="card-cream px-4 py-3 shadow-lg backdrop-blur-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Devis</p>
                      <p className="text-sm font-heading font-semibold text-foreground">100% Gratuit</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Options de contact */}
        <section className="py-16 md:py-24 relative">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 md:mb-16">
              <span className="badge-accent mb-4">Options</span>
              <h2 className="text-headline text-foreground">
                Comment souhaitez-vous nous <span className="italic text-accent">contacter</span> ?
              </h2>
              <p className="text-muted-foreground mt-4 max-w-xl">Choisissez le canal qui vous convient le mieux.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
              {/* Carte A : Rendez-vous — mise en avant (chemin recommandé, cohérent avec le tunnel du reste du site) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02, y: -6 }}
                className="relative p-8 card-cream group border-2 border-accent/40 transition-shadow duration-250 hover:shadow-xl flex flex-col"
              >
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1.5 rounded-full bg-accent/15 border border-accent/30">
                    <span className="text-xs text-accent font-semibold">Recommandé</span>
                  </div>
                </div>

                <div className="icon-circle mb-6 group-hover:scale-110 transition-transform duration-250">
                  <Calendar className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-title text-foreground mb-3 group-hover:text-accent transition-colors duration-250">
                  Prendre rendez-vous
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Un échange de 20 à 30 minutes pour comprendre votre projet et vous orienter, sans engagement.
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 mb-6 w-fit">
                  <Clock className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs text-accent font-medium">Sur réservation uniquement</span>
                </div>

                <Button asChild variant="hero" size="lg" className="w-full mt-auto">
                  <Link to="/rendez-vous-decouverte" onClick={() => playClick()}>
                    Réserver un rendez-vous
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Carte B : WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02, y: -6 }}
                className="relative p-8 card-cream group transition-shadow duration-250 hover:shadow-xl flex flex-col"
              >
                <div className="icon-circle mb-6 group-hover:scale-110 transition-transform duration-250">
                  <MessageCircle className="w-7 h-7 text-accent group-hover:rotate-6 transition-transform duration-250" />
                </div>

                <h3 className="text-title text-foreground mb-3 group-hover:text-accent transition-colors duration-250">
                  WhatsApp
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Besoin d'une réponse rapide ou d'une info simple ? Écrivez-nous directement.
                </p>

                <div className="mt-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/20 mb-6">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span className="text-xs text-accent font-medium">Réponse en moins de 15 minutes</span>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playClick()}
                    className="inline-flex items-center justify-center gap-3 w-full py-3 rounded-full bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 hover:border-accent/30 transition-all duration-250 font-medium"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Ouvrir WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Carte C : Formulaire (composant isolé pour éviter re-renders) */}
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Que se passe-t-il après votre demande ? */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 max-w-2xl">
              <span className="badge-accent mb-4">Notre processus</span>
              <h2 className="text-headline text-foreground">
                Que se passe-t-il <span className="italic text-accent">après votre demande ?</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-6 card-cream text-center"
                >
                  <span className="text-xs text-accent/50 font-bold">{String(index + 1).padStart(2, "0")}</span>
                  <div className="icon-circle mx-auto my-4">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{step.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Nous rencontrer */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 max-w-2xl">
              <span className="badge-accent mb-4">Nous rencontrer</span>
              <h2 className="text-headline text-foreground">
                Nos bureaux <span className="italic text-accent">à Dakar.</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden border-2 border-accent/30 min-h-[320px]"
              >
                <iframe
                  src={mapsEmbedSrc}
                  title="Localisation de Sen'Optima Consulting à Dakar"
                  className="w-full h-full min-h-[320px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 card-cream flex flex-col"
              >
                <div className="icon-circle mb-6">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-title text-foreground mb-2">Adresse</h3>
                <p className="text-muted-foreground mb-8">Grand Mbao, Cité Baobab, Dakar</p>

                <h3 className="text-title text-foreground mb-3">Disponibilités</h3>
                <div className="space-y-2 mb-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Lundi – Vendredi</span>
                    <span className="text-foreground font-medium">09h00 – 18h00</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Samedi</span>
                    <span className="text-foreground font-medium">09h00 – 13h00</span>
                  </div>
                </div>

                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick()}
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 rounded-full border border-border text-foreground/60 hover:border-accent hover:text-accent transition-all duration-250"
                >
                  Ouvrir dans Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 max-w-2xl">
              <span className="badge-accent mb-4">Pourquoi Sen'Optima</span>
              <h2 className="text-headline text-foreground">
                Ce que nos clients <span className="italic text-accent">peuvent attendre.</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 p-5 card-cream"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
                <span className="badge-accent mb-4">FAQ</span>
                <h2 className="text-headline text-foreground">Questions fréquentes</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card-cream p-6 md:p-8"
              >
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-border">
                      <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5 transition-colors duration-250">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Renforcé */}
        <section className="py-20 md:py-28 bg-secondary/20">
          <div className="container max-w-2xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-headline text-foreground mb-4 leading-tight">
                Votre projet mérite plus que des approximations.
                <span className="block text-accent mt-1">Échangeons ensemble.</span>
              </h2>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="group inline-flex items-center gap-3 mt-6 h-14 px-8 rounded-full bg-foreground text-primary font-medium hover:bg-foreground/90 transition-all duration-250"
              >
                Discuter maintenant
                <span className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-250">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Nos engagements */}
        <section className="py-16 md:py-20">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center mb-10">
              <span className="badge-accent mb-4">Nos engagements</span>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {commitments.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 p-5 rounded-2xl border border-accent/20 bg-accent/5"
                >
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
