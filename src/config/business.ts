/**
 * Constantes métier centralisées
 * Une seule source de vérité pour les valeurs business-critical
 */

// WhatsApp
export const WHATSAPP_NUMBER = "221781926969";
export const WHATSAPP_BASE_URL = "https://wa.me";

// Webhook
export const WEBHOOK_URL = "https://hook.eu1.make.com/safhwh4pa7vt9nadqq99gdr7lq9rnqbr";
export const WEBHOOK_TIMEOUT_MS = 8000;

// Pricing tiers (FCFA)
export const PRICING = {
  TIER_1: 35000,  // less_300k
  TIER_2: 50000,  // 300k_1m
  TIER_3: 75000,  // 1m_10m
  TIER_4: 100000, // more_10m
} as const;

/**
 * Génère l'URL WhatsApp avec message encodé
 */
export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
