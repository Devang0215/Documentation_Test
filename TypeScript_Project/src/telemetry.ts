/**
 * Telemetry support.
 *
 * Contains helper methods for initializing tracing and metrics.
 */

/**
 * Initializes telemetry.
 *
 * @param serviceName Name of the service.
 * @param endpoint OTLP collector endpoint.
 *
 * @example
 * ```ts
 * initTelemetry(
 *     "payment-service",
 *     "http://localhost:4318"
 * );
 * ```
 */
export function initTelemetry(serviceName: string, endpoint: string): void {}
