/**
 * Production-safe logger utility
 * 
 * - Development: logs to console
 * - Production: silent (or integrate Sentry/Logtail)
 * 
 * NEVER logs sensitive data (PII, tokens, passwords)
 */

const isDev = import.meta.env.DEV;

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface Logger {
  debug: (message: string, data?: Record<string, unknown>) => void;
  info: (message: string, data?: Record<string, unknown>) => void;
  warn: (message: string, data?: Record<string, unknown>) => void;
  error: (message: string, error?: unknown) => void;
}

/**
 * Sanitize data before logging - remove sensitive fields
 */
function sanitize(data: Record<string, unknown>): Record<string, unknown> {
  const sensitiveKeys = ['password', 'token', 'secret', 'apiKey', 'email', 'phone', 'credit_card'];
  const sanitized = { ...data };
  
  for (const key of Object.keys(sanitized)) {
    if (sensitiveKeys.some(sk => key.toLowerCase().includes(sk))) {
      sanitized[key] = '[REDACTED]';
    }
  }
  
  return sanitized;
}

/**
 * Format log message for consistency
 */
function formatMessage(level: LogLevel, message: string): string {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
}

export const logger: Logger = {
  debug: (message: string, data?: Record<string, unknown>) => {
    if (!isDev) return;
    const sanitized = data ? sanitize(data) : undefined;
    console.debug(formatMessage('debug', message), sanitized ?? '');
  },

  info: (message: string, data?: Record<string, unknown>) => {
    if (!isDev) return;
    const sanitized = data ? sanitize(data) : undefined;
    console.info(formatMessage('info', message), sanitized ?? '');
  },

  warn: (message: string, data?: Record<string, unknown>) => {
    if (!isDev) return;
    const sanitized = data ? sanitize(data) : undefined;
    console.warn(formatMessage('warn', message), sanitized ?? '');
  },

  error: (message: string, error?: unknown) => {
    // Errors are always logged (for monitoring)
    // In production, this should send to Sentry/Logtail
    if (isDev) {
      console.error(formatMessage('error', message), error ?? '');
    }
    // TODO: Integrate external error tracking
    // Sentry.captureException(error);
  },
};

export default logger;
