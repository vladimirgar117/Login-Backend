import { Router } from "express";
import type { Request, Response } from "express";
import  { users } from './data/users-datasource';
import { validateLogin } from "./validations/login-validation";
import { HttpStatus } from "./enums/http-status";
import { ValError } from "./class/errors.js";
import type { LoginBody } from "./interfaces/login-body";
import  { ErrorCode } from "./enums/error-code.js";
import { SuccessCode } from "./enums/success-code.js";
import { USER_ERROR_MESSAGES } from "./utils/error-messages.js";
import { USER_SUCCESS_MESSAGES } from "./utils/success-messages.js";

const router = Router();
// ruta login
 router.post("/login", (req: Request, res: Response) => {
  try {
   
    validateLogin(req.body);

    const { username, password } = req.body as LoginBody;
      

    const validUser = users.find(
      (u) =>
        u.user.toLowerCase() === username.toLowerCase() &&
        u.password === password
    );


    if (!validUser) {
    throw new ValError<LoginBody>(
  USER_ERROR_MESSAGES.INVALID_CREDENTIALS,
  ErrorCode.UNAUTHORIZED,
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

  } catch (err: unknown) {
    if (err instanceof ValError) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: err.message,
        code: err.code,
        details: err.errors ?? {},
      });
    }

    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: USER_ERROR_MESSAGES.INTERNAL_ERROR,
    });
  }
});


export default router;
