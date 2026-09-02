import { ENV } from "../config/variables-env.js";

import { AppError } from '../class/errors.js';

import { ErrorCode } from '../enums/error-code.js';
import type { LoginBody } from '../interfaces/login-body.js';
import type { FieldErrors } from '../interfaces/field-errors.js';
import { USER_ERROR_MESSAGES } from '../utils/user-error-messages.js';
import { API_ERROR_MESSAGES } from "../utils/api-error-messages.js";
import { isObject, isString } from '../utils/functions.js';

export const validateLogin = (body: unknown): void => {
  // Validar que sea un objeto
  if (!isObject(body)) {
    throw new AppError(API_ERROR_MESSAGES.INVALID_BODY, ErrorCode.INVALID_ENTITY);
  }

  const errors: FieldErrors<LoginBody> = {};

  const username = body.username;
  const password = body.password;

  // Validación username (email)
 if (!isString(username)) {
    errors.username = USER_ERROR_MESSAGES.USERNAME.TYPE;
} else if (username.trim() === '') {
    errors.username = USER_ERROR_MESSAGES.USERNAME.EMPTY;
} else if (!ENV.REGEX_EMAIL.test(username)) {
    errors.username = USER_ERROR_MESSAGES.USERNAME.INVALID;
}

  // Validación password
 if (!isString(password)) {
    errors.password = USER_ERROR_MESSAGES.PASSWORD.TYPE;
} else if (password.trim() === '') {
    errors.password = USER_ERROR_MESSAGES.PASSWORD.EMPTY;
} else if (password.length < 4 || password.length > 16) {
    errors.password = USER_ERROR_MESSAGES.PASSWORD.INVALID;
}

  if (Object.keys(errors).length > 0) {
    throw new AppError(
      USER_ERROR_MESSAGES.VALIDATION_ERRORS,
      ErrorCode.INVALID_ENTITY,
      errors
    );
  }
};
