import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown } from "lucide-react";
import { QuizResult } from "@/types/solutions";

interface SolutionsResultsProps {
  result: QuizResult;
}

const SolutionsResults = ({ result }: SolutionsResultsProps) => {
  const { score, shockSentence, revenueGap, painPoints } = result;
  
  // Determine gauge color based on score
  const getScoreColor = () => {
    if (score < 30) return "hsl(0, 84%, 60%)"; // Red
    if (score < 60) return "hsl(43, 65%, 53%)"; // Gold
    return "hsl(142, 70%, 45%)"; // Green
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("fr-FR").format(amount) + " FCFA";
  };

  return (
    <section className="py-20 relative">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Score Gauge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-headline text-foreground mb-8">
            Votre Score de <span className="text-accent">Maturité Digitale</span>
          </h2>

          {/* Circular Gauge */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="96"
                cy="96"
                r="45"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="8"
                className="opacity-30"
              />
              {/* Progress circle */}
              <motion.circle
                cx="96"
                cy="96"
                r="45"
                fill="none"
                stroke={getScoreColor()}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            {/* Score number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-5xl font-heading font-bold text-foreground"
              >
                {score}
              </motion.span>
              <span className="text-xl text-muted-foreground ml-1">/100</span>
            </div>
          </div>
        </motion.div>

        {/* Shock Sentence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-card glass-card-danger rounded-2xl p-8 mb-8"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 icon-semantic-danger flex-shrink-0" />
            <p className="text-xl text-brand-navy font-heading leading-relaxed">
              {shockSentence}
            </p>
          </div>
        </motion.div>

        {/* Revenue Gap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="glass-card glass-card-warning rounded-2xl p-8 mb-8"
        >
          <div className="flex items-start gap-4">
            <TrendingDown className="w-8 h-8 icon-semantic-warning flex-shrink-0" />
            <div>
              <p className="text-brand-navy-light font-subheading mb-2">Estimation des pertes mensuelles</p>
              <p className="text-3xl font-heading font-bold text-accent">
                {formatCurrency(revenueGap)}
              </p>
              <p className="text-sm text-brand-navy-light mt-2">
                en opportunités perdues par manque de système
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pain Points */}
        {painPoints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <h3 className="text-title text-foreground mb-6">
              Points de Rupture Identifiés
            </h3>
            <div className="grid gap-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="glass-card rounded-xl p-6"
                >
                  <h4 className="font-heading font-semibold text-accent mb-2">
                    {point.title}
                  </h4>
                  <p className="text-muted-foreground">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SolutionsResults;
