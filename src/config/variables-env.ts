import './load-env.js';
import { ENV_ERRORS_MESSAGES } from '../utils/env-error-messages.js';
import { EnvError } from '../class/env-error.js';


// Helpers privados
const getString = (key: string, error: string): string => {
  const value = process.env[key];
  if (!value) throw new EnvError(error);
  return value;
};

const getNumber = (key: string, errorUndefined: string, errorNaN: string): number => {
  const value = getString(key, errorUndefined);
  const num = Number(value);
  if (Number.isNaN(num)) throw new EnvError(errorNaN);
  return num;
};

const getRegex = (key: string, error: string): RegExp => {
  const value = getString(key, error);
  const cleaned = value.replace(/^\/|\/$/g, "");
  return new RegExp(cleaned);
};


export const ENV = {
  PORT: getNumber(
    "PORT",
    ENV_ERRORS_MESSAGES.PORT_UNDEFINED,
    ENV_ERRORS_MESSAGES.PORT_NOT_NUMBER
  ),

  REGEX_EMAIL: getRegex(
    "REGEX_EMAIL",
    ENV_ERRORS_MESSAGES.REGEX_EMAIL_UNDEFINED
  ),
} as const;