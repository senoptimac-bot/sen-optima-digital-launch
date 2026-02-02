import { WEBHOOK_URL, WEBHOOK_TIMEOUT_MS } from "@/config/business";

interface WebhookResult {
  success: boolean;
  error?: string;
}

/**
 * Envoie des données au webhook avec gestion d'erreur robuste
 * - Timeout configurable
 * - Retour explicite du statut
 * - Logging structuré (remplacer par Sentry/Logtail en prod)
 */
export async function sendWebhook(payload: unknown): Promise<WebhookResult> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS);

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      // Log pour monitoring (à remplacer par logger externe en prod)
      if (process.env.NODE_ENV === "development") {
        console.error(`Webhook failed: ${response.status} ${response.statusText}`);
      }
      return { 
        success: false, 
        error: `Erreur serveur (${response.status})` 
      };
    }

    return { success: true };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Erreur inconnue";
    const isTimeout = err instanceof DOMException && err.name === "AbortError";
    
    // Log pour monitoring
    if (process.env.NODE_ENV === "development") {
      console.error("Webhook error:", isTimeout ? "Timeout" : errorMessage);
    }

    return { 
      success: false, 
      error: isTimeout ? "Délai d'attente dépassé" : errorMessage 
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
