import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, AlertTriangle, TrendingUp, Target, MessageCircle, Send, FileText } from "lucide-react";
import { DiagnosticResult } from "@/types/diagnostic";
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from "@/config/business";

interface DiagnosticResultsProps {
  result: DiagnosticResult;
}

type DeliveryChannel = "whatsapp" | "email" | null;

const DiagnosticResults = ({ result }: DiagnosticResultsProps) => {
  const { percentage, level, levelLabel, synthesis, blockScores } = result;
  const [showDeliveryChoice, setShowDeliveryChoice] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<DeliveryChannel>(null);

  // Color based on level
  const getLevelColor = () => {
    switch (level) {
      case "critique":
        return "text-destructive";
      case "fragile":
        return "text-warning";
      case "structure":
        return "text-solution";
    }
  };

  const getLevelBgColor = () => {
    switch (level) {
      case "critique":
        return "bg-destructive/10 border-destructive/20";
      case "fragile":
        return "bg-warning/10 border-warning/20";
      case "structure":
        return "bg-solution/10 border-solution/20";
    }
  };

  // Message prérempli pour la demande de rapport
  const getReportRequestMessage = () => {
    return `Bonjour Sen'Optima,

Je viens de terminer le Diagnostic de Structuration Business.

📊 Mon score : ${percentage}%
🎯 Mon niveau : ${levelLabel}

Je souhaite recevoir mon rapport détaillé personnalisé.

Merci de vérifier mon paiement et de me transmettre le rapport complet.`;
  };

  // Demande de rapport via WhatsApp
  const handleWhatsAppRequest = () => {
    const message = getReportRequestMessage();
    window.open(buildWhatsAppUrl(message), "_blank");
    setSelectedChannel("whatsapp");
  };

  // Demande de rapport via Email
  const handleEmailRequest = () => {
    const subject = encodeURIComponent(`Demande de rapport diagnostic - Score ${percentage}%`);
    const body = encodeURIComponent(getReportRequestMessage());
    window.open(`mailto:contact@senoptima.com?subject=${subject}&body=${body}`, "_blank");
    setSelectedChannel("email");
  };

  return (
    <section className="min-h-screen pt-28 md:pt-32 pb-8 px-4 bg-background">
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            Votre Diagnostic de Structuration
          </h1>
          <p className="text-muted-foreground font-subheading">
            Aperçu de votre évaluation
          </p>
        </motion.div>

        {/* Score Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6"
        >
          {/* Score Display */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <p className="text-sm text-muted-foreground font-subheading mb-2">Score Global</p>
              <div className={`text-6xl md:text-7xl font-heading font-black ${getLevelColor()}`}>
                {percentage}<span className="text-3xl">%</span>
              </div>
            </div>
            
            {/* Level Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getLevelBgColor()}`}>
              <Target className={`w-4 h-4 ${getLevelColor()}`} />
              <span className={`font-heading font-bold ${getLevelColor()}`}>
                Niveau {levelLabel}
              </span>
            </div>
          </div>

          {/* Synthesis */}
          <div className={`rounded-xl p-4 border ${getLevelBgColor()}`}>
            <div className="flex items-start gap-3">
              <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${getLevelColor()}`} />
              <p className="text-foreground font-subheading text-left leading-relaxed">
                {synthesis}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Block Scores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center gap-2 text-left">
            <TrendingUp className="w-5 h-5 text-accent" />
            Score par Pilier
          </h2>
          
          <div className="space-y-4">
            {blockScores.map((block, index) => (
              <motion.div
                key={block.blockId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-semibold text-foreground text-left">
                    {block.blockName}
                  </span>
                  <span className={`font-heading font-bold ${
                    block.percentage < 40 ? "text-destructive" :
                    block.percentage < 70 ? "text-warning" : "text-solution"
                  }`}>
                    {block.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${block.percentage}%` }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    className={`h-full rounded-full ${
                      block.percentage < 40 ? "bg-destructive" :
                      block.percentage < 70 ? "bg-warning" : "bg-solution"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA - Demande de rapport */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card border-2 border-accent/20 rounded-2xl p-6 md:p-8"
        >
          <AnimatePresence mode="wait">
            {!showDeliveryChoice ? (
              <motion.div
                key="initial"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-accent" />
                  <h2 className="text-xl font-heading font-bold text-foreground text-left">
                    Recevez votre rapport détaillé
                  </h2>
                </div>
                <p className="text-muted-foreground font-subheading mb-6 text-left">
                  Votre rapport personnalisé contient une analyse approfondie de chaque pilier, 
                  des recommandations concrètes et un plan d'action prioritaire.
                </p>
                <p className="text-sm text-muted-foreground mb-6 text-left italic">
                  📩 Rapport livré sous 24h après vérification du paiement.
                </p>
                
                <button
                  onClick={() => setShowDeliveryChoice(true)}
                  className="w-full min-h-[56px] px-6 py-4 rounded-xl font-heading font-bold bg-foreground text-primary text-lg flex items-center justify-center gap-3 transition-colors duration-100 touch-target hover:bg-foreground/90 active:scale-[0.98]"
                >
                  <Send className="w-5 h-5" />
                  Demander mon rapport
                </button>
              </motion.div>
            ) : selectedChannel ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-solution/20 flex items-center justify-center">
                  <Send className="w-8 h-8 text-solution" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  Demande envoyée !
                </h3>
                <p className="text-muted-foreground font-subheading max-w-sm mx-auto">
                  Nous allons vérifier votre paiement et vous transmettre votre rapport détaillé sous 24h.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="choice"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="text-xl font-heading font-bold text-foreground mb-4 text-left">
                  Comment souhaitez-vous recevoir votre rapport ?
                </h2>
                
                <div className="space-y-3">
                  {/* WhatsApp */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleWhatsAppRequest}
                    className="w-full p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all flex items-center justify-center gap-4"
                  >
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    <span className="font-heading font-semibold text-foreground">
                      Recevoir via WhatsApp
                    </span>
                  </motion.button>

                  {/* Email */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleEmailRequest}
                    className="w-full p-4 rounded-xl bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-all flex items-center justify-center gap-4"
                  >
                    <Mail className="w-6 h-6 text-accent" />
                    <span className="font-heading font-semibold text-foreground">
                      Recevoir par Email
                    </span>
                  </motion.button>
                </div>

                <button
                  onClick={() => setShowDeliveryChoice(false)}
                  className="w-full mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Retour
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticResults;
