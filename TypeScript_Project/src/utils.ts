/**
 * Utility helper functions.
 */

/**
 * Returns the current timestamp.
 *
 * @returns Current timestamp in ISO-8601 format.
 */
export function getTimestamp(): string {
  return new Date().toISOString();
}

/**
 * Generates a random identifier.
 *
 * @returns Random identifier.
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2);
}
