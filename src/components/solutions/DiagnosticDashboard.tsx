import { TrendingDown, AlertTriangle, CheckCircle, Target, Zap, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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

  return (
    <section className="min-h-screen pt-28 md:pt-32 pb-8 px-4 bg-background">
      <div className="container max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-left mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
            Votre Diagnostic Sen'Optima
          </h1>
          <p className="text-muted-foreground font-subheading">
            {leadData.firstName}, voici votre verdict de maturité digitale
          </p>
        </div>

        {/* Main Score Card */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6">
          {/* Score Display */}
          <div className="text-left mb-6">
            <p className="text-sm text-muted-foreground font-subheading mb-2">Score de Maturité Digitale</p>
            <div className={`text-6xl md:text-7xl font-heading font-black ${getScoreColor()}`}>
              {score}<span className="text-3xl">%</span>
            </div>
          </div>

          {/* Shock Sentence */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-heading font-medium text-left">{shockSentence}</p>
            </div>
          </div>

          {/* Revenue Gap */}
          <div className="bg-muted/50 rounded-xl p-4 border border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex items-center gap-3">
                <TrendingDown className="w-5 h-5 text-warning" />
                <span className="text-muted-foreground font-subheading">Revenue Gap estimé</span>
              </div>
              <span className="text-2xl font-heading font-bold text-warning">
                {formatCurrency(revenueGap)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-left">
              Perte potentielle mensuelle due aux inefficacités identifiées
            </p>
          </div>
        </div>

        {/* Pain Points */}
        {painPoints.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center gap-2 text-left">
              <Target className="w-5 h-5 text-accent" />
              Failles Détectées
            </h2>
            <div className="space-y-3">
              {painPoints.map((point) => (
                <div
                  key={point.id}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <h3 className="font-heading font-semibold text-foreground mb-1 flex items-center gap-2 text-left">
                    <Zap className="w-4 h-4 text-warning" />
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm text-left">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommendations */}
        <div className="mb-8">
          <h2 className="text-lg font-heading font-bold text-foreground mb-4 flex items-center gap-2 text-left">
            <CheckCircle className="w-5 h-5 text-solution" />
            Recommandations Immédiates
          </h2>
          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <div className="flex items-start gap-3 text-left">
              <span className="text-solution font-bold">1.</span>
              <p className="text-foreground">Centralisez votre base de données clients dans un outil unique</p>
            </div>
            <div className="flex items-start gap-3 text-left">
              <span className="text-solution font-bold">2.</span>
              <p className="text-foreground">Automatisez les tâches répétitives pour libérer 10h/semaine</p>
            </div>
            <div className="flex items-start gap-3 text-left">
              <span className="text-solution font-bold">3.</span>
              <p className="text-foreground">Créez un tunnel de vente digital pour convertir plus de prospects</p>
            </div>
          </div>
        </div>

        {/* Premium Offer Section */}
        <div className="bg-card border-2 border-amber-500/30 rounded-2xl p-6 md:p-8">
          {/* Premium Badge */}
          <div className="flex justify-start mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 font-subheading text-sm">Offre Premium</span>
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground text-left mb-4">
            Passez du Diagnostic Virtuel au Plan de Guerre de votre Business.
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-left mb-6 font-subheading leading-relaxed">
            Recevez votre Audit Physique (Agence ou Meet) et votre Livrable Stratégique de 15 pages.
            Ce document est votre feuille de route opérationnelle pour les 6 prochains mois.
            Nous y intégrons votre Stratégie Marketing complète et la résolution de vos blocages digitaux sur les réseaux sociaux.
            Ce n'est pas un rapport théorique, c'est un plan d'action chiffré pour colmater vos fuites financières immédiatement.
          </p>

          {/* Dynamic Price */}
          <div className="text-left mb-4">
            <span className="text-4xl md:text-5xl font-heading font-black text-amber-500">
              {formatCurrency(dynamicPrice)}
            </span>
            <p className="text-muted-foreground text-sm mt-1 font-subheading">
              Tarif personnalisé selon votre profil
            </p>
          </div>

          {/* Guarantee */}
          <p className="text-left text-foreground font-heading font-bold mb-6 text-sm md:text-base">
            FRAIS D'AUDIT 100% DÉDUCTIBLES DE VOTRE ACCOMPAGNEMENT FINAL.
          </p>

          {/* WhatsApp CTA - Full width on mobile */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full h-14 px-6 rounded-xl font-heading font-bold text-white text-base md:text-lg flex items-center justify-center gap-3 transition-colors duration-100"
            style={{ backgroundColor: '#25D366' }}
          >
            <FaWhatsapp className="w-6 h-6" />
            Réclamer mon Audit & Plan d'Action 15 pages
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticDashboard;
