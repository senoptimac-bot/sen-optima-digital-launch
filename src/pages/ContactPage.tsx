import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Loader2, 
  ChevronDown,
  MapPin,
  ExternalLink,
  Clock,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAppSounds } from "@/hooks/useAppSounds";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Play success sound on form validation
    playSuccess();
  };

  const selectedSubject = subjectOptions.find((opt) => opt.value === formData.subject);

  const whatsappLink = "https://wa.me/221781926969?text=Bonjour%20SenOptima,%20j'aimerais%20discuter%20d'un%20projet.";
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Grand+Mbao+Cite+Baobab+Dakar+Senegal";

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden bg-gradient-hero">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Parlons de votre <span className="text-gradient-gold">avenir</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vous avez un projet ? Une question ? Ou simplement besoin de clarté ? 
              Nous sommes là pour vous répondre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guide d'Orientation - Bento Grid */}
      <section className="py-20 md:py-28 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Comment souhaitez-vous nous <span className="text-gradient-gold">contacter</span> ?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
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
              className="p-8 rounded-3xl glass-premium flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">Réponse instantanée</span>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
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
                className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/25"
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
              className="p-8 rounded-3xl glass-premium lg:col-span-1 lg:row-span-2 flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Send className="w-8 h-8 text-accent" />
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">Réponse sous 24h</span>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
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
              className="p-8 rounded-3xl glass-premium flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                L'Option Rencontre
              </h3>
              
              <p className="text-muted-foreground mb-4">
                Vous préférez discuter les yeux dans les yeux ? Venez nous rencontrer à notre QG.
              </p>

              {/* Stylized Map */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-[#0A1A3A]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(212,167,59,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(212,167,59,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="text-xs text-accent font-medium px-2 py-1 rounded-full bg-accent/10">
                        Grand Mbao
                      </span>
                    </div>
                  </div>
                </div>
                {/* Abstract roads */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 100">
                  <path d="M0 50 L80 50 L100 30 L200 30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent" />
                  <path d="M0 70 L60 70 L100 50 L200 50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent" />
                  <path d="M100 0 L100 100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent" />
                </svg>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                <span className="font-semibold text-foreground">Adresse :</span><br />
                Grand Mbao Cité Baobab, Dakar
              </p>
              
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-accent/50 text-accent hover:bg-accent/10 font-medium transition-all duration-300 mt-auto"
              >
                Nous trouver sur Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 relative">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-accent mb-4">
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Avant de nous contacter...</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl glass-premium p-6 md:p-8"
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
