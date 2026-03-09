//importa Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");


// importa Express , se carga la libreria
const express = require ("express");

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

//se crea la ruta de login
app.post("/login", (req, res) => {
const {username, password } = req.body;

//se valida que el usuario haya enviado datos
     if (!username || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }
  if (username === USERNAME && password === PASSWORD) {
        return res.json({ message: "Login correcto" });
          } else {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }
});



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



// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});