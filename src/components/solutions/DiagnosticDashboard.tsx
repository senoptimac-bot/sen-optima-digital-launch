import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, CheckCircle, MessageCircle, Sparkles, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuizResult, LeadData, QuizAnswers } from "@/types/solutions";

interface DiagnosticDashboardProps {
  result: QuizResult;
  leadData: LeadData;
  answers: QuizAnswers;
}

const DiagnosticDashboard = ({ result, leadData, answers }: DiagnosticDashboardProps) => {
  const { score, category, painPoints, shockSentence, revenueGap, price } = result;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("fr-FR").format(amount) + " FCFA";
  };

  // Dynamic price based on revenue
  const getDynamicPrice = () => {
    if (answers.q1_revenue === "less_1m") return 50000;
    if (answers.q1_revenue === "1m_10m") return 75000;
    return 100000;
  };

  const dynamicPrice = getDynamicPrice();

  const getRevenueLabel = () => {
    if (answers.q1_revenue === "less_1m") return "Moins de 1M FCFA";
    if (answers.q1_revenue === "1m_10m") return "1M - 10M FCFA";
    return "Plus de 10M FCFA";
  };

  const getBlockerLabel = () => {
    const blockers: Record<string, string> = {
      time: "Le temps",
      money: "L'argent",
      skills: "Les compétences",
      clarity: "La clarté",
    };
    return blockers[answers.q9_growth_blocker] || "Non spécifié";
  };

  const getPriceLabel = () => {
    if (dynamicPrice === 50000) return "50k";
    if (dynamicPrice === 75000) return "75k";
    return "100k";
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Bonjour Mandiaye, je viens de terminer mon diagnostic IA sur Sen'Optima.

Mon score est de : ${score}%.
Mon CA mensuel : ${getRevenueLabel()}.
Ma plus grande difficulté : ${getBlockerLabel()}.

Je souhaite réserver mon audit physique et recevoir mon plan de guerre de 15 pages pour ${getPriceLabel()} FCFA.

Voici mes coordonnées pour la suite :
Nom : ${leadData.firstName}
Email : ${leadData.email}`
    );
    window.open(`https://wa.me/221781926969?text=${message}`, "_blank");
  };

  // Score color based on value
  const getScoreColor = () => {
    if (score < 30) return "text-destructive";
    if (score < 60) return "text-warning";
    return "text-solution";
  };

  const getScoreGradient = () => {
    if (score < 30) return "from-destructive/20 to-destructive/5";
    if (score < 60) return "from-warning/20 to-warning/5";
    return "from-solution/20 to-solution/5";
  };

  return (
    <section className="min-h-screen py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Header with Score */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            Votre Diagnostic <span className="text-accent">Sen'Optima</span>
          </h1>
          <p className="text-muted-foreground font-subheading">
            {leadData.firstName}, voici votre verdict de maturité digitale
          </p>
        </motion.div>

        {/* Main Score Card - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className={`relative rounded-3xl p-8 md:p-10 mb-8 bg-gradient-to-br ${getScoreGradient()} backdrop-blur-xl border border-foreground/10 overflow-hidden`}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-solution/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Score Display */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className={`text-7xl md:text-9xl font-heading font-black ${getScoreColor()} mb-2`}
              >
                {score}
                <span className="text-3xl md:text-4xl">%</span>
              </motion.div>
              <p className="text-lg text-foreground font-subheading">Score de Maturité Digitale</p>
            </div>

            {/* Shock Sentence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-destructive/10 border border-destructive/30 rounded-xl p-5 mb-6"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-heading font-medium">{shockSentence}</p>
              </div>
            </motion.div>

            {/* Revenue Gap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-background/50 rounded-xl p-5 border border-foreground/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-6 h-6 text-warning" />
                  <span className="text-muted-foreground font-subheading">Revenue Gap estimé</span>
                </div>
                <span className="text-2xl md:text-3xl font-heading font-bold text-warning">
                  {formatCurrency(revenueGap)}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 pl-9">
                Perte potentielle mensuelle due aux inefficacités identifiées
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Pain Points */}
        {painPoints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-accent" />
              Failles Détectées
            </h2>
            <div className="grid gap-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="glass-card rounded-xl p-5"
                >
                  <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-warning" />
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-10"
        >
          <h2 className="text-xl font-heading font-bold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-solution" />
            Recommandations Immédiates
          </h2>
          <div className="glass-card rounded-xl p-5 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-solution font-bold">1.</span>
              <p className="text-foreground">Centralisez votre base de données clients dans un outil unique</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-solution font-bold">2.</span>
              <p className="text-foreground">Automatisez les tâches répétitives pour libérer 10h/semaine</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-solution font-bold">3.</span>
              <p className="text-foreground">Créez un tunnel de vente digital pour convertir plus de prospects</p>
            </div>
          </div>
        </motion.div>

        {/* Premium Offer Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Premium Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 via-yellow-400/30 to-amber-500/30 rounded-3xl" />
          <div className="absolute inset-[1px] bg-gradient-to-br from-background via-background to-background/95 rounded-3xl" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent animate-pulse" />
          
          <div className="relative z-10 p-8 md:p-10">
            {/* Premium Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-400/20 border border-amber-400/30">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 font-subheading text-sm">Offre Premium</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-4">
              Passez du Diagnostic Virtuel au{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                Plan de Guerre
              </span>{" "}
              de votre Business.
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto font-subheading">
              Recevez votre Audit Physique (Agence ou Meet) et votre Livrable Stratégique de 15 pages.
              Ce document est votre feuille de route opérationnelle pour les 6 prochains mois.
              Nous y intégrons votre Stratégie Marketing complète et la résolution de vos blocages digitaux sur les réseaux sociaux.
              Ce n'est pas un rapport théorique, c'est un plan d'action chiffré pour colmater vos fuites financières immédiatement.
            </p>

            {/* Dynamic Price */}
            <div className="text-center mb-6">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                  {formatCurrency(dynamicPrice)}
                </span>
              </div>
              <p className="text-amber-400/80 text-sm mt-2 font-subheading">
                Tarif personnalisé selon votre profil
              </p>
            </div>

            {/* Guarantee */}
            <p className="text-center text-foreground font-heading font-bold mb-8">
              FRAIS D'AUDIT 100% DÉDUCTIBLES DE VOTRE ACCOMPAGNEMENT FINAL.
            </p>

            {/* WhatsApp CTA */}
            <div className="flex justify-center">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="h-16 px-8 bg-solution hover:bg-solution/90 text-solution-foreground font-heading text-lg gap-3 shadow-lg shadow-solution/20 hover:shadow-xl hover:shadow-solution/30 transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                Réclamer mon Audit & Plan d'Action 15 pages
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticDashboard;
