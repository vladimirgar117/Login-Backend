//importa Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

// importa Express
const express = require("express");

//import express from "express"
//import swaggerUi from "swagger-ui-express"
//import swaggerJsdoc from "swagger-jsdoc"
//import path from "path"



// aplicacion que manejara las rutas
const app = express();
//se recibe JSON
app.use(express.json());

const path = require("path");

// Servir archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, "public")));

//configuracion openApi
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Login",
      version: "1.0.0",
      description: "API simple de login con Express"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./server.js"]
};

const specs = swaggerJsdoc(options);




//Usuario de prueba
const USERNAME = "admin"
const PASSWORD = "1234"


const usuarios = [
  { usuario: "admin1", password: "1234" },
  { usuario: "admin2", password: "1234" },
  { usuario: "admin3", password: "1234" },
  { usuario: "admin4", password: "1234" },
  { usuario: "admin5", password: "1234" }
];


//TODO:recorrer usuario, agregar 5 usuarios que se validen , agregar capa de typescript
//cambiar require por import 



/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login de usuario
 *     description: Permite autenticar un usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: 1234
 *     responses:
 *       200:
 *         description: Login correcto
 *       401:
 *         description: Credenciales incorrectas
 *       400:
 *         description: Faltan datos
 */

//ruta de documentacion
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

//se crea la ruta de login
 app.post("/login", (req, res) => { const {username, password } = req.body;

  //se valida que el usuario haya enviado datos 
  if (!username || !password) { return res.status(400).json({ message: "Faltan datos" });
 } 
  if (username === USERNAME && password === PASSWORD) { return res.json({ message: "Login correcto" }); }
   else { return res.status(401).json({ message: "Datos Incorrectos" }); } });









// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});