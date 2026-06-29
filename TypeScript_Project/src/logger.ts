/**
 * Logger implementation.
 *
 * Provides methods for writing logs with different severity levels.
 */

/**
 * Represents a logger.
 *
 * @example
 * ```ts
 * const logger = new Logger();
 *
 * logger.info("Application started");
 * ```
 */
export class Logger {
  /**
   * Writes an informational log.
   *
   * @param message Message to be logged.
   */
  info(message: string): void {
    console.log(message);
  }

  /**
   * Writes a warning log.
   *
   * @param message Warning message.
   */
  warn(message: string): void {
    console.warn(message);
  }

  /**
   * Writes an error log.
   *
   * @param message Error message.
   */
  error(message: string): void {
    console.error(message);
  }
}
