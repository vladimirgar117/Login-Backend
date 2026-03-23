
// importa Express
import express from "express";

import loginRoutes from "./login.js";

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

//segmentar archivo (fuera login)
//crear una funcion para validar body. funcion para validar body
/*el parametro recibido debe ser un objeto
debe contener los campos username y password
el username debe cumplir con el formato de correo (usar regex, buscarla en google o con IA)
el password no debe estar vacio, debe tener entre 4 y 16 caracteres
como nota adicional, los errores deben ser retornados con el mismo formato que el objeto, es decir si se recibe el siguiente body
 */
// validar el body con valibot,
// repasar status , que status deberia retornar y porque ,