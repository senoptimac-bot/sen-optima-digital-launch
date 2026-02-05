/**
 * Service d'envoi des données diagnostic vers Make.com
 * Envoi unique, silencieux, sans blocage UX
 */

import { DiagnosticResult, DiagnosticUserData, MaturityLevel } from "@/types/diagnostic";

// Webhook Make.com (Notion)
const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/rffq61l03fm4nqhdjf01cguysv2m9qkq";

// Mapping niveau → couleur
const LEVEL_COLORS: Record<MaturityLevel, string> = {
  critique: "rouge",
  fragile: "orange",
  structure: "vert",
};

// Mapping niveau → label
const LEVEL_LABELS: Record<MaturityLevel, string> = {
  critique: "Critique",
  fragile: "Fragile",
  structure: "Structuré",
};

interface WebhookPayload {
  nom: string;
  email: string;
  whatsapp: string;
  activite: string;
  score: number;
  niveau: string;
  couleur: string;
  canal: string;
  date: string;
}

/**
 * Envoie les données du diagnostic au webhook Make.com
 * Appel unique, silencieux, non-bloquant
 */
export async function sendDiagnosticToMake(
  userData: DiagnosticUserData,
  result: DiagnosticResult,
  canal: "email" | "whatsapp"
): Promise<void> {
  const payload: WebhookPayload = {
    nom: `${userData.firstName} ${userData.lastName}`,
    email: userData.email,
    whatsapp: userData.phone,
    activite: `${userData.companyName} (${userData.sector})`,
    score: result.percentage,
    niveau: LEVEL_LABELS[result.level],
    couleur: LEVEL_COLORS[result.level],
    canal: canal,
    date: new Date().toISOString(),
  };

  try {
    // Envoi non-bloquant avec timeout de 8 secondes
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    await fetch(MAKE_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    
    // Log discret en développement uniquement
    if (import.meta.env.DEV) {
      console.log("[Webhook] Données envoyées à Make.com");
    }
  } catch (error) {
    // Échec silencieux - ne pas bloquer l'UX
    if (import.meta.env.DEV) {
      console.warn("[Webhook] Erreur d'envoi (non-bloquant):", error);
    }
  }
}
