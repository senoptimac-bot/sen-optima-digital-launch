/**
 * Service centralisé pour l'envoi d'emails via EmailJS
 * Évite la duplication de code dans les formulaires
 */
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "@/config/emailjs.config";
import { z } from "zod";

// Schémas de validation
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  subject: z.string().min(1, "Veuillez sélectionner un sujet"),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères").max(2000),
});

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  whatsapp: z.string().trim().regex(/^\+?[0-9\s]{8,20}$/, "Numéro WhatsApp invalide"),
  need: z.string().min(1, "Veuillez sélectionner un besoin"),
});

export const auditSchema = z.object({
  clientName: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  companyName: z.string().trim().min(1, "Nom de l'entreprise requis").max(150),
  whatsapp: z.string().trim().regex(/^\+?[0-9\s]{8,20}$/, "Numéro WhatsApp invalide"),
  sector: z.string().min(1, "Veuillez sélectionner un secteur"),
  ageBusiness: z.string().min(1, "Veuillez sélectionner l'ancienneté"),
  teamSize: z.string().min(1, "Veuillez sélectionner la taille d'équipe"),
  currentRevenue: z.string().min(1, "Veuillez sélectionner le chiffre d'affaires"),
  acquisitionChannel: z.string().min(1, "Veuillez sélectionner un canal"),
  mainProblem: z.string().trim().min(10, "Décrivez votre défi en au moins 10 caractères").max(2000),
  availabilityDay: z.string().min(1, "Veuillez sélectionner un jour"),
  availabilityTime: z.string().min(1, "Veuillez sélectionner un créneau"),
  meetingType: z.string().min(1, "Veuillez sélectionner le type de réunion"),
  // Champs optionnels
  digitalPresence: z.string().max(500).optional(),
  database: z.string().optional(),
  toolsUsed: z.array(z.string()).optional(),
  pastAttempts: z.string().max(2000).optional(),
  revenueGoal: z.string().max(100).optional(),
  marketingBudget: z.string().max(100).optional(),
  branding: z.string().optional(),
  competitors: z.string().max(500).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type BookingFormData = z.infer<typeof bookingSchema>;
export type AuditFormData = z.infer<typeof auditSchema>;

// Types d'erreur EmailJS
interface EmailJSError {
  status?: number;
  text?: string;
}

// Résultat de l'envoi
interface SendResult {
  success: boolean;
  error?: string;
}

/**
 * Génère un message d'erreur user-friendly basé sur le code d'erreur EmailJS
 */
function getErrorMessage(error: EmailJSError): string {
  if (error?.status === 412) {
    return "Erreur de configuration. Veuillez nous contacter directement par WhatsApp.";
  }
  if (error?.status === 400) {
    return "Erreur de formulaire. Veuillez vérifier vos informations.";
  }
  return "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.";
}

/**
 * Envoie un email de contact
 */
export async function sendContactEmail(data: ContactFormData): Promise<SendResult> {
  try {
    // Validation
    const validated = contactSchema.parse(data);
    
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATES.CONTACT,
      validated,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0]?.message || "Données invalides" };
    }
    return { success: false, error: getErrorMessage(error as EmailJSError) };
  }
}

/**
 * Envoie un formulaire d'audit
 */
export async function sendAuditEmail(data: AuditFormData): Promise<SendResult> {
  try {
    // Validation des champs requis
    const validated = auditSchema.parse(data);

    // Préparer les données avec les outils en chaîne
    const templateParams = {
      ...validated,
      toolsUsed: validated.toolsUsed?.join(", ") || "Aucun",
    };

    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATES.BOOKING_AND_AUDIT,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0]?.message || "Données invalides" };
    }
    return { success: false, error: getErrorMessage(error as EmailJSError) };
  }
}

/**
 * Envoie une demande de réservation
 */
export async function sendBookingEmail(data: BookingFormData): Promise<SendResult> {
  try {
    // Validation
    const validated = bookingSchema.parse(data);
    
    await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATES.BOOKING_AND_AUDIT,
      validated,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.errors[0]?.message || "Données invalides" };
    }
    return { success: false, error: getErrorMessage(error as EmailJSError) };
  }
}
