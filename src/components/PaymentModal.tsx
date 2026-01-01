import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, Smartphone, CheckCircle } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  diagnosticName: string;
  price: string;
}

type PaymentState = "select" | "processing" | "success";
type PaymentMethod = "wave" | "orange-money" | null;

const PaymentModal = ({ isOpen, onClose, diagnosticName, price }: PaymentModalProps) => {
  const navigate = useNavigate();
  const [paymentState, setPaymentState] = useState<PaymentState>("select");
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setPaymentState("select");
      setSelectedMethod(null);
    }
  }, [isOpen]);

  const playSuccessSound = () => {
    try {
      const audio = new Audio("/success.mp3");
      audio.volume = 0.7;
      audio.play().catch(() => {
        // Fail silently if autoplay is blocked
      });
    } catch {
      // Fail silently
    }
  };

  const handlePayment = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setPaymentState("processing");

    // Simulate payment validation (3 seconds)
    setTimeout(() => {
      setPaymentState("success");
      // Play success sound before redirect
      playSuccessSound();
      // Wait 1 second to let user hear sound and see success state
      setTimeout(() => {
        navigate("/merci");
      }, 1000);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop with blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md glass-premium rounded-3xl p-8 shadow-2xl border border-foreground/10"
          >
            {/* Close Button */}
            {paymentState === "select" && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/10 transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            )}

            <AnimatePresence mode="wait">
              {/* Selection State */}
              {paymentState === "select" && (
                <motion.div
                  key="select"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                      Sécurisez votre Audit
                    </h2>
                    <p className="text-muted-foreground">
                      Choisissez votre méthode de paiement mobile :
                    </p>
                  </div>

                  {/* Product Summary */}
                  <div className="mb-8 p-4 rounded-xl bg-foreground/5 border border-foreground/10">
                    <p className="text-sm text-muted-foreground mb-1">Votre sélection</p>
                    <p className="font-heading font-bold text-foreground">{diagnosticName}</p>
                    <p className="text-2xl font-bold text-gradient-gold mt-2">{price} FCFA</p>
                  </div>

                  {/* Payment Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Wave Button */}
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePayment("wave")}
                      className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 transition-all hover:shadow-lg cursor-pointer"
                    >
                      <img 
                        src="/wave-logo.png" 
                        alt="Wave" 
                        className="h-14 w-auto object-contain"
                      />
                      <span className="text-sm font-medium text-muted-foreground">Payer avec Wave</span>
                    </motion.button>

                    {/* Orange Money Button */}
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePayment("orange-money")}
                      className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 transition-all hover:shadow-lg cursor-pointer"
                    >
                      <img 
                        src="/om-logo.png" 
                        alt="Orange Money" 
                        className="h-14 w-auto object-contain"
                      />
                      <span className="text-sm font-medium text-muted-foreground">Orange Money</span>
                    </motion.button>
                  </div>

                  {/* Security Note */}
                  <p className="mt-6 text-xs text-muted-foreground">
                    🔒 Paiement sécurisé via mobile money
                  </p>
                </motion.div>
              )}

              {/* Processing State */}
              {paymentState === "processing" && (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-center py-8"
                >
                  {/* Phone Icon with Animation */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotateZ: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                    style={{ 
                      backgroundColor: selectedMethod === "wave" ? "#1DC4FF" : "#FF7F00",
                      boxShadow: `0 0 40px ${selectedMethod === "wave" ? "rgba(29, 196, 255, 0.4)" : "rgba(255, 127, 0, 0.4)"}`
                    }}
                  >
                    <Smartphone className="w-12 h-12 text-white" />
                  </motion.div>

                  {/* Loading Spinner */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Loader2 className="w-5 h-5 animate-spin text-accent" />
                    <span className="text-lg font-medium text-foreground">
                      Traitement en cours...
                    </span>
                  </div>

                  <p className="text-muted-foreground">
                    En attente de validation sur votre téléphone...
                  </p>

                  {/* Animated Dots */}
                  <div className="flex justify-center gap-2 mt-6">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-accent"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Success State */}
              {paymentState === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 300 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </motion.div>

                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    Paiement réussi !
                  </h3>
                  <p className="text-muted-foreground">
                    Redirection en cours...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
