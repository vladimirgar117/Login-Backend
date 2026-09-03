import type { Request, Response } from 'express';
import { Router } from 'express';
import { AppError } from './class/errors.js';
import { users } from './data/users-datasource';
import { ErrorCode } from './enums/error-code.js';
import { HttpStatus } from './enums/http-status';
import { SuccessCode } from './enums/success-code.js';

import { USER_ERROR_MESSAGES } from './utils/user-error-messages.js';
import { USER_SUCCESS_MESSAGES } from './utils/success-messages.js';
import { validateLogin } from './validations/login-validation';

const router = Router();
// ruta login
router.post('/login', (req: Request, res: Response) => {
  const { username, password } = validateLogin(req.body);

  const validUser = users.find(
    (u) =>
      u.user.toLowerCase() === username.toLowerCase() &&
      u.password === password
  );

  if (!validUser) {
    throw new AppError(
      USER_ERROR_MESSAGES.INVALID_CREDENTIALS,
      ErrorCode.INVALID_CREDENTIALS,
      {
        username: USER_ERROR_MESSAGES.INVALID_LOGIN_FIELD,
      }
    );
  }

  return res.status(HttpStatus.OK).json({
    message: USER_SUCCESS_MESSAGES.LOGIN_SUCCESS,
    code: SuccessCode.SUCCESS,
    details: null,
  });
});

export default router;
