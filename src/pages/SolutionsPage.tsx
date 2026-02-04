import { useState, useCallback } from "react";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import { 
  DiagnosticLanding, 
  DiagnosticPayment,
  DiagnosticUserForm,
  DiagnosticQuiz, 
  DiagnosticProcessing, 
  DiagnosticResults 
} from "@/components/diagnostic";
import { DiagnosticAnswers, DiagnosticResult, DiagnosticStep, DiagnosticUserData } from "@/types/diagnostic";
import { calculateDiagnosticResult } from "@/utils/diagnosticScoring";

/**
 * Page Solutions - Diagnostic de Structuration Business Premium
 * 
 * Flow strict et linéaire :
 * 1. Landing - Présentation du diagnostic avec prix
 * 2. Payment - Paiement Wave / Orange Money
 * 3. UserInfo - Formulaire informations utilisateur
 * 4. Quiz - 30 questions (5 blocs de 6)
 * 5. Processing - Animation d'analyse
 * 6. Results - Score + niveau + synthèse + CTA
 */
const SolutionsPage = () => {
  // État unique du flow - source de vérité
  const [currentStep, setCurrentStep] = useState<DiagnosticStep>("landing");
  
  // Données collectées au fil du parcours
  const [userData, setUserData] = useState<DiagnosticUserData | null>(null);
  const [answers, setAnswers] = useState<DiagnosticAnswers | null>(null);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  // Landing → Payment
  const handleStart = useCallback(() => {
    setCurrentStep("payment");
  }, []);

  // Payment → UserInfo
  const handlePaymentComplete = useCallback(() => {
    setCurrentStep("userinfo");
  }, []);

  // UserInfo → Quiz
  const handleUserInfoComplete = useCallback((data: DiagnosticUserData) => {
    setUserData(data);
    setCurrentStep("quiz");
  }, []);

  // Quiz → Processing → Results
  const handleQuizComplete = useCallback((quizAnswers: DiagnosticAnswers) => {
    setAnswers(quizAnswers);
    
    // Calculer le résultat
    const diagnosticResult = calculateDiagnosticResult(quizAnswers);
    setResult(diagnosticResult);
    
    // Afficher l'animation de processing
    setCurrentStep("processing");
    
    // Après 8 secondes, afficher les résultats
    setTimeout(() => {
      setCurrentStep("results");
    }, 8000);
  }, []);

  const seo = SEO_CONFIG.solutions;

  return (
    <>
      <SEOHead 
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        keywords={seo.keywords}
      />
      
      <div className="min-h-screen bg-background">
        {currentStep === "landing" && (
          <DiagnosticLanding onStart={handleStart} />
        )}
        
        {currentStep === "payment" && (
          <DiagnosticPayment onPaymentComplete={handlePaymentComplete} />
        )}
        
        {currentStep === "userinfo" && (
          <DiagnosticUserForm onComplete={handleUserInfoComplete} />
        )}
        
        {currentStep === "quiz" && (
          <DiagnosticQuiz onComplete={handleQuizComplete} />
        )}
        
        {currentStep === "processing" && (
          <DiagnosticProcessing />
        )}
        
        {currentStep === "results" && result && (
          <DiagnosticResults result={result} userData={userData} />
        )}
      </div>
    </>
  );
};

export default SolutionsPage;
