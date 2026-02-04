/**
 * Types pour le Diagnostic de Structuration Business Premium
 * 
 * Flow: Landing → Payment → UserInfo → Quiz → Processing → Results
 */

// Données utilisateur collectées APRÈS paiement
export interface DiagnosticUserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  sector: string;
}

// Structure d'une question
export interface DiagnosticQuestion {
  id: string;
  blockId: number;
  blockName: string;
  question: string;
  options: DiagnosticOption[];
}

export interface DiagnosticOption {
  value: "yes" | "partial" | "no";
  label: string;
  score: number;
}

// Réponses au diagnostic (30 questions)
export type DiagnosticAnswers = Record<string, "yes" | "partial" | "no">;

// Niveau de maturité
export type MaturityLevel = "critique" | "fragile" | "structure";

// Résultat du diagnostic
export interface DiagnosticResult {
  score: number;
  maxScore: number;
  percentage: number;
  level: MaturityLevel;
  levelLabel: string;
  synthesis: string;
  blockScores: BlockScore[];
}

export interface BlockScore {
  blockId: number;
  blockName: string;
  score: number;
  maxScore: number;
  percentage: number;
}

// Configuration des prix
export interface PricingConfig {
  normalPrice: number;
  launchPrice: number;
  currency: string;
}

// État du flow diagnostic - ordre strict
export type DiagnosticStep = "landing" | "payment" | "userinfo" | "quiz" | "processing" | "results";
