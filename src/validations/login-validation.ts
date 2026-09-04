import { ENV } from "../config/variables-env.js";

import { AppError } from "../class/errors.js";

import { ErrorCode } from "../enums/error-code.js";
import type { LoginBody } from "../interfaces/login-body.js";
import type { FieldErrors } from "../interfaces/field-errors.js";

import { USER_ERROR_MESSAGES } from "../utils/user-error-messages.js";
import { API_ERROR_MESSAGES } from "../utils/api-error-messages.js";
import { isObject, isString } from "../utils/functions.js";

export const validateLogin = (body: unknown): LoginBody => {
  if (!isObject(body)) {
    throw new AppError<LoginBody>(
      API_ERROR_MESSAGES.INVALID_BODY,
      ErrorCode.INVALID_ENTITY
    );
  }

  const errors: FieldErrors<LoginBody> = {};

  const username = body.username;
  const password = body.password;

  let normalizedUsername: string | undefined;
  let normalizedPassword: string | undefined;

  // Validación username
  if (!isString(username)) {
    errors.username = USER_ERROR_MESSAGES.USERNAME.TYPE;
  } else if (username.trim() === '') {
    errors.username = USER_ERROR_MESSAGES.USERNAME.EMPTY;
  } else {
    normalizedUsername = username.trim();

    if (!ENV.REGEX_EMAIL.test(normalizedUsername)) {
      errors.username = USER_ERROR_MESSAGES.USERNAME.INVALID;
    }
  }

  // Validación password
  if (!isString(password)) {
    errors.password = USER_ERROR_MESSAGES.PASSWORD.TYPE;
  } else if (password.trim() === '') {
    errors.password = USER_ERROR_MESSAGES.PASSWORD.EMPTY;
  } else if (password.length < 4 || password.length > 16) {
    errors.password = USER_ERROR_MESSAGES.PASSWORD.INVALID;
  } else {
    normalizedPassword = password;
  }

  if (Object.keys(errors).length > 0) {
    throw new AppError<LoginBody>(
      USER_ERROR_MESSAGES.VALIDATION_ERRORS,
      ErrorCode.INVALID_ENTITY,
      errors
    );
  }

  if (
    normalizedUsername === undefined ||
    normalizedPassword === undefined
  ) {
    throw new AppError<LoginBody>(
      USER_ERROR_MESSAGES.VALIDATION_ERRORS,
      ErrorCode.INVALID_ENTITY,
      errors
    );
  }

  return {
    username: normalizedUsername,
    password: normalizedPassword,
  };
};