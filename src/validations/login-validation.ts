import { ValError } from '../class/errors.js';
import { REGEX_EMAIL } from '../config/regex.js';
import { ErrorCode } from '../enums/error-code.js';
import type { LoginBody } from '../interfaces/login-body.js';
import type { LoginErrors } from '../interfaces/login-errors.js';
import { USER_ERROR_MESSAGES } from '../utils/error-messages.ts';
import { isObject, isString } from '../utils/functions.ts';

export const validateLogin = (body: unknown): void => {
  // Validar que sea un objeto
  if (!isObject(body)) {
    throw new ValError<LoginBody>(USER_ERROR_MESSAGES.INVALID_BODY, ErrorCode.INVALID_ENTITY);
  }

  const errors: LoginErrors<LoginBody> = {};

  const username = body.username;
  const password = body.password;

  // Validación username (email)
  if (!isString(username) || username.trim() === '') {
    errors.username = USER_ERROR_MESSAGES.USERNAME_EMPTY;
  } else if (!REGEX_EMAIL.test(username)) {
    errors.username = USER_ERROR_MESSAGES.USERNAME_FORMAT;
  }

  // Validación password
  if (!isString(password) || password === '') {
    errors.password = USER_ERROR_MESSAGES.PASSWORD_EMPTY;
  } else if (password.length < 4 || password.length > 16) {
    errors.password = USER_ERROR_MESSAGES.PASSWORD_LENGTH;
  }

  if (Object.keys(errors).length > 0) {
    throw new ValError<LoginBody>(
      USER_ERROR_MESSAGES.VALIDATION_ERRORS,
      ErrorCode.INVALID_ENTITY,
      errors
    );
  }
};
