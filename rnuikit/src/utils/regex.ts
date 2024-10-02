/**
 * Validation Regex patterns
 *
 * Regular expression patterns for various validations.
 * All modules requiring Regex should import Regex from this module to ensure consistent behavior across the application.
 */

export const email = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const phoneNumber = /^\+(?:[0-9] ?){6,14}[0-9]$/;
export const urlRegex =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/;
export const specialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

/**
 * How to use:
 * To use Regex in your modules
 * Example:
 *
 * ```
 * import * as Regex from '@utils/regexUtils';
 *
 * Regex.email.test(example.com)
 * ```
 */
