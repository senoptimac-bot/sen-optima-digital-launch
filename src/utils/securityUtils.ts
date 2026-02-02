/**
 * Security utilities for input validation and sanitization
 * Defense-in-depth approach for client-side protection
 */

import { z } from 'zod';

/**
 * Honeypot field name - used to detect bots
 * Bots typically fill all fields, humans skip hidden ones
 */
export const HONEYPOT_FIELD = 'website_url_hp';

/**
 * Rate limiting state (client-side - basic protection)
 * For production, implement server-side rate limiting
 */
const submissionTimestamps: Map<string, number[]> = new Map();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_SUBMISSIONS_PER_WINDOW = 3;

/**
 * Check if submission should be rate limited
 */
export function isRateLimited(formId: string): boolean {
  const now = Date.now();
  const timestamps = submissionTimestamps.get(formId) || [];
  
  // Filter to only recent submissions
  const recentTimestamps = timestamps.filter(
    ts => now - ts < RATE_LIMIT_WINDOW_MS
  );
  
  // Update stored timestamps
  submissionTimestamps.set(formId, recentTimestamps);
  
  return recentTimestamps.length >= MAX_SUBMISSIONS_PER_WINDOW;
}

/**
 * Record a form submission
 */
export function recordSubmission(formId: string): void {
  const timestamps = submissionTimestamps.get(formId) || [];
  timestamps.push(Date.now());
  submissionTimestamps.set(formId, timestamps);
}

/**
 * Validate honeypot field - should be empty
 * Returns true if form is likely from a bot
 */
export function isBot(honeypotValue: string | undefined): boolean {
  return !!honeypotValue && honeypotValue.trim().length > 0;
}

/**
 * Sanitize text input - remove potential XSS vectors
 */
export function sanitizeText(input: string): string {
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim();
}

/**
 * Email validation schema with strict rules
 */
export const emailSchema = z
  .string()
  .trim()
  .min(1, 'Email requis')
  .max(255, 'Email trop long')
  .email('Format email invalide')
  .refine(
    (email) => !email.includes('..'),
    'Format email invalide'
  );

/**
 * Phone validation schema for Senegalese numbers
 */
export const phoneSchema = z
  .string()
  .trim()
  .regex(
    /^(\+221|221)?[0-9]{9}$/,
    'Numéro sénégalais invalide (ex: 781234567)'
  );

/**
 * Name validation schema
 */
export const nameSchema = z
  .string()
  .trim()
  .min(2, 'Nom trop court')
  .max(100, 'Nom trop long')
  .regex(
    /^[a-zA-ZÀ-ÿ\s'-]+$/,
    'Nom contient des caractères invalides'
  );

/**
 * Message/textarea validation schema
 */
export const messageSchema = z
  .string()
  .trim()
  .min(10, 'Message trop court (min 10 caractères)')
  .max(2000, 'Message trop long (max 2000 caractères)');

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema.optional(),
  company: z.string().trim().max(100).optional(),
  message: messageSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Validate and sanitize form data
 * Returns sanitized data or null if invalid
 */
export function validateContactForm(data: unknown): ContactFormData | null {
  const result = contactFormSchema.safeParse(data);
  
  if (!result.success) {
    return null;
  }
  
  // Additional sanitization
  return {
    ...result.data,
    name: sanitizeText(result.data.name),
    message: sanitizeText(result.data.message),
    company: result.data.company ? sanitizeText(result.data.company) : undefined,
  };
}
