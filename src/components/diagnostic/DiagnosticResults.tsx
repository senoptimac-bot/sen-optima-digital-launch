import { motion } from "framer-motion";
import { Phone, AlertTriangle, TrendingUp, Target } from "lucide-react";
import { DiagnosticResult } from "@/types/diagnostic";
import { buildWhatsAppUrl } from "@/config/business";

interface DiagnosticResultsProps {
  result: DiagnosticResult;
}

const DiagnosticResults = ({ result }: DiagnosticResultsProps) => {
  const { percentage, level, levelLabel, synthesis, blockScores } = result;

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

  const handleBookCall = () => {
    const message = `Bonjour Sen'Optima,

Je viens de terminer le Diagnostic de Structuration Business.

Mon score : ${percentage}%
Mon niveau : ${levelLabel}

Je souhaite réserver un appel stratégique pour approfondir ces résultats.`;

    window.open(buildWhatsAppUrl(message), "_blank");
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
            Voici votre évaluation complète
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-card border-2 border-accent/20 rounded-2xl p-6 md:p-8"
        >
          <h2 className="text-xl font-heading font-bold text-foreground mb-4 text-left">
            Prêt à aller plus loin ?
          </h2>
          <p className="text-muted-foreground font-subheading mb-6 text-left">
            Réservez un appel stratégique pour analyser ces résultats en profondeur 
            et définir les prochaines étapes concrètes pour structurer votre activité.
          </p>
          
          <button
            onClick={handleBookCall}
            className="w-full min-h-[56px] px-6 py-4 rounded-xl font-heading font-bold bg-foreground text-primary text-lg flex items-center justify-center gap-3 transition-colors duration-100 touch-target hover:bg-foreground/90 active:scale-[0.98]"
          >
            <Phone className="w-5 h-5" />
            Réserver un appel stratégique
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticResults;
