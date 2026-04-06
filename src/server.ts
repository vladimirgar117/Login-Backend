
// importa Express
import express from "express";

import loginRoutes from "./login.js";

import { PORT } from './config/port.js';



// aplicacion que maneja las rutas
const app = express();

// se recibe JSON
app.use(express.json());

// conectar rutas
app.use("/", loginRoutes);
 
// iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});







