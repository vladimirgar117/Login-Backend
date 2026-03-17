// importa Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

// importa Express
import express from "express";
import type { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// aplicacion que maneja las rutas
const app = express();

// se recibe JSON
app.use(express.json());

// servir frontend
app.use(express.static(path.join(__dirname, "../public")));


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
  const username = req.body.username.trim();
  const password = req.body.password.trim();


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



// configuracion openapi
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Login",
      version: "1.0.0",
      description: "API para login de usuarios"
    },
    servers: [
      {
        url: "http://localhost:3000/v1",
        description: "Servidor local"
      }
    ]
  },
  apis: ["./src/server.ts"]
};

const specs = swaggerJsdoc(options);


// swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));



/**
 * @swagger
 * paths:
 *   /login:
 *     post:
 *       summary: Login de usuario
 *       tags:
 *         - Autenticación
 *       description: Permite autenticar un usuario
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginRequest'
 *
 *       responses:
 *         "200":
 *           description: Ok
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/LoginResponse'
 *
 *         "401":
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *
 *         "400":
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *
 * components:
 *   schemas:
 *
 *     LoginRequest:
 *       title: Solicitud de inicio de sesión
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           example: admin
 *         password:
 *           type: string
 *           example: 1234
 *
 *     LoginResponse:
 *       title: Respuesta de inicio de sesión
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *
 *     ErrorResponse:
 *       title: Respuesta de error
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         details:
 *           type: string
 */





// iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});