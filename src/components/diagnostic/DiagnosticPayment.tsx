import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DiagnosticPaymentProps {
  onPaymentComplete: () => void;
}

/**
 * Écran de paiement Wave / Orange Money
 * Composant purement présentatif - le parent gère le flow
 */
const DiagnosticPayment = memo(({ onPaymentComplete }: DiagnosticPaymentProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-subheading mb-4">
            Offre de lancement
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Accédez à votre diagnostic
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
              "Synthèse personnalisée de vos forces et faiblesses"
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Payment Methods */}
          <div className="space-y-3">
            <p className="text-center text-sm text-muted-foreground mb-4">
              Choisissez votre mode de paiement
            </p>
            
            {/* Wave Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onPaymentComplete}
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
            </motion.button>

            {/* Orange Money Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onPaymentComplete}
              className="w-full p-4 rounded-xl bg-[#FF7F00]/10 border border-[#FF7F00]/30 hover:bg-[#FF7F00]/20 transition-all flex items-center justify-center gap-4"
            >
              <img 
                src="/om-logo.png" 
                alt="Orange Money" 
                className="h-8 w-auto object-contain"
              />
              <span className="font-heading font-semibold text-foreground">
                Payer avec Orange Money
              </span>
            </motion.button>
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
    </section>
  );
});

DiagnosticPayment.displayName = "DiagnosticPayment";

export default DiagnosticPayment;
