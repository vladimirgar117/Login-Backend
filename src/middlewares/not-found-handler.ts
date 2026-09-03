import type { Request, Response, NextFunction } from 'express';

import { AppError } from '../class/errors.js';
import { ErrorCode } from '../enums/error-code.js';
import { API_ERROR_MESSAGES } from '../utils/api-error-messages.js';

export const notFoundHandler = (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  next(
    new AppError(
      API_ERROR_MESSAGES.ROUTE_NOT_FOUND,
      ErrorCode.NOT_FOUND
    )
  );
};