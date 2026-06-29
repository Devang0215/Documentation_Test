/**
 * Shared type definitions.
 */

/**
 * Available log levels.
 */
export enum LogLevel {
  /**
   * Debug messages.
   */
  DEBUG,

  /**
   * Informational messages.
   */
  INFO,

  /**
   * Warning messages.
   */
  WARN,

  /**
   * Error messages.
   */
  ERROR,
}

/**
 * Represents a log entry.
 */
export interface LogEntry {
  /**
   * Log message.
   */
  message: string;

  /**
   * Log level.
   */
  level: LogLevel;

  /**
   * Time of log creation.
   */
  timestamp: Date;
}
