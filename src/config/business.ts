/**
 * Constantes métier centralisées
 * Une seule source de vérité pour les valeurs business-critical
 */

// WhatsApp
export const WHATSAPP_NUMBER = "221781926969";
export const WHATSAPP_BASE_URL = "https://wa.me";

/**
 * Génère l'URL WhatsApp avec message encodé
 */
export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
