/**
 * Lightweight logging abstraction.
 * In a production FAANG environment, this would pipe to Sentry, Datadog, or CloudWatch.
 * We abstract it here to keep the bundle size small while maintaining engineering discipline.
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private isProduction = process.env.NODE_ENV === 'production';

  private formatMessage(level: LogLevel, message: string, data?: unknown) {
    const timestamp = new Date().toISOString();
    const payload = data ? JSON.stringify(data) : '';
    return `[${timestamp}] [${level.toUpperCase()}] ${message} ${payload}`;
  }

  info(message: string, data?: unknown) {
    if (!this.isProduction) {
      console.info(this.formatMessage('info', message, data));
    }
  }

  warn(message: string, data?: unknown) {
    console.warn(this.formatMessage('warn', message, data));
  }

  error(message: string, error?: unknown, context?: unknown) {
    // In production, we would send this to Sentry via captureException
    console.error(this.formatMessage('error', message, { error, context }));
  }

  debug(message: string, data?: unknown) {
    if (!this.isProduction) {
      console.debug(this.formatMessage('debug', message, data));
    }
  }
}

export const logger = new Logger();
