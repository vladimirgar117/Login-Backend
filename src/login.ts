import express from "express";
import type { Request, Response } from "express";


// aplicacion que maneja las rutas
 const app = express();
// se recibe JSON
  app.use(express.json());

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
  app.post("/login", (req: Request, res: Response) => {
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