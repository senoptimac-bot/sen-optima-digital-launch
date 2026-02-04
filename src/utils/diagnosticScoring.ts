/**
 * Système de scoring pour le Diagnostic de Structuration Business
 */

import { DiagnosticAnswers, DiagnosticResult, MaturityLevel, BlockScore } from "@/types/diagnostic";
import { DIAGNOSTIC_QUESTIONS, QUESTIONS_PER_BLOCK, TOTAL_BLOCKS } from "@/config/diagnostic";

// Scores par réponse
const SCORE_MAP: Record<string, number> = {
  yes: 3,
  partial: 2,
  no: 1,
};

/**
 * Calcule le score total et par bloc
 */
export function calculateDiagnosticResult(answers: DiagnosticAnswers): DiagnosticResult {
  const maxScore = DIAGNOSTIC_QUESTIONS.length * 3; // 30 questions × 3 points max = 90
  
  // Calculer le score total
  let totalScore = 0;
  Object.values(answers).forEach((answer) => {
    totalScore += SCORE_MAP[answer] || 0;
  });

  // Calculer les scores par bloc
  const blockScores: BlockScore[] = [];
  
  for (let blockId = 1; blockId <= TOTAL_BLOCKS; blockId++) {
    const blockQuestions = DIAGNOSTIC_QUESTIONS.filter(q => q.blockId === blockId);
    const blockMaxScore = blockQuestions.length * 3;
    let blockScore = 0;
    
    blockQuestions.forEach(q => {
      const answer = answers[q.id];
      if (answer) {
        blockScore += SCORE_MAP[answer];
      }
    });

    blockScores.push({
      blockId,
      blockName: blockQuestions[0]?.blockName || `Bloc ${blockId}`,
      score: blockScore,
      maxScore: blockMaxScore,
      percentage: Math.round((blockScore / blockMaxScore) * 100),
    });
  }

  // Calculer le pourcentage global
  const percentage = Math.round((totalScore / maxScore) * 100);

  // Déterminer le niveau de maturité
  const { level, levelLabel } = determineMaturityLevel(percentage);

  // Générer la phrase de synthèse
  const synthesis = generateSynthesis(percentage, level, blockScores);

  return {
    score: totalScore,
    maxScore,
    percentage,
    level,
    levelLabel,
    synthesis,
    blockScores,
  };
}

/**
 * Détermine le niveau de maturité selon le score
 */
function determineMaturityLevel(percentage: number): { level: MaturityLevel; levelLabel: string } {
  if (percentage < 40) {
    return { level: "critique", levelLabel: "Critique" };
  } else if (percentage < 70) {
    return { level: "fragile", levelLabel: "Fragile" };
  } else {
    return { level: "structure", levelLabel: "Structuré" };
  }
}

/**
 * Génère une phrase de synthèse personnalisée
 */
function generateSynthesis(percentage: number, level: MaturityLevel, blockScores: BlockScore[]): string {
  // Trouver le bloc le plus faible
  const weakestBlock = blockScores.reduce((prev, curr) => 
    prev.percentage < curr.percentage ? prev : curr
  );

  const syntheses: Record<MaturityLevel, string> = {
    critique: `Votre activité présente des faiblesses structurelles significatives. Le pilier "${weakestBlock.blockName}" nécessite une attention prioritaire. Sans intervention, ces lacunes continueront de freiner votre croissance.`,
    fragile: `Votre entreprise a des fondations, mais des zones de fragilité persistent. Le pilier "${weakestBlock.blockName}" constitue votre principal levier d'amélioration. Avec un travail ciblé, vous pouvez passer au niveau supérieur.`,
    structure: `Votre activité dispose de bases solides. Votre marge de progression se situe principalement sur le pilier "${weakestBlock.blockName}". Un accompagnement stratégique vous permettrait d'optimiser vos performances.`,
  };

  return syntheses[level];
}
