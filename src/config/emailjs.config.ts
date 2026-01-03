/**
 * ============================================================================
 * CONFIGURATION EMAILJS - Sen'Optima Consulting
 * ============================================================================
 * 
 * Email de réception : Senoptimac@gmail.com
 * 
 * GUIDE DE CONFIGURATION :
 * 1. Créez un compte sur https://www.emailjs.com/ (gratuit jusqu'à 200 emails/mois)
 * 2. Dans EmailJS Dashboard > Email Services :
 *    - Ajoutez Gmail comme service
 *    - Connectez votre compte Senoptimac@gmail.com
 * 3. Créez 3 templates d'email (voir détails ci-dessous)
 * 4. Remplacez les valeurs ci-dessous par vos identifiants EmailJS
 * 
 * ============================================================================
 */

// ⚠️ REMPLACEZ CES VALEURS APRÈS AVOIR CONFIGURÉ EMAILJS
export const EMAILJS_CONFIG = {
  // Clé publique EmailJS
  // 📍 Où la trouver : Dashboard EmailJS > Account > General > API Keys > Public Key
  PUBLIC_KEY: "TnO3ze86GsUS-Uldy",
  
  // Service ID
  // 📍 Où le trouver : Dashboard EmailJS > Email Services > Votre service Gmail > Service ID
  SERVICE_ID: "service_7mb0lzd",
  
  // Template IDs (2 templates suffisent)
  TEMPLATES: {
    // Template 1 : Pour le formulaire de contact
    CONTACT: "template_fp5gjwk",
    // Template 2 : Pour la réservation d'appel et le diagnostic/audit
    BOOKING_AND_AUDIT: "template_kx2ariq",
  },
  
  // Email de réception (configuré dans le service Gmail)
  RECEIVING_EMAIL: "senoptimac@gmail.com",
} as const;

/**
 * ============================================================================
 * CONFIGURATION DES TEMPLATES EMAILJS
 * ============================================================================
 * 
 * Vous avez 2 templates configurés :
 * 
 * TEMPLATE 1 (template_fp5gjwk) : Formulaire de Contact
 * ----------------------------------
 * Utilisé par : ContactPage
 * Variables utilisées : {{name}}, {{email}}, {{subject}}, {{message}}
 * 
 * TEMPLATE 2 (template_kx2ariq) : Réservation et Diagnostic
 * ------------------------------------
 * Utilisé par : BookingModal ET AuditForm
 * 
 * Pour BookingModal : {{name}}, {{whatsapp}}, {{need}}
 * Pour AuditForm : Toutes les variables du diagnostic (voir AuditForm.tsx)
 * 
 * ⚠️ IMPORTANT : Assurez-vous que le template_kx2ariq supporte toutes les
 * variables nécessaires pour les deux formulaires, ou EmailJS ignorera
 * les variables non définies dans le template.
 * 
 * ============================================================================
 */
