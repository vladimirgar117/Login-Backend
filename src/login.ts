import { Router } from "express";
import type { Request, Response } from "express";
import  { users } from './data/users-datasource';
import { validateLogin } from "./validations/login-validation";
import { HttpStatus } from "./enums/http-status";
import { ValError } from "./class_error/errors";
import type { LoginBody } from "./interfaces/login-body";
import  { ErrorCode } from "./enums/error-code.js";
import { USER_ERROR_MESSAGES } from "./utils/messages.js";

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
  "Credenciales incorrectas",
  ErrorCode.UNAUTHORIZED,
  {
    username: USER_ERROR_MESSAGES.INVALID_CREDENTIALS,
  }
);
}
    return res.status(HttpStatus.OK).json({
      message: "Login correcto",
    });

  } catch (err: unknown) {
    if (err instanceof ValError) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: err.message,
        code: err.code,
        errors: err.errors ?? {},
      });
    }

    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: "Error interno",
    });
  }
});


export default router;
