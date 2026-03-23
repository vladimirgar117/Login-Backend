import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();


// usuario
interface Usuario {
  usuario: string;
  password: string;
}

// arreglo de usuarios
const usuarios: Usuario[] = [
  { usuario: "Admin1", password: "A1C2" },
  { usuario: "admin2", password: "1A3B" },
  { usuario: "ADMIN3", password: "1S2D4" },
  { usuario: "Admin4", password: "F2E4C" },
  { usuario: "AdmiN5", password: "12a34" },

];


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