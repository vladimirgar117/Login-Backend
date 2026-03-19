
// importa Express
import express from "express";


// aplicacion que manejara las rutas
const app = express();
//se recibe JSON
app.use(express.json());


//arreglo de usuarios
const usuarios = [
  { usuario: "Admi1", password: "A1C2" },
  { usuario: "admin2", password: "1A3B" },
  { usuario: "ADMIN3", password: "1S2D4" },
  { usuario: "Admin4", password: "F2E4C" },
  { usuario: "AdmiN5", password: "12a34" },
  
];


//TODO: agregar 5 usuarios que se validen ,  recorrer cada usuario y que cada uno sea valido en login.
// rama con node, typescript y nodemon
//validar usuarios con mayusculas y contraseñas diferentes.
//verificar los status

//se crea la ruta de login
app.post("/login", (req, res) => {
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






// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
