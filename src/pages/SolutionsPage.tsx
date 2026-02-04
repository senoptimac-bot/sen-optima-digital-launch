import { useState, useCallback } from "react";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import { DiagnosticLanding, DiagnosticQuiz, DiagnosticProcessing, DiagnosticResults } from "@/components/diagnostic";
import { DiagnosticAnswers, DiagnosticResult, DiagnosticStep } from "@/types/diagnostic";
import { calculateDiagnosticResult } from "@/utils/diagnosticScoring";

/**
 * Page Solutions - Diagnostic de Structuration Business Premium
 * 
 * Flow:
 * 1. Landing - Présentation du diagnostic avec prix
 * 2. Quiz - 30 questions (5 blocs de 6)
 * 3. Processing - Animation d'analyse
 * 4. Results - Score + niveau + synthèse + CTA appel
 * 
 * Note: Le paiement sera intégré ultérieurement via Make.com
 * Pour l'instant, le flow passe directement au quiz après le landing.
 */
const SolutionsPage = () => {
  const [currentStep, setCurrentStep] = useState<DiagnosticStep>("landing");
  const [answers, setAnswers] = useState<DiagnosticAnswers | null>(null);
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  // Landing → Quiz (paiement à intégrer plus tard)
  const handleStart = useCallback(() => {
    // TODO: Intégrer le paiement PayTech/Make.com ici
    // Pour l'instant, passage direct au quiz
    setCurrentStep("quiz");
  }, []);

  // Quiz terminé → Processing → Results
  const handleQuizComplete = useCallback((quizAnswers: DiagnosticAnswers) => {
    setAnswers(quizAnswers);
    
    // Calculer le résultat
    const diagnosticResult = calculateDiagnosticResult(quizAnswers);
    setResult(diagnosticResult);
    
    // Afficher l'animation de processing
    setCurrentStep("processing");
    
    // Après 8-10 secondes, afficher les résultats
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
        
        {currentStep === "quiz" && (
          <DiagnosticQuiz onComplete={handleQuizComplete} />
        )}
        
        {currentStep === "processing" && (
          <DiagnosticProcessing />
        )}
        
        {currentStep === "results" && result && (
          <DiagnosticResults result={result} />
        )}
      </div>
    </>
  );
};

export default SolutionsPage;
