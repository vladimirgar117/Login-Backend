import { Router } from "express";
import type { Request, Response } from "express";
import  { users } from './data/users-datasource';
import { validateLogin } from "./validations/login-validation";
import { HttpStatus } from "./enums/http-status";
import { ValError } from "./class_error/errors";


const router = Router();
// ruta login
 router.post("/login", (req: Request, res: Response) => {
  try {
    // 🔥 si algo está mal, aquí se lanza el ValError
    validateLogin(req.body);

    const { username, password } = req.body as {
      username: string;
      password: string;
    };

    const validUser = users.find(
      (u) =>
        u.user.toLowerCase() === username.toLowerCase() &&
        u.password === password
    );

    if (!validUser) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: "las credenciales son incorrectas",
        details: {
          username: "usuario o contraseña inválidos",
        },
      });
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
