import type { Request, Response, NextFunction } from 'express';
import { ValError } from '../class/errors.js';
import { HttpStatus } from '../enums/http-status.js';
import { USER_ERROR_MESSAGES } from '../utils/error-messages.js';

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ValError) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      message: err.message,
      code: err.code,
      errors: err.errors ?? {},
    });
  }

  console.error(err);

  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    message: USER_ERROR_MESSAGES.INTERNAL_ERROR,
  });
};
