import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuizAnswers } from "@/types/solutions";

interface SolutionsQuizProps {
  onComplete: (answers: QuizAnswers) => void;
}

interface Question {
  id: keyof QuizAnswers;
  question: string;
  subtitle: string;
  options: { value: string; label: string; description?: string }[];
}

const QUESTIONS: Question[] = [
  {
    id: "q1_revenue",
    question: "Quel est votre chiffre d'affaires mensuel moyen ?",
    subtitle: "Soyez honnête — ces données restent confidentielles.",
    options: [
      { value: "less_1m", label: "Moins de 1M FCFA", description: "Démarrage ou activité secondaire" },
      { value: "1m_10m", label: "1M - 10M FCFA", description: "Croissance active" },
      { value: "more_10m", label: "Plus de 10M FCFA", description: "Entreprise établie" },
    ],
  },
  {
    id: "q2_team",
    question: "Combien de personnes travaillent dans votre entreprise ?",
    subtitle: "Incluez vous-même et tout employé régulier.",
    options: [
      { value: "solo", label: "Juste moi", description: "Entrepreneur solo" },
      { value: "2_5", label: "2 à 5 personnes", description: "Petite équipe" },
      { value: "more_5", label: "Plus de 5 personnes", description: "Équipe structurée" },
    ],
  },
  {
    id: "q3_channel",
    question: "Comment vos clients vous contactent-ils principalement ?",
    subtitle: "Choisissez votre canal principal de communication.",
    options: [
      { value: "whatsapp_only", label: "WhatsApp uniquement", description: "Messages et appels" },
      { value: "social_media", label: "Réseaux sociaux", description: "Instagram, Facebook, TikTok" },
      { value: "website", label: "Site web", description: "Formulaire ou chat en ligne" },
      { value: "multi_channel", label: "Multi-canal", description: "Plusieurs sources coordonnées" },
    ],
  },
  {
    id: "q4_data",
    question: "Comment stockez-vous vos informations clients ?",
    subtitle: "Pensez à vos contacts, commandes, et historiques.",
    options: [
      { value: "memory_paper", label: "Mémoire ou papier", description: "Carnet, post-it, mémorisation" },
      { value: "excel_notes", label: "Excel ou Notes", description: "Fichiers manuels" },
      { value: "crm_tool", label: "Outil CRM", description: "Logiciel dédié" },
    ],
  },
  {
    id: "q5_website",
    question: "Avez-vous un site web ?",
    subtitle: "Un site web professionnel pour votre entreprise.",
    options: [
      { value: "none", label: "Aucun site", description: "Pas de présence web" },
      { value: "vitrine", label: "Site vitrine", description: "Présentation simple" },
      { value: "ecommerce", label: "Site e-commerce", description: "Vente en ligne" },
      { value: "full_platform", label: "Plateforme complète", description: "Avec espace client" },
    ],
  },
  {
    id: "q6_process",
    question: "Comment gérez-vous vos opérations quotidiennes ?",
    subtitle: "Commandes, factures, livraisons, suivi client...",
    options: [
      { value: "manual", label: "100% Manuel", description: "Tout à la main" },
      { value: "semi_auto", label: "Semi-automatisé", description: "Quelques outils" },
      { value: "automated", label: "Automatisé", description: "Systèmes connectés" },
    ],
  },
  {
    id: "q7_marketing",
    question: "Quelle est votre stratégie marketing actuelle ?",
    subtitle: "Comment attirez-vous de nouveaux clients ?",
    options: [
      { value: "none", label: "Aucune stratégie", description: "Bouche-à-oreille uniquement" },
      { value: "organic_only", label: "Publications organiques", description: "Posts sur réseaux sociaux" },
      { value: "paid_ads", label: "Publicités payantes", description: "Facebook Ads, etc." },
      { value: "full_strategy", label: "Stratégie complète", description: "Contenu + Ads + Email" },
    ],
  },
  {
    id: "q8_payment",
    question: "Quels moyens de paiement proposez-vous ?",
    subtitle: "Options disponibles pour vos clients.",
    options: [
      { value: "cash_only", label: "Cash uniquement", description: "Paiement en espèces" },
      { value: "mobile_money", label: "Mobile Money", description: "Wave, Orange Money" },
      { value: "multiple", label: "Multiple", description: "Cash + Mobile + Carte" },
    ],
  },
  {
    id: "q9_growth_blocker",
    question: "Qu'est-ce qui bloque le plus votre croissance ?",
    subtitle: "Identifiez votre principal frein.",
    options: [
      { value: "time", label: "Le temps", description: "Pas assez d'heures" },
      { value: "money", label: "L'argent", description: "Budget limité" },
      { value: "skills", label: "Les compétences", description: "Manque de savoir-faire" },
      { value: "clarity", label: "La clarté", description: "Ne sais pas par où commencer" },
    ],
  },
  {
    id: "q10_goal",
    question: "Quel est votre objectif prioritaire ?",
    subtitle: "Ce que vous voulez accomplir en premier.",
    options: [
      { value: "structure", label: "Mieux m'organiser", description: "Structure interne" },
      { value: "visibility", label: "Être plus visible", description: "Présence en ligne" },
      { value: "sales", label: "Vendre plus", description: "Augmenter le CA" },
      { value: "automation", label: "Automatiser", description: "Gagner du temps" },
    ],
  },
];

const SolutionsQuiz = ({ onComplete }: SolutionsQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const question = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;
  const isLastQuestion = currentQuestion === QUESTIONS.length - 1;

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = { ...answers, [question.id]: selectedOption };
    setAnswers(newAnswers);

    if (isLastQuestion) {
      onComplete(newAnswers as QuizAnswers);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption(answers[QUESTIONS[currentQuestion - 1].id] || null);
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
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 md:p-12"
            >
              {/* Question */}
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                {question.question}
              </h2>
              <p className="text-muted-foreground mb-8 font-subheading">{question.subtitle}</p>

              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option) => (
                  <motion.button
                    key={option.value}
                    onClick={() => handleOptionSelect(option.value)}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${
                      selectedOption === option.value
                        ? "border-accent bg-accent/10"
                        : "border-foreground/10 hover:border-foreground/20 bg-background/20"
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-heading font-semibold text-foreground">
                          {option.label}
                        </span>
                        {option.description && (
                          <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                        )}
                      </div>
                      {selectedOption === option.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 rounded-full bg-accent flex items-center justify-center"
                        >
                          <Check className="w-4 h-4 text-accent-foreground" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-foreground/10">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Précédent
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!selectedOption}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                >
                  {isLastQuestion ? "Voir mes résultats" : "Suivant"}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SolutionsQuiz;
