import { Router } from "express";
import type { Request, Response } from "express";
import  { usuarios } from './data/usuarios-datasource';

import { validateLogin } from "./validations/login.validation";

const router = Router();


// ruta login
  router.post("/login", (req: Request, res: Response) => {
  const username = req.body.username?.trim();
  const password = req.body.password?.trim();

  // Validar body
  const errors = validateLogin(req.body);

  
// validar que se enviaron datos
  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }


 // buscar usuario en el arreglo
  const usuarioValido = usuarios.find(
  (u) =>
    u.usuario.toLowerCase() === username.toLowerCase() &&
    u.password === password
);

  if (usuarioValido) {
    return res.json({ message: "Login correcto", user: usuarioValido.usuario });
  } else {
    return res.status(401).json({ message: "Datos incorrectos" });
  }
});


export default router;