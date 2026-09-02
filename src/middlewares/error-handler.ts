import type { Request, Response, NextFunction } from 'express';

import { AppError } from '../class/errors.js';
import { ErrorCode } from '../enums/error-code.js';
import { HttpStatus } from '../enums/http-status.js';
import { isObject } from '../utils/functions.js';
import { SYSTEM_ERROR_MESSAGES } from '../utils/system-error-messages.js';
import {API_ERROR_MESSAGES} from "../utils/api-error-messages.js";

const ERROR_STATUS: Record<ErrorCode, HttpStatus> = {
  [ErrorCode.INVALID_ENTITY]: HttpStatus.BAD_REQUEST,
  [ErrorCode.INVALID_CREDENTIALS]: HttpStatus.UNAUTHORIZED,
  [ErrorCode.NOT_FOUND]: HttpStatus.NOT_FOUND,
  [ErrorCode.INTERNAL_ERROR]: HttpStatus.INTERNAL_SERVER_ERROR,
};

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(ERROR_STATUS[err.code]).json({
      message: err.message,
      code: err.code,
      errors: err.errors ?? null,
    });
  }

  if (
  isObject(err) &&
  err.type === 'entity.parse.failed'
) {
  return res.status(HttpStatus.BAD_REQUEST).json({
    message: API_ERROR_MESSAGES.INVALID_BODY,
    code: ErrorCode.INVALID_ENTITY,
    errors: null,
  });
}
  console.error(err);

  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    message: SYSTEM_ERROR_MESSAGES.INTERNAL_ERROR,
    code: ErrorCode.INTERNAL_ERROR,
    errors: null,
  });
};