import { motion } from "framer-motion";
import { TrendingDown, AlertTriangle, CheckCircle, MessageCircle, FileText, Target, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuizResult, LeadData, QuizAnswers } from "@/types/solutions";

interface DiagnosticDashboardProps {
  result: QuizResult;
  leadData: LeadData;
  answers: QuizAnswers;
}

const DiagnosticDashboard = ({ result, leadData, answers }: DiagnosticDashboardProps) => {
  const { score, painPoints, shockSentence, revenueGap } = result;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("fr-FR").format(amount) + " FCFA";
  };

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

  const getScoreColor = () => {
    if (score < 30) return "text-red-600";
    if (score < 60) return "text-amber-600";
    return "text-emerald-600";
  };

  const getScoreBg = () => {
    if (score < 30) return "bg-red-50 border-red-200";
    if (score < 60) return "bg-amber-50 border-amber-200";
    return "bg-emerald-50 border-emerald-200";
  };

  return (
    <section className="min-h-screen bg-white py-8 md:py-16 px-4">
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">
            Diagnostic Terminé
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
            Résultats de votre Audit Digital
          </h1>
          <p className="text-slate-600">
            {leadData.firstName}, voici l'analyse complète de votre maturité digitale.
          </p>
        </motion.div>

        {/* Score Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`rounded-lg border p-6 md:p-8 mb-6 ${getScoreBg()}`}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Award className={`w-8 h-8 ${getScoreColor()}`} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-500 mb-1">Score de Maturité Digitale</p>
              <div className="flex items-baseline gap-2 mb-3">
                <span className={`text-5xl md:text-6xl font-bold ${getScoreColor()}`}>
                  {score}
                </span>
                <span className={`text-2xl font-medium ${getScoreColor()}`}>%</span>
              </div>
              <p className="text-slate-700">{shockSentence}</p>
            </div>
          </div>
        </motion.div>

        {/* Revenue Gap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg border border-slate-200 bg-slate-50 p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <TrendingDown className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Revenue Gap Estimé</p>
              <p className="text-2xl md:text-3xl font-bold text-slate-900">
                {formatCurrency(revenueGap)}
              </p>
              <p className="text-sm text-slate-600 mt-1">
                Perte potentielle mensuelle due aux inefficacités identifiées
              </p>
            </div>
          </div>
        </motion.div>

        {/* Pain Points */}
        {painPoints.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-slate-700" />
              <h2 className="text-lg font-semibold text-slate-900">Failles Détectées</h2>
            </div>
            <div className="space-y-3">
              {painPoints.map((point, index) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="rounded-lg border border-slate-200 bg-white p-4"
                >
                  <div className="flex items-start gap-3">
                    <Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-slate-900 mb-1">{point.title}</h3>
                      <p className="text-sm text-slate-600">{point.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-slate-700" />
            <h2 className="text-lg font-semibold text-slate-900">Recommandations Immédiates</h2>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Centralisez votre base de données clients dans un outil unique</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Automatisez les tâches répétitives pour libérer 10h/semaine</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Créez un tunnel de vente digital pour convertir plus de prospects</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Premium Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="rounded-lg border-2 border-[#1e3a5f] bg-[#1e3a5f] p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-medium text-amber-400 uppercase tracking-wide">
              Offre Premium
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Passez du Diagnostic Virtuel au Plan de Guerre de votre Business.
          </h2>

          <p className="text-slate-300 mb-6 leading-relaxed">
            Recevez votre Audit Physique (Agence ou Meet) et votre Livrable Stratégique de 15 pages.
            Ce document est votre feuille de route opérationnelle pour les 6 prochains mois.
            Nous y intégrons votre Stratégie Marketing complète et la résolution de vos blocages digitaux sur les réseaux sociaux.
            Ce n'est pas un rapport théorique, c'est un plan d'action chiffré pour colmater vos fuites financières immédiatement.
          </p>

          <div className="mb-4">
            <p className="text-3xl md:text-4xl font-bold text-white">
              {formatCurrency(dynamicPrice)}
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Tarif personnalisé selon votre profil
            </p>
          </div>

          <p className="text-sm font-semibold text-amber-400 mb-6">
            FRAIS D'AUDIT 100% DÉDUCTIBLES DE VOTRE ACCOMPAGNEMENT FINAL.
          </p>

          <Button
            onClick={handleWhatsAppClick}
            className="w-full h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base gap-3 rounded-lg shadow-lg transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            Réclamer mon Audit & Plan d'Action 15 pages
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticDashboard;
