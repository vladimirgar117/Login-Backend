import type { Request, Response, NextFunction } from 'express';

import { AppError } from '../class/errors.js';
import { ErrorCode } from '../enums/error-code.js';
import { API_ERROR_MESSAGES } from '../utils/api-error-messages.js';

export const methodNotAllowedHandler = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  if (req.path === '/login' && req.method !== 'POST') {
    return next(
      new AppError(
        API_ERROR_MESSAGES.METHOD_NOT_ALLOWED,
        ErrorCode.METHOD_NOT_ALLOWED
      )
    );
  }

  next();
};