import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuizAnswers } from "@/types/solutions";

interface TypeformQuizProps {
  onComplete: (answers: QuizAnswers) => void;
}

interface Question {
  id: keyof QuizAnswers;
  question: string;
  subtitle: string;
  options: { value: string; label: string; description?: string; emoji?: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: "q1_revenue",
    question: "Quel est votre chiffre d'affaires mensuel moyen ?",
    subtitle: "Soyez honnête — ces données restent confidentielles.",
    options: [
      { value: "less_1m", label: "Moins de 1M FCFA", description: "Démarrage ou activité secondaire", emoji: "🌱" },
      { value: "1m_10m", label: "1M - 10M FCFA", description: "Croissance active", emoji: "📈" },
      { value: "more_10m", label: "Plus de 10M FCFA", description: "Entreprise établie", emoji: "🏆" },
    ],
  },
  {
    id: "q2_team",
    question: "Combien de personnes travaillent dans votre entreprise ?",
    subtitle: "Incluez vous-même et tout employé régulier.",
    options: [
      { value: "solo", label: "Juste moi", description: "Entrepreneur solo", emoji: "👤" },
      { value: "2_5", label: "2 à 5 personnes", description: "Petite équipe", emoji: "👥" },
      { value: "more_5", label: "Plus de 5 personnes", description: "Équipe structurée", emoji: "👨‍👩‍👧‍👦" },
    ],
  },
  {
    id: "q3_channel",
    question: "Comment vos clients vous contactent-ils principalement ?",
    subtitle: "Choisissez votre canal principal de communication.",
    options: [
      { value: "whatsapp_only", label: "WhatsApp uniquement", description: "Messages et appels", emoji: "💬" },
      { value: "social_media", label: "Réseaux sociaux", description: "Instagram, Facebook, TikTok", emoji: "📱" },
      { value: "website", label: "Site web", description: "Formulaire ou chat en ligne", emoji: "🌐" },
      { value: "multi_channel", label: "Multi-canal", description: "Plusieurs sources coordonnées", emoji: "🔗" },
    ],
  },
  {
    id: "q4_data",
    question: "Comment stockez-vous vos informations clients ?",
    subtitle: "Pensez à vos contacts, commandes, et historiques.",
    options: [
      { value: "memory_paper", label: "Mémoire ou papier", description: "Carnet, post-it, mémorisation", emoji: "📝" },
      { value: "excel_notes", label: "Excel ou Notes", description: "Fichiers manuels", emoji: "📊" },
      { value: "crm_tool", label: "Outil CRM", description: "Logiciel dédié", emoji: "💼" },
    ],
  },
  {
    id: "q5_website",
    question: "Avez-vous un site web ?",
    subtitle: "Un site web professionnel pour votre entreprise.",
    options: [
      { value: "none", label: "Aucun site", description: "Pas de présence web", emoji: "❌" },
      { value: "vitrine", label: "Site vitrine", description: "Présentation simple", emoji: "🏠" },
      { value: "ecommerce", label: "Site e-commerce", description: "Vente en ligne", emoji: "🛒" },
      { value: "full_platform", label: "Plateforme complète", description: "Avec espace client", emoji: "🚀" },
    ],
  },
  {
    id: "q6_process",
    question: "Comment gérez-vous vos opérations quotidiennes ?",
    subtitle: "Commandes, factures, livraisons, suivi client...",
    options: [
      { value: "manual", label: "100% Manuel", description: "Tout à la main", emoji: "✋" },
      { value: "semi_auto", label: "Semi-automatisé", description: "Quelques outils", emoji: "⚙️" },
      { value: "automated", label: "Automatisé", description: "Systèmes connectés", emoji: "🤖" },
    ],
  },
  {
    id: "q7_marketing",
    question: "Quelle est votre stratégie marketing actuelle ?",
    subtitle: "Comment attirez-vous de nouveaux clients ?",
    options: [
      { value: "none", label: "Aucune stratégie", description: "Bouche-à-oreille uniquement", emoji: "🗣️" },
      { value: "organic_only", label: "Publications organiques", description: "Posts sur réseaux sociaux", emoji: "📸" },
      { value: "paid_ads", label: "Publicités payantes", description: "Facebook Ads, etc.", emoji: "💰" },
      { value: "full_strategy", label: "Stratégie complète", description: "Contenu + Ads + Email", emoji: "🎯" },
    ],
  },
  {
    id: "q8_payment",
    question: "Quels moyens de paiement proposez-vous ?",
    subtitle: "Options disponibles pour vos clients.",
    options: [
      { value: "cash_only", label: "Cash uniquement", description: "Paiement en espèces", emoji: "💵" },
      { value: "mobile_money", label: "Mobile Money", description: "Wave, Orange Money", emoji: "📲" },
      { value: "multiple", label: "Multiple", description: "Cash + Mobile + Carte", emoji: "💳" },
    ],
  },
  {
    id: "q9_growth_blocker",
    question: "Qu'est-ce qui bloque le plus votre croissance ?",
    subtitle: "Identifiez votre principal frein.",
    options: [
      { value: "time", label: "Le temps", description: "Pas assez d'heures", emoji: "⏰" },
      { value: "money", label: "L'argent", description: "Budget limité", emoji: "💸" },
      { value: "skills", label: "Les compétences", description: "Manque de savoir-faire", emoji: "🎓" },
      { value: "clarity", label: "La clarté", description: "Ne sais pas par où commencer", emoji: "🧭" },
    ],
  },
  {
    id: "q10_goal",
    question: "Quel est votre objectif prioritaire ?",
    subtitle: "Ce que vous voulez accomplir en premier.",
    options: [
      { value: "structure", label: "Mieux m'organiser", description: "Structure interne", emoji: "📋" },
      { value: "visibility", label: "Être plus visible", description: "Présence en ligne", emoji: "👀" },
      { value: "sales", label: "Vendre plus", description: "Augmenter le CA", emoji: "📈" },
      { value: "automation", label: "Automatiser", description: "Gagner du temps", emoji: "⚡" },
    ],
  },
];

const TypeformQuiz = ({ onComplete }: TypeformQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const question = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;
  const isLastQuestion = currentQuestion === QUESTIONS.length - 1;

  const handleOptionSelect = (value: string) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    // Auto-advance after short delay for visual feedback
    setTimeout(() => {
      if (isLastQuestion) {
        onComplete(newAnswers as QuizAnswers);
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setIsTransitioning(false);
      }
    }, 400);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0 && !isTransitioning) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  return (
    <section className="min-h-screen flex flex-col py-8 px-4">
      {/* Progress Bar */}
      <div className="container max-w-2xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground font-subheading">
            Question {currentQuestion + 1} sur {QUESTIONS.length}
          </span>
          <span className="text-sm text-accent font-subheading">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-solution rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container max-w-2xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="glass-card rounded-2xl p-6 md:p-10"
            >
              {/* Question */}
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2"
              >
                {question.question}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground mb-8 font-subheading"
              >
                {question.subtitle}
              </motion.p>

              {/* Options - Auto-advance on click */}
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    onClick={() => handleOptionSelect(option.value)}
                    disabled={isTransitioning}
                    className={`w-full p-4 md:p-5 rounded-xl border text-left transition-all duration-200 group ${
                      answers[question.id] === option.value
                        ? "border-accent bg-accent/15 scale-[1.02]"
                        : "border-foreground/10 hover:border-accent/50 hover:bg-accent/5 bg-background/30"
                    } ${isTransitioning ? 'pointer-events-none' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Emoji */}
                      <span className="text-2xl md:text-3xl">{option.emoji}</span>
                      
                      <div className="flex-1">
                        <span className="font-heading font-semibold text-foreground text-base md:text-lg block">
                          {option.label}
                        </span>
                        {option.description && (
                          <p className="text-sm text-muted-foreground mt-0.5">{option.description}</p>
                        )}
                      </div>
                      
                      {/* Check icon when selected */}
                      {answers[question.id] === option.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0"
                        >
                          <Check className="w-4 h-4 text-accent-foreground" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Back button only */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-6 border-t border-foreground/10"
              >
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0 || isTransitioning}
                  className="gap-2 text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Précédent
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TypeformQuiz;
