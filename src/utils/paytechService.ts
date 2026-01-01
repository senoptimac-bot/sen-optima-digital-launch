/**
 * PayTech.sn Payment Service
 * 
 * CONFIGURATION:
 * Pour activer les paiements réels, remplacez les valeurs ci-dessous par vos clés API PayTech.
 * Obtenez vos clés sur https://paytech.sn/dashboard
 * 
 * IMPORTANT: Ne jamais exposer API_SECRET côté client en production.
 * Utilisez une Edge Function Supabase pour sécuriser l'appel API.
 */

// TODO: Remplacer par vos vraies clés API PayTech
const PAYTECH_CONFIG = {
  API_KEY: "VOTRE_API_KEY_ICI",
  API_SECRET: "VOTRE_API_SECRET_ICI",
  BASE_URL: "https://paytech.sn/api/payment/request-payment",
  // URL de callback après paiement réussi
  SUCCESS_URL: `${window.location.origin}/merci`,
  CANCEL_URL: `${window.location.origin}/diagnostics`,
};

export interface PaymentItem {
  name: string;
  price: number; // Prix en FCFA (ex: 20000)
  description?: string;
}

export interface PaymentResponse {
  success: boolean;
  redirect_url?: string;
  token?: string;
  error?: string;
}

/**
 * Initie un paiement via PayTech.sn
 * 
 * En mode démo: Simule un paiement réussi après 2 secondes
 * En production: Effectue une vraie requête vers l'API PayTech
 * 
 * @param item - L'article à payer (nom, prix, description)
 * @returns Promise avec l'URL de redirection ou erreur
 */
export const initiatePayment = async (item: PaymentItem): Promise<PaymentResponse> => {
  // === MODE DÉMO ===
  // Simulation d'un paiement réussi pour la démonstration
  // Supprimez ce bloc et décommentez le code de production ci-dessous
  
  return new Promise((resolve) => {
    console.log(`[PayTech Demo] Initialisation du paiement pour: ${item.name}`);
    console.log(`[PayTech Demo] Montant: ${item.price} FCFA`);
    
    // Simule un délai de traitement de 2 secondes
    setTimeout(() => {
      console.log("[PayTech Demo] Paiement simulé avec succès!");
      resolve({
        success: true,
        redirect_url: PAYTECH_CONFIG.SUCCESS_URL,
        token: `DEMO_${Date.now()}`,
      });
    }, 2000);
  });

  // === MODE PRODUCTION ===
  // Décommentez ce code une fois que vous avez vos clés API
  /*
  try {
    const payload = {
      item_name: item.name,
      item_price: item.price,
      currency: "XOF",
      ref_command: `CMD_${Date.now()}`,
      command_name: item.description || item.name,
      env: "prod", // "test" pour le mode sandbox
      success_url: PAYTECH_CONFIG.SUCCESS_URL,
      cancel_url: PAYTECH_CONFIG.CANCEL_URL,
      ipn_url: `${window.location.origin}/api/paytech-webhook`, // Webhook pour notifications
    };

    const response = await fetch(PAYTECH_CONFIG.BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API_KEY": PAYTECH_CONFIG.API_KEY,
        "API_SECRET": PAYTECH_CONFIG.API_SECRET,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (data.success === 1) {
      return {
        success: true,
        redirect_url: data.redirect_url,
        token: data.token,
      };
    } else {
      return {
        success: false,
        error: data.message || "Erreur lors de l'initialisation du paiement",
      };
    }
  } catch (error) {
    console.error("[PayTech] Erreur:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Erreur de connexion au service de paiement",
    };
  }
  */
};

/**
 * Vérifie le statut d'un paiement
 * Utile pour les webhooks/IPN
 */
export const verifyPayment = async (token: string): Promise<boolean> => {
  // TODO: Implémenter la vérification de paiement avec l'API PayTech
  console.log(`[PayTech] Vérification du token: ${token}`);
  return true;
};
