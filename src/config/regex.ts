import './load-env.js';
import { USER_ERROR_MESSAGES } from '../utils/error-messages.js';
import { EnvError } from '../class/env-error.js';


const rawRegex = process.env.REGEX_EMAIL;

if (!rawRegex) {
  throw new EnvError(USER_ERROR_MESSAGES.REGEX_EMAIL_UNDEFINED);
}

// Limpia posibles / al inicio y final
const cleaned = rawRegex.replace(/^\/|\/$/g, "");

// Exporta el RegExp ya construido
export const REGEX_EMAIL: RegExp = new RegExp(cleaned);
