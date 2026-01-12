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
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs.config";

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

    try {
      // Trouver le label du sujet sélectionné
      const selectedSubjectLabel = subjectOptions.find(
        (opt) => opt.value === formData.subject
      )?.label || formData.subject;

      // Préparer les données pour EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: selectedSubjectLabel,
        message: formData.message,
      };

      // Debug : vérifier ce qui est envoyé
      console.log("📧 EmailJS - Envoi formulaire contact", {
        serviceId: EMAILJS_CONFIG.SERVICE_ID,
        templateId: EMAILJS_CONFIG.TEMPLATES.CONTACT,
        params: templateParams,
      });

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATES.CONTACT,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      playSuccess();
      setIsSuccess(true);
      toast({
        title: "Message envoyé avec succès !",
        description: "Nous vous répondons sous 24h par email.",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      const emailError = error as { status?: number; text?: string };
      console.error("Error details:", {
        status: emailError?.status,
        text: emailError?.text,
        serviceId: EMAILJS_CONFIG.SERVICE_ID,
        templateId: EMAILJS_CONFIG.TEMPLATES.CONTACT,
      });
      
      let errorMessage = "Une erreur s'est produite. Veuillez réessayer.";
      
      if (emailError?.status === 412) {
        errorMessage = "Erreur 412 : Vérifiez que localhost est autorisé dans EmailJS (Settings > Authorized Domains) ou testez en production.";
      } else if (emailError?.status === 400) {
        errorMessage = "Erreur : Vérifiez que le template EmailJS correspond aux variables envoyées.";
      }
      
      toast({
        title: "Erreur d'envoi",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedSubject = subjectOptions.find((opt) => opt.value === formData.subject);

  const whatsappLink = "https://wa.me/221781926969?text=Bonjour%20SenOptima,%20j'aimerais%20discuter%20d'un%20projet.";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Grand+Mbao+Cite+Baobab+Dakar+Senegal";

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-display font-bold text-white mb-6">
              Parlons de votre <span className="text-accent">avenir</span>.
            </h1>
            <p className="text-body-lg text-white/50 max-w-2xl mx-auto">
              Vous avez un projet ? Une question ? Ou simplement besoin de clarté ? 
              Nous sommes là pour vous répondre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guide d'Orientation */}
      <section className="py-section-lg relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-headline text-white mb-4">
              Comment souhaitez-vous nous <span className="text-accent">contacter</span> ?
            </h2>
            <p className="text-body text-white/50 max-w-xl mx-auto">
              Choisissez le canal qui vous convient le mieux.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Carte A : WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-xl glass-card flex flex-col group hover:border-green-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              
              <span className="text-caption text-white/40 uppercase tracking-widest mb-2">Réponse instantanée</span>
              
              <h3 className="text-title text-white mb-3">
                L'Option Rapide
              </h3>
              
              <p className="text-body text-white/50 mb-6 flex-grow">
                Besoin d'une réponse rapide ou d'une info simple ? Écrivez-nous directement sur WhatsApp.
              </p>
              
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="inline-flex items-center justify-center gap-3 w-full py-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 hover:border-green-500/30 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Ouvrir WhatsApp
              </a>
            </motion.div>

            {/* Carte B : Formulaire - with Success Gold icon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-xl glass-card lg:col-span-1 lg:row-span-2 flex flex-col relative overflow-hidden"
            >
              {/* Gold success indicator near form */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                  <Trophy className="w-4 h-4 icon-success-animated" />
                  <span className="text-xs text-accent font-medium">Devis gratuit</span>
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 icon-success-animated" />
              </div>
              
              <span className="text-caption text-accent/70 uppercase tracking-widest mb-2">Réponse sous 24h</span>
              
              <h3 className="text-title text-white mb-3">
                L'Option Projet
              </h3>
              
              <p className="text-body text-white/50 mb-6">
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
                      className="w-20 h-20 mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
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
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                    />
                    
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
                    />

                    {/* Custom Select */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setSelectOpen(!selectOpen)}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-left text-foreground backdrop-blur-sm"
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
                            className="absolute top-full left-0 right-0 mt-2 py-2 rounded-xl bg-card/95 backdrop-blur-xl border border-white/10 shadow-2xl z-50"
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
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none backdrop-blur-sm flex-grow"
                    />

                    <Button
                      type="submit"
                      variant="cta"
                      className="w-full h-12 text-base gap-2 mt-auto"
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
              className="p-8 rounded-xl glass-card flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-white/50" />
              </div>
              
              <h3 className="text-title text-white mb-3">
                L'Option Rencontre
              </h3>
              
              <p className="text-body text-white/50 mb-6">
                Vous préférez discuter les yeux dans les yeux ? Venez nous rencontrer à notre QG.
              </p>

              <p className="text-body text-white/40 mb-6">
                <span className="text-white/60">Adresse :</span><br />
                Grand Mbao Cité Baobab, Dakar
              </p>
              
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-white/10 text-white/60 hover:border-white/20 hover:text-white/80 transition-all duration-300 mt-auto"
              >
                Nous trouver sur Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section relative">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="text-caption text-white/40 uppercase tracking-widest">
                Questions fréquentes
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-xl glass-card p-6 md:p-8"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-white/10"
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
    </>
  );
};

export default ContactPage;
