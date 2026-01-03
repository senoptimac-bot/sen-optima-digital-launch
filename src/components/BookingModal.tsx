import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, User, Mail, ChevronDown, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAppSounds } from "@/hooks/useAppSounds";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs.config";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const needOptions = [
  { value: "site-web", label: "Site Web" },
  { value: "strategie", label: "Stratégie Digitale" },
  { value: "formation", label: "Formation" },
  { value: "autre", label: "Autre" },
];

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    need: "",
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
      // Trouver le label du besoin sélectionné
      const selectedNeedLabel = needOptions.find(
        (opt) => opt.value === formData.need
      )?.label || formData.need;

      // Préparer les données pour EmailJS
      const templateParams = {
        name: formData.name,
        whatsapp: formData.whatsapp,
        need: selectedNeedLabel,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATES.BOOKING_AND_AUDIT,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      playSuccess();
      setIsSuccess(true);
      toast({
        title: "Demande reçue !",
        description: "Un consultant Sen'Optima vous recontactera sous 24h.",
      });

      // Reset and close after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", whatsapp: "", need: "" });
        onOpenChange(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      const emailError = error as { status?: number; text?: string };
      let errorMessage = "Une erreur s'est produite. Veuillez réessayer.";
      
      if (emailError?.status === 412) {
        errorMessage = "Erreur 412 : Vérifiez que localhost est autorisé dans EmailJS ou testez en production.";
      }
      
      toast({
        title: "Erreur d'envoi",
        description: errorMessage,
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const selectedNeed = needOptions.find((opt) => opt.value === formData.need);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md glass-premium border-accent/20 p-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 15, delay: 0.1 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
              >
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-heading font-bold text-foreground mb-2"
              >
                Bien reçu !
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground"
              >
                Un consultant Sen'Optima vous recontactera sous 24h.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-xl font-heading text-center">
                  <span className="text-gradient-gold">Réservez</span> votre appel gratuit
                </DialogTitle>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Remplissez ce formulaire et nous vous rappelons rapidement.
                </p>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Prénom & Nom"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 dark:bg-white/5 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* WhatsApp */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    placeholder="Numéro WhatsApp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 dark:bg-white/5 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                {/* Need - Custom Select */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none z-10" />
                  <button
                    type="button"
                    onClick={() => setSelectOpen(!selectOpen)}
                    className="w-full pl-12 pr-10 py-3 rounded-xl bg-secondary/50 dark:bg-white/5 border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-left text-foreground"
                  >
                    {selectedNeed ? selectedNeed.label : <span className="text-muted-foreground">Type de besoin</span>}
                  </button>
                  <ChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-transform ${selectOpen ? 'rotate-180' : ''}`} />
                  
                  <AnimatePresence>
                    {selectOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 py-2 rounded-xl bg-card border border-border shadow-2xl z-50 max-h-60 overflow-y-auto overscroll-contain touch-pan-y"
                        style={{ WebkitOverflowScrolling: 'touch' }}
                      >
                        {needOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, need: option.value });
                              setSelectOpen(false);
                            }}
                            className="w-full px-4 py-2.5 text-left hover:bg-accent/10 active:bg-accent/20 transition-colors text-foreground"
                          >
                            {option.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="cta"
                  className="w-full h-12 text-base gap-2 mt-6"
                  disabled={isSubmitting || !formData.name || !formData.whatsapp || !formData.need}
                  onClick={() => {
                    if (!isSubmitting && formData.name && formData.whatsapp && formData.need) {
                      playClick();
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Être rappelé gratuitement"
                  )}
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
