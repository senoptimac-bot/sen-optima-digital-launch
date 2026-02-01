import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Loader2, 
  ChevronDown,
  MapPin,
  ExternalLink,
  Sparkles,
  Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppSounds } from "@/hooks/useAppSounds";
import { useToast } from "@/hooks/use-toast";

const subjectOptions = [
  { value: "devis", label: "Demande de devis" },
  { value: "site-web", label: "Site Web / Application" },
  { value: "strategie", label: "Stratégie Digitale" },
  { value: "organisation", label: "Organisation & Process" },
  { value: "formation", label: "Formation" },
  { value: "autre", label: "Autre" },
];

const faqItems = [
  {
    question: "Quels sont vos délais de réponse ?",
    answer: "Immédiat sur WhatsApp, 24h max par email."
  },
  {
    question: "Le devis est-il gratuit ?",
    answer: "Oui, le devis est gratuit. Le Diagnostic approfondi est payant (mais remboursé si projet signé)."
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);
  const { playSuccess, playClick } = useAppSounds();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    playClick();

    const selectedSubjectLabel = subjectOptions.find(
      (opt) => opt.value === formData.subject
    )?.label || formData.subject;

    const { sendContactEmail } = await import("@/lib/emailService");
    
    const result = await sendContactEmail({
      name: formData.name,
      email: formData.email,
      subject: selectedSubjectLabel,
      message: formData.message,
    });

    if (result.success) {
      playSuccess();
      setIsSuccess(true);
      toast({
        title: "Message envoyé avec succès !",
        description: "Nous vous répondons sous 24h par email.",
      });
    } else {
      toast({
        title: "Erreur d'envoi",
        description: result.error,
        variant: "destructive",
      });
    }
    
    setIsSubmitting(false);
  };

  const selectedSubject = subjectOptions.find((opt) => opt.value === formData.subject);

  const whatsappLink = "https://wa.me/221781926969?text=Bonjour%20SenOptima,%20j'aimerais%20discuter%20d'un%20projet.";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Grand+Mbao+Cite+Baobab+Dakar+Senegal";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-secondary/30 rounded-bl-[100px] hidden lg:block" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="badge-accent mb-6">
              Contact
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Parlons de votre <span className="italic text-accent">avenir</span>.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Vous avez un projet ? Une question ? Ou simplement besoin de clarté ? 
              Nous sommes là pour vous répondre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guide d'Orientation */}
      <section className="py-16 md:py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <span className="badge-accent mb-4">
              Options
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Comment souhaitez-vous nous <span className="italic text-accent">contacter</span> ?
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Choisissez le canal qui vous convient le mieux.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
            {/* Carte A : WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border/50 flex flex-col group hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              
              <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Réponse instantanée</span>
              
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                L'Option Rapide
              </h3>
              
              <p className="text-muted-foreground mb-6 flex-grow">
                Besoin d'une réponse rapide ou d'une info simple ? Écrivez-nous directement sur WhatsApp.
              </p>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="inline-flex items-center justify-center gap-3 w-full py-3 rounded-full bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 hover:border-accent/30 transition-all duration-300 font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                Ouvrir WhatsApp
              </a>
            </motion.div>

            {/* Carte B : Formulaire */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-card border border-border/50 lg:col-span-1 lg:row-span-2 flex flex-col relative overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <Trophy className="w-4 h-4 text-accent" />
                  <span className="text-xs text-accent font-medium">Devis gratuit</span>
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              
              <span className="text-xs text-accent uppercase tracking-widest mb-2">Réponse sous 24h</span>
              
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                L'Option Projet
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Vous voulez détailler votre besoin ou demander un devis ? Remplissez ce formulaire.
              </p>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex-grow flex flex-col items-center justify-center text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, delay: 0.1 }}
                      className="w-20 h-20 mb-6 rounded-full bg-accent/20 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-10 h-10 text-accent" />
                    </motion.div>
                    <h4 className="text-xl font-heading font-bold text-foreground mb-2">
                      Bien reçu !
                    </h4>
                    <p className="text-muted-foreground mb-6">
                      Nous vous répondons sous 24h par email.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                    >
                      Envoyer un autre message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 flex-grow flex flex-col"
                  >
                    <input
                      type="text"
                      placeholder="Nom Complet"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                    
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />

                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setSelectOpen(!selectOpen)}
                        className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-left text-foreground"
                      >
                        {selectedSubject ? (
                          selectedSubject.label
                        ) : (
                          <span className="text-muted-foreground">Sujet</span>
                        )}
                      </button>
                      <ChevronDown 
                        className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-transform duration-200 ${selectOpen ? 'rotate-180' : ''}`} 
                      />
                      
                      <AnimatePresence>
                        {selectOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 right-0 mt-2 py-2 rounded-xl bg-card border border-border shadow-xl z-50"
                          >
                            {subjectOptions.map((option) => (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, subject: option.value });
                                  setSelectOpen(false);
                                }}
                                className="w-full px-4 py-3 text-left hover:bg-accent/10 transition-colors text-foreground"
                              >
                                {option.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <textarea
                      placeholder="Votre message..."
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none flex-grow"
                    />

                    <Button
                      type="submit"
                      className="w-full h-12 text-base gap-2 mt-auto rounded-full bg-foreground text-primary hover:bg-foreground/90"
                      disabled={isSubmitting}
                      onClick={() => {
                        if (!isSubmitting) playClick();
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Carte C : Rencontre */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-2xl bg-card border border-border/50 flex flex-col hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-muted-foreground" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                L'Option Rencontre
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Vous préférez discuter les yeux dans les yeux ? Venez nous rencontrer à notre QG.
              </p>

              <p className="text-muted-foreground mb-6">
                <span className="text-foreground/70">Adresse :</span><br />
                Grand Mbao Cité Baobab, Dakar
              </p>
              
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full border border-border text-foreground/60 hover:border-accent hover:text-accent transition-all duration-300 mt-auto"
              >
                Nous trouver sur Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="container">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="badge-accent mb-4">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                Questions fréquentes
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-card border border-border/50 p-6 md:p-8"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5">
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
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
