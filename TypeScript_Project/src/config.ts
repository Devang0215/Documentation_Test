/**
 * Configuration options for the logger.
 */

/**
 * Represents the configuration used by the logger.
 */
export interface LoggerConfig {
  /**
   * Name of the application.
   */
  serviceName: string;

  /**
   * Current environment.
   *
   * @defaultValue "development"
   */
  environment?: string;

  /**
   * Enable debug logging.
   *
   * @defaultValue false
   */
  debug?: boolean;
}
