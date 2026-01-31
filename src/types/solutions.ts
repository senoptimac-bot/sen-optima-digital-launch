export interface LeadData {
  firstName: string;
  email: string;
  whatsapp: string;
  countryCode: string;
}

export interface QuizAnswers {
  // Infrastructure (Q1-Q5)
  q1_revenue: "less_1m" | "1m_10m" | "more_10m";
  q2_team: "solo" | "2_5" | "more_5";
  q3_channel: "whatsapp_only" | "social_media" | "website" | "multi_channel";
  q4_data: "memory_paper" | "excel_notes" | "crm_tool";
  q5_website: "none" | "vitrine" | "ecommerce" | "full_platform";
  
  // Strategy & Scalability (Q6-Q10)
  q6_process: "manual" | "semi_auto" | "automated";
  q7_marketing: "none" | "organic_only" | "paid_ads" | "full_strategy";
  q8_payment: "cash_only" | "mobile_money" | "multiple";
  q9_growth_blocker: "time" | "money" | "skills" | "clarity";
  q10_goal: "structure" | "visibility" | "sales" | "automation";
}

export type Category = "LAUNCHER" | "GROWER" | "CRITICAL_LEADER";

export interface PainPoint {
  id: string;
  title: string;
  description: string;
}

export interface QuizResult {
  score: number;
  category: Category;
  painPoints: PainPoint[];
  shockSentence: string;
  revenueGap: number;
  price: number;
}

export interface WebhookResponse {
  score: number;
  analysis: string;
  financialLosses: string;
  recommendations: string[];
}

export interface FullDiagnosticData {
  lead: LeadData;
  answers: QuizAnswers;
  result: QuizResult;
}
