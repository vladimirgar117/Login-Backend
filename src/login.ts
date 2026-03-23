import { Router } from "express";
import type { Request, Response } from "express";
import  { usuarios } from './data/usuarios-datasource';


const router = Router();


// ruta login
  router.post("/login", (req: Request, res: Response) => {
  const username = req.body.username?.trim();
  const password = req.body.password?.trim();

  
// validar que se enviaron datos
  if (!username || !password) {
    return res.status(400).json({ message: "Faltan datos" });
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