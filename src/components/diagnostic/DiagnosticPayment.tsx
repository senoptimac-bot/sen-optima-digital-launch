import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Clock, CheckCircle, ExternalLink } from "lucide-react";

// Liens de paiement externes (à remplacer par les vrais liens Wave/OM Business)
const PAYMENT_LINKS = {
  wave: "https://pay.wave.com/m/M_sn_vhBkBcF0skpc/c/sn/?amount=10000", // Lien Wave Business avec montant pré-rempli
  orangeMoney: "https://qrco.de/bfYFGN" // À remplacer par le lien Orange Money officiel
};

interface DiagnosticPaymentProps {
  onPaymentComplete: () => void;
}

type PaymentStep = "choice" | "confirmation";

/**
 * Écran de paiement Wave / Orange Money
 * Flow: Choix → Redirection externe → Confirmation déclarative
 * AUCUNE vérification automatique - validation humaine différée
 */
const DiagnosticPayment = memo(({ onPaymentComplete }: DiagnosticPaymentProps) => {
  const [step, setStep] = useState<PaymentStep>("choice");
  const [selectedMethod, setSelectedMethod] = useState<"wave" | "orangeMoney" | null>(null);

  // Redirection vers le lien de paiement externe
  const handlePaymentChoice = (method: "wave" | "orangeMoney") => {
    setSelectedMethod(method);
    
    // Ouvrir le lien de paiement dans un nouvel onglet
    window.open(PAYMENT_LINKS[method], "_blank");
    
    // Passer à l'écran de confirmation
    setStep("confirmation");
  };

  // Confirmation déclarative - accès au diagnostic
  const handlePaymentConfirmation = () => {
    onPaymentComplete();
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <AnimatePresence mode="wait">
        {/* ÉTAPE 1 : Choix du moyen de paiement */}
        {step === "choice" && (
          <motion.div
            key="choice"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-lg"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-subheading mb-4">
                Offre de lancement
              </span>
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Choisissez votre moyen de paiement
              </h1>
              <p className="text-muted-foreground font-subheading">
                Un investissement pour structurer votre business
              </p>
            </div>

            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 mb-6"
            >
              {/* Price */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-muted-foreground line-through">
                    50 000 FCFA
                  </span>
                  <span className="px-2 py-1 rounded bg-accent/20 text-accent text-xs font-bold">
                    -80%
                  </span>
                </div>
                <div className="text-5xl font-heading font-bold text-gradient-gold">
                  10 000 FCFA
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Paiement unique • Accès immédiat
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {[
                  "30 questions adaptées au contexte sénégalais",
                  "Analyse détaillée de votre maturité business",
                  "Score par pilier stratégique",
                  "Rapport personnalisé sous 24h"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Payment Button - Wave uniquement */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePaymentChoice("wave")}
                  className="w-full p-4 rounded-xl bg-[#1DC4FF]/10 border border-[#1DC4FF]/30 hover:bg-[#1DC4FF]/20 transition-all flex items-center justify-center gap-4"
                >
                  <img 
                    src="/wave-logo.png" 
                    alt="Wave" 
                    className="h-8 w-auto object-contain"
                  />
                  <span className="font-heading font-semibold text-foreground">
                    Payer avec Wave
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </motion.button>

                {/* Info - Orange Money bientôt disponible */}
                <p className="text-center text-sm text-muted-foreground">
                  Orange Money sera disponible prochainement
                </p>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2 text-xs">
                <Shield className="w-4 h-4" />
                <span>Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Clock className="w-4 h-4" />
                <span>Accès immédiat</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* ÉTAPE 2 : Confirmation déclarative */}
        {step === "confirmation" && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-lg text-center"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: selectedMethod === "wave" ? "rgba(29, 196, 255, 0.2)" : "rgba(255, 127, 0, 0.2)",
                border: `2px solid ${selectedMethod === "wave" ? "rgba(29, 196, 255, 0.4)" : "rgba(255, 127, 0, 0.4)"}`
              }}
            >
              <img 
                src={selectedMethod === "wave" ? "/wave-logo.png" : "/om-logo.png"} 
                alt={selectedMethod === "wave" ? "Wave" : "Orange Money"} 
                className="h-10 w-auto object-contain"
              />
            </motion.div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Avez-vous effectué le paiement ?
            </h1>

            {/* Info Message */}
            <p className="text-muted-foreground font-subheading mb-8 max-w-md mx-auto">
              Merci de confirmer votre paiement afin de poursuivre le diagnostic.
            </p>

            {/* Confirmation Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handlePaymentConfirmation}
              className="w-full max-w-sm mx-auto p-4 rounded-xl bg-foreground text-primary font-heading font-bold text-lg flex items-center justify-center gap-3 transition-all hover:bg-foreground/90"
            >
              <CheckCircle className="w-5 h-5" />
              J'ai effectué le paiement
            </motion.button>

            {/* Back Link */}
            <button
              onClick={() => setStep("choice")}
              className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Retour au choix de paiement
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

DiagnosticPayment.displayName = "DiagnosticPayment";

export default DiagnosticPayment;
