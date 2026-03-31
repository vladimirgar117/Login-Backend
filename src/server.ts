
// importa Express
import express from "express";

import loginRoutes from "./login.js";

//cargando la variable de entorno (regex_email)
import 'dotenv/config';

// aplicacion que maneja las rutas
const app = express();

// se recibe JSON
app.use(express.json());

// conectar rutas
app.use("/", loginRoutes);
 
// iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});







