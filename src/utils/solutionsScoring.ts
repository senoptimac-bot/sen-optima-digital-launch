import { QuizAnswers, QuizResult, Category, PainPoint } from "@/types/solutions";

// Scoring weights for each answer
const INFRASTRUCTURE_SCORES: Record<string, Record<string, number>> = {
  q1_revenue: { less_300k: 3, "300k_1m": 8, "1m_10m": 15, more_10m: 25 },
  q2_team: { solo: 5, "2_5": 12, more_5: 18 },
  q3_channel: { whatsapp_only: 2, social_media: 8, website: 15, multi_channel: 20 },
  q4_data: { memory_paper: 2, excel_notes: 8, crm_tool: 18 },
  q5_website: { none: 0, vitrine: 8, ecommerce: 15, full_platform: 20 },
};

const STRATEGY_SCORES: Record<string, Record<string, number>> = {
  q6_process: { manual: 3, semi_auto: 12, automated: 20 },
  q7_marketing: { none: 0, organic_only: 8, paid_ads: 15, full_strategy: 20 },
  q8_payment: { cash_only: 3, mobile_money: 10, multiple: 18 },
  q9_growth_blocker: { time: 8, money: 10, skills: 12, clarity: 5 },
  q10_goal: { structure: 10, visibility: 10, sales: 10, automation: 10 },
};

// Revenue mapping for calculations
const REVENUE_MAP: Record<string, number> = {
  less_300k: 150000,
  "300k_1m": 650000,
  "1m_10m": 5000000,
  more_10m: 15000000,
};

// Shock sentences per category
const SHOCK_SENTENCES: Record<Category, string> = {
  LAUNCHER: "Vous construisez sur du sable. Sans structure, votre idée restera un hobby coûteux.",
  GROWER: "Vous êtes l'esclave de votre succès. Votre système actuel va casser sous la prochaine vague de clients.",
  CRITICAL_LEADER: "Votre retard technologique finance la croissance de vos concurrents plus agiles.",
};

// Pain point definitions
const PAIN_POINTS: Record<string, PainPoint> = {
  cognitive_saturation: {
    id: "cognitive_saturation",
    title: "Saturation Cognitive du Fondateur",
    description: "Vous êtes le goulot d'étranglement. Chaque client passe par vous, et votre cerveau est la seule base de données.",
  },
  institutional_amnesia: {
    id: "institutional_amnesia",
    title: "Amnésie Institutionnelle",
    description: "Risque élevé de perte de données clients. Si votre téléphone tombe en panne, votre historique client disparaît.",
  },
  competitive_invisibility: {
    id: "competitive_invisibility",
    title: "Invisibilité Concurrentielle",
    description: "Vos concurrents avec un site web captent l'autorité que vous perdez. Vous êtes invisible pour les clients qui cherchent sur Google.",
  },
  process_fragility: {
    id: "process_fragility",
    title: "Fragilité des Processus",
    description: "Vos opérations reposent sur des processus manuels. Chaque erreur humaine coûte du temps et de l'argent.",
  },
};

function calculateScore(answers: QuizAnswers): number {
  let infrastructureScore = 0;
  let strategyScore = 0;

  // Calculate infrastructure score (50%)
  Object.entries(INFRASTRUCTURE_SCORES).forEach(([key, values]) => {
    const answerKey = key as keyof QuizAnswers;
    const answer = answers[answerKey] as string;
    infrastructureScore += values[answer] || 0;
  });

  // Calculate strategy score (50%)
  Object.entries(STRATEGY_SCORES).forEach(([key, values]) => {
    const answerKey = key as keyof QuizAnswers;
    const answer = answers[answerKey] as string;
    strategyScore += values[answer] || 0;
  });

  // Normalize to 100
  const maxInfra = 25 + 18 + 20 + 18 + 20; // 101
  const maxStrategy = 20 + 20 + 18 + 12 + 10; // 80
  
  const normalizedInfra = (infrastructureScore / maxInfra) * 50;
  const normalizedStrategy = (strategyScore / maxStrategy) * 50;
  
  return Math.round(normalizedInfra + normalizedStrategy);
}

function determineCategory(answers: QuizAnswers): Category {
  const { q1_revenue, q2_team, q6_process } = answers;

  // LAUNCHER: Revenue < 1M AND Team = 1
  if ((q1_revenue === "less_300k" || q1_revenue === "300k_1m") && q2_team === "solo") {
    return "LAUNCHER";
  }

  // CRITICAL LEADER: Revenue > 10M AND Process = Manual
  if (q1_revenue === "more_10m" && q6_process === "manual") {
    return "CRITICAL_LEADER";
  }

  // GROWER: Revenue 1M-10M OR Team > 2
  if (q1_revenue === "1m_10m" || q2_team === "2_5" || q2_team === "more_5") {
    return "GROWER";
  }

  // Default to LAUNCHER
  return "LAUNCHER";
}

function identifyPainPoints(answers: QuizAnswers): PainPoint[] {
  const painPoints: PainPoint[] = [];

  // Channel = WhatsApp Only -> Saturation Cognitive
  if (answers.q3_channel === "whatsapp_only") {
    painPoints.push(PAIN_POINTS.cognitive_saturation);
  }

  // Data = Memory/Paper -> Amnésie Institutionnelle
  if (answers.q4_data === "memory_paper") {
    painPoints.push(PAIN_POINTS.institutional_amnesia);
  }

  // Website = None/Vitrine -> Invisibilité Concurrentielle
  if (answers.q5_website === "none" || answers.q5_website === "vitrine") {
    painPoints.push(PAIN_POINTS.competitive_invisibility);
  }

  // Process = Manual -> Fragilité des Processus
  if (answers.q6_process === "manual") {
    painPoints.push(PAIN_POINTS.process_fragility);
  }

  return painPoints;
}

function calculateRevenueGap(answers: QuizAnswers): number {
  const revenue = REVENUE_MAP[answers.q1_revenue] || 500000;
  // 20% of reported revenue
  return Math.round(revenue * 0.2);
}

// Dynamic pricing based on revenue segment
function determinePrice(answers: QuizAnswers): number {
  if (answers.q1_revenue === "less_300k") return 35000;
  if (answers.q1_revenue === "300k_1m") return 50000;
  if (answers.q1_revenue === "1m_10m") return 75000;
  return 100000; // more_10m
}

export function calculateResults(answers: QuizAnswers): QuizResult {
  const score = calculateScore(answers);
  const category = determineCategory(answers);
  const painPoints = identifyPainPoints(answers);
  const shockSentence = SHOCK_SENTENCES[category];
  const revenueGap = calculateRevenueGap(answers);
  const price = determinePrice(answers);

  return {
    score,
    category,
    painPoints,
    shockSentence,
    revenueGap,
    price,
  };
}
