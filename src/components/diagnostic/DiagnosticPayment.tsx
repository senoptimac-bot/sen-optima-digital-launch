import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Clock, CheckCircle, ExternalLink, Sparkles, ArrowRight } from "lucide-react";

// Lien de paiement Wave Business avec montant pré-rempli
const WAVE_PAYMENT_LINK = "https://pay.wave.com/m/M_sn_vhBkBcF0skpc/c/sn/?amount=10000";

interface DiagnosticPaymentProps {
  onPaymentComplete: () => void;
}

type PaymentStep = "choice" | "confirmation";

/**
 * Écran de paiement Wave
 * Flow: Choix → Redirection externe → Confirmation déclarative
 */
const DiagnosticPayment = memo(({ onPaymentComplete }: DiagnosticPaymentProps) => {
  const [step, setStep] = useState<PaymentStep>("choice");

  const handlePaymentChoice = () => {
    window.open(WAVE_PAYMENT_LINK, "_blank");
    setStep("confirmation");
  };

  const handlePaymentConfirmation = () => {
    onPaymentComplete();
  };

  const features = [
    "30 questions adaptées au contexte sénégalais",
    "Analyse détaillée de votre maturité business",
    "Score par pilier stratégique",
    "Rapport personnalisé sous 24h"
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24">
      <AnimatePresence mode="wait">
        {/* ÉTAPE 1 : Choix du paiement */}
        {step === "choice" && (
          <motion.div
            key="choice"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-xl"
          >
            {/* Badge offre */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-subheading font-medium">
                  Offre de lancement limitée
                </span>
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-10"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 leading-tight">
                Investissez dans la 
                <span className="text-accent italic"> clarté</span>
              </h1>
              <p className="text-muted-foreground font-subheading text-lg max-w-md mx-auto">
                Un diagnostic complet pour structurer votre croissance
              </p>
            </motion.div>

            {/* Card principale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border/50"
            >
              {/* Header avec prix */}
              <div className="bg-primary/5 px-6 py-8 md:px-8 md:py-10 text-center border-b border-border/30">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <span className="text-xl text-muted-foreground/70 line-through font-subheading">
                    50 000 FCFA
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold">
                    -80%
                  </span>
                </div>
                <div className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-2">
                  10 000
                  <span className="text-2xl md:text-3xl ml-2 text-muted-foreground font-normal">FCFA</span>
                </div>
                <p className="text-sm text-muted-foreground font-subheading">
                  Paiement unique • Accès immédiat au diagnostic
                </p>
              </div>

              {/* Features */}
              <div className="px-6 py-6 md:px-8 md:py-8">
                <p className="text-sm font-subheading text-muted-foreground mb-4 uppercase tracking-wider">
                  Ce que vous obtenez
                </p>
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-accent" />
                      </div>
                      <span className="text-foreground font-body">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bouton Wave */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePaymentChoice}
                  className="w-full p-5 rounded-xl bg-[#1DC4FF] hover:bg-[#1DC4FF]/90 transition-all flex items-center justify-center gap-4 shadow-lg shadow-[#1DC4FF]/20 group"
                >
                  <img 
                    src="/wave-logo.png" 
                    alt="Wave" 
                    className="h-7 w-auto object-contain brightness-0 invert"
                  />
                  <span className="font-heading font-bold text-white text-lg">
                    Payer avec Wave
                  </span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Note Orange Money */}
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Orange Money disponible prochainement
                </p>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-8 mt-8 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-subheading">Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm font-subheading">Accès immédiat</span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* ÉTAPE 2 : Confirmation */}
        {step === "confirmation" && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-lg text-center"
          >
            {/* Icon Wave */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 12, delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-[#1DC4FF]/10 border-2 border-[#1DC4FF]/30 flex items-center justify-center shadow-lg shadow-[#1DC4FF]/10"
            >
              <img 
                src="/wave-logo.png" 
                alt="Wave" 
                className="h-12 w-auto object-contain"
              />
            </motion.div>

            {/* Titre */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4"
            >
              Avez-vous effectué le paiement ?
            </motion.h1>

            {/* Message */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground font-subheading mb-10 max-w-sm mx-auto"
            >
              Confirmez votre paiement pour accéder immédiatement au diagnostic
            </motion.p>

            {/* Bouton confirmation */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePaymentConfirmation}
              className="w-full max-w-sm mx-auto p-5 rounded-xl bg-foreground text-background font-heading font-bold text-lg flex items-center justify-center gap-3 transition-all hover:bg-foreground/90 shadow-lg"
            >
              <CheckCircle className="w-5 h-5" />
              J'ai effectué le paiement
            </motion.button>

            {/* Lien retour */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              onClick={() => setStep("choice")}
              className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors font-subheading"
            >
              ← Retour au paiement
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

DiagnosticPayment.displayName = "DiagnosticPayment";

export default DiagnosticPayment;
