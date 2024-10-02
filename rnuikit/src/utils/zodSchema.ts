/**
 * Custom Zod configuration
 * This module provides a customized configuration for the Zod validation library, allowing the overriding of properties and methods as needed.
 * All modules requiring Zod validation should import Zod from this module to ensure consistent behavior across the application.
 */
import * as Regex from './regex';
import * as z from 'zod';

// Define Zod schema for validation
const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});
