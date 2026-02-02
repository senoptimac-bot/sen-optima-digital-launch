import { z } from "zod";

/**
 * Schéma Zod pour validation runtime des réponses quiz
 * Garantit que toutes les réponses sont présentes et valides avant scoring
 */
export const QuizAnswersSchema = z.object({
  // Qualification (Q0)
  q0_company: z.string().min(1).max(100),
  q0_role: z.enum(["founder", "manager", "employee", "freelance"]),
  
  // Infrastructure (Q1-Q5)
  q1_revenue: z.enum(["less_300k", "300k_1m", "1m_10m", "more_10m"]),
  q2_team: z.enum(["solo", "2_5", "more_5"]),
  q3_channel: z.enum(["whatsapp_only", "social_media", "website", "multi_channel"]),
  q4_data: z.enum(["memory_paper", "excel_notes", "crm_tool"]),
  q5_website: z.enum(["none", "vitrine", "ecommerce", "full_platform"]),
  
  // Strategy & Scalability (Q6-Q10)
  q6_process: z.enum(["manual", "semi_auto", "automated"]),
  q7_marketing: z.enum(["none", "organic_only", "paid_ads", "full_strategy"]),
  q8_payment: z.enum(["cash_only", "mobile_money", "multiple"]),
  q9_growth_blocker: z.enum(["time", "money", "skills", "clarity"]),
  q10_goal: z.enum(["structure", "visibility", "sales", "automation"]),
});

export type ValidatedQuizAnswers = z.infer<typeof QuizAnswersSchema>;
