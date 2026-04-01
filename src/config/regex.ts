

const rawRegex = process.env.REGEX_EMAIL;

if (!rawRegex) {
  throw new Error('La variable "REGEX_EMAIL" no está definida');
}

// Limpia posibles / al inicio y final
const cleaned = rawRegex.replace(/^\/|\/$/g, "");

// Exporta el RegExp ya construido
export const REGEX_EMAIL: RegExp = new RegExp(cleaned);