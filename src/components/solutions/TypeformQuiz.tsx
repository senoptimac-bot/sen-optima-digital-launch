import { useState, useCallback, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QuizAnswers } from "@/types/solutions";
import { QuizAnswersSchema } from "@/schemas/quiz";

interface TypeformQuizProps {
  onComplete: (answers: QuizAnswers) => void;
}

interface Question {
  id: keyof QuizAnswers;
  question: string;
  subtitle: string;
  type: "choice" | "text";
  options?: { value: string; label: string; description?: string }[];
  placeholder?: string;
}

const QUESTIONS: Question[] = [
  // Qualification questions first
  {
    id: "q0_company",
    question: "Quel est le nom de votre entreprise ?",
    subtitle: "Pour personnaliser votre diagnostic.",
    type: "text",
    placeholder: "Ex: Ma Boutique Dakar, Chez Fatou...",
  },
  {
    id: "q0_role",
    question: "Quel poste occupez-vous ?",
    subtitle: "Pour adapter nos recommandations à votre niveau de décision.",
    type: "choice",
    options: [
      { value: "founder", label: "Fondateur / CEO", description: "Je suis le patron" },
      { value: "manager", label: "Manager / Directeur", description: "Je gère une équipe" },
      { value: "employee", label: "Employé", description: "Je travaille pour l'entreprise" },
      { value: "freelance", label: "Freelance / Indépendant", description: "Je travaille seul" },
    ],
  },
  // Business questions
  {
    id: "q1_revenue",
    question: "Quel est votre chiffre d'affaires mensuel moyen ?",
    subtitle: "Soyez honnête — ces données restent confidentielles.",
    type: "choice",
    options: [
      { value: "less_300k", label: "Moins de 300K FCFA", description: "Activité en démarrage" },
      { value: "300k_1m", label: "300K - 1M FCFA", description: "Petite activité régulière" },
      { value: "1m_10m", label: "1M - 10M FCFA", description: "Croissance active" },
      { value: "more_10m", label: "Plus de 10M FCFA", description: "Entreprise établie" },
    ],
  },
  {
    id: "q2_team",
    question: "Combien de personnes travaillent dans votre entreprise ?",
    subtitle: "Incluez vous-même et tout employé régulier.",
    type: "choice",
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
    type: "choice",
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
    type: "choice",
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
    type: "choice",
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
    type: "choice",
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
    type: "choice",
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
    type: "choice",
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
    type: "choice",
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
    type: "choice",
    options: [
      { value: "structure", label: "Mieux m'organiser", description: "Structure interne" },
      { value: "visibility", label: "Être plus visible", description: "Présence en ligne" },
      { value: "sales", label: "Vendre plus", description: "Augmenter le CA" },
      { value: "automation", label: "Automatiser", description: "Gagner du temps" },
    ],
  },
];

// Memoized Option Component with visual feedback
interface OptionButtonProps {
  option: { value: string; label: string; description?: string };
  isSelected: boolean;
  onSelect: (value: string) => void;
  disabled?: boolean;
}

const OptionButton = memo(({ option, isSelected, onSelect, disabled }: OptionButtonProps) => (
  <motion.button
    onClick={() => !disabled && onSelect(option.value)}
    disabled={disabled}
    whileTap={{ scale: 0.98 }}
    animate={isSelected ? { scale: [1, 1.02, 1] } : {}}
    transition={{ duration: 0.2 }}
    className={`w-full min-h-[52px] p-4 rounded-xl border text-left touch-target
      transition-all duration-300 ease-out
      ${isSelected
        ? "border-accent bg-accent/15 shadow-md shadow-accent/20"
        : "border-border hover:border-accent/50 active:bg-accent/10 bg-background/50"
      }
      ${disabled ? "pointer-events-none" : ""}`}
  >
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1">
        <span className="font-heading font-semibold text-foreground text-base block">
          {option.label}
        </span>
        {option.description && (
          <p className="text-sm text-muted-foreground mt-0.5">{option.description}</p>
        )}
      </div>
      
      <AnimatePresence>
        {isSelected && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0"
          >
            <Check className="w-4 h-4 text-accent-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.button>
));
OptionButton.displayName = "OptionButton";

// Memoized Progress Bar with GPU acceleration
interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = memo(({ current, total }: ProgressBarProps) => {
  // Progress based on completed questions (0% at start)
  const progress = (current / total) * 100;
  
  return (
    <div className="container max-w-2xl mx-auto mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground font-subheading">
          Question {current + 1} sur {total}
        </span>
        <span className="text-sm text-accent font-subheading">{Math.round(progress)}%</span>
      </div>
      <div className="h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full gpu-accelerated transition-gpu"
          style={{ 
            transform: `scaleX(${progress / 100})`,
            transformOrigin: 'left',
            width: '100%'
          }}
        />
      </div>
    </div>
  );
});
ProgressBar.displayName = "ProgressBar";

const TypeformQuiz = ({ onComplete }: TypeformQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [textInput, setTextInput] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const question = QUESTIONS[currentQuestion];
  const isLastQuestion = currentQuestion === QUESTIONS.length - 1;

  // Stable callback for choice selection - avec validation Zod et transition fluide
  const handleOptionSelect = useCallback((value: string) => {
    // Show selection immediately
    setSelectedValue(value);
    setIsTransitioning(true);
    
    const newAnswers = { ...answers, [QUESTIONS[currentQuestion].id]: value };
    setAnswers(newAnswers);
    
    // Delay transition to next question for visual feedback
    setTimeout(() => {
      if (currentQuestion === QUESTIONS.length - 1) {
        // Validate with Zod before completing
        const parsed = QuizAnswersSchema.safeParse(newAnswers);
        if (parsed.success) {
          onComplete(parsed.data as QuizAnswers);
        } else {
          if (process.env.NODE_ENV === "development") {
            console.error("Quiz validation failed:", parsed.error.flatten());
          }
        }
      } else {
        setCurrentQuestion(c => c + 1);
        setSelectedValue(null);
      }
      setIsTransitioning(false);
    }, 400); // 400ms delay for smooth visual feedback
  }, [answers, currentQuestion, onComplete]);

  // Handle text input submission - avec validation Zod
  const handleTextSubmit = useCallback(() => {
    const trimmedValue = textInput.trim();
    if (!trimmedValue) return;
    
    // Sanitize: max 100 chars
    const sanitizedValue = trimmedValue.slice(0, 100);
    const newAnswers = { ...answers, [QUESTIONS[currentQuestion].id]: sanitizedValue };
    setAnswers(newAnswers);
    
    if (currentQuestion === QUESTIONS.length - 1) {
      // Validate with Zod before completing
      const parsed = QuizAnswersSchema.safeParse(newAnswers);
      if (parsed.success) {
        onComplete(parsed.data as QuizAnswers); // Zod a validé, safe cast
      } else {
        if (process.env.NODE_ENV === "development") {
          console.error("Quiz validation failed:", parsed.error.flatten());
        }
      }
    } else {
      setCurrentQuestion(c => c + 1);
      setTextInput("");
    }
  }, [answers, currentQuestion, textInput, onComplete]);

  // Stable callback for back button
  const handlePrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      // Restore previous text input if going back to a text question
      const prevQuestion = QUESTIONS[currentQuestion - 1];
      if (prevQuestion.type === "text") {
        setTextInput((answers[prevQuestion.id] as string) || "");
      }
    }
  }, [currentQuestion, answers]);

  // Memoize current answer to prevent option re-renders
  const currentAnswer = useMemo(() => selectedValue || answers[question.id], [selectedValue, answers, question.id]);

  // Check if text input is valid
  const isTextValid = textInput.trim().length >= 2;

  return (
    <section className="min-h-screen flex flex-col pt-4 pb-6 px-4">
      {/* Progress Bar */}
      <ProgressBar current={currentQuestion} total={QUESTIONS.length} />

      {/* Question Card with AnimatePresence for smooth transitions */}
      <div className="flex-1 flex items-start md:items-center justify-center">
        <div className="container max-w-2xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-5 md:p-8"
            >
              {/* Question */}
              <h2 className="text-lg md:text-2xl font-heading font-bold text-foreground mb-2 text-left">
                {question.question}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 font-subheading text-left">
                {question.subtitle}
              </p>

              {/* Text Input for text-type questions */}
              {question.type === "text" && (
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder={question.placeholder}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    maxLength={100}
                    autoFocus
                    className="h-14 text-lg bg-background/50 border-border focus:border-accent touch-target"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && isTextValid) {
                        handleTextSubmit();
                      }
                    }}
                  />
                  <Button
                    onClick={handleTextSubmit}
                    disabled={!isTextValid}
                    size="lg"
                    className="w-full h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-heading text-lg gap-3 touch-target gpu-accelerated transition-gpu disabled:opacity-50"
                  >
                    Continuer
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              )}

              {/* Options for choice-type questions */}
              {question.type === "choice" && question.options && (
                <div className="space-y-2 md:space-y-3">
                  {question.options.map((option, index) => (
                    <motion.div
                      key={option.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <OptionButton
                        option={option}
                        isSelected={currentAnswer === option.value}
                        onSelect={handleOptionSelect}
                        disabled={isTransitioning}
                      />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Back button */}
              <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0 || isTransitioning}
                  className="gap-2 text-muted-foreground hover:text-foreground touch-target"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Précédent
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TypeformQuiz;