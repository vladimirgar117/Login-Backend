import './load-env.js';

import { AppError } from '../class/errors.js';
import { ErrorCode } from '../enums/error-code.js';
import { ENV_ERROR_MESSAGES } from '../utils/env-error-messages.js';

// Helpers privados

const getString = (key: string, error: string): string => {
  const value = process.env[key];

  if (!value) {
    throw new AppError(
      error,
      ErrorCode.INTERNAL_ERROR
    );
  }

  return value;
};

const getNumber = (
  key: string,
  errorUndefined: string,
  errorNotNumber: string
): number => {
  const value = getString(key, errorUndefined);
  const num = Number(value);

  if (Number.isNaN(num)) {
    throw new AppError(
      errorNotNumber,
      ErrorCode.INTERNAL_ERROR
    );
  }

  return num;
};

const getRegex = (
  key: string,
  error: string
): RegExp => {
  const value = getString(key, error);

  return new RegExp(value);
};

export const ENV = {
  PORT: getNumber(
    'PORT',
    ENV_ERROR_MESSAGES.PORT_UNDEFINED,
    ENV_ERROR_MESSAGES.PORT_NOT_NUMBER
  ),

  REGEX_EMAIL: getRegex(
    'REGEX_EMAIL',
    ENV_ERROR_MESSAGES.REGEX_EMAIL_UNDEFINED
  ),
} as const;