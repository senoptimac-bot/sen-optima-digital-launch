import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, ChevronDown, Sparkles, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const ContactForm = memo(() => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="relative p-8 card-cream lg:col-span-1 lg:row-span-2 flex flex-col overflow-hidden"
    >
      {/* Badge Devis gratuit */}
      <div className="absolute top-4 right-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
          <Trophy className="w-4 h-4 text-accent" />
          <span className="text-xs text-accent font-medium">Devis gratuit</span>
        </div>
      </div>

      <div className="icon-circle mb-6">
        <Sparkles className="w-7 h-7 text-accent" />
      </div>

      <span className="text-xs text-accent uppercase tracking-widest mb-2 block">Réponse sous 24h</span>

      <h3 className="text-xl font-heading font-bold text-foreground mb-3">
        L'Option Projet
      </h3>

      <p className="text-muted-foreground mb-6 leading-relaxed">
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
              className="icon-circle w-20 h-20 mb-6"
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
              className="rounded-full"
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
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3.5 rounded-xl bg-secondary/50 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
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
                          setFormData((prev) => ({ ...prev, subject: option.value }));
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
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
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
  );
});

ContactForm.displayName = "ContactForm";

export default ContactForm;
