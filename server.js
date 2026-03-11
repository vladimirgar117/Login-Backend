//importa Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

// importa Express
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




// aplicacion que manejara las rutas
const app = express();
//se recibe JSON
app.use(express.json());


// Servir archivos estáticos (frontend)
app.use(express.static(path.join(__dirname, "public")));








//arreglo de usuarios
const usuarios = [
  { usuario: "admin1", password: "1234" },
  { usuario: "admin2", password: "1234" },
  { usuario: "admin3", password: "1234" },
  { usuario: "admin4", password: "1234" },
  { usuario: "admin5", password: "1234" },
  { usuario: "admin", password: "12345" }
];


//TODO: agregar 5 usuarios que se validen ,  recorrer cada usuario y que cada uno sea valido en login.
// rama con node, typescript y nodemon
//validar usuarios con mayusculas y contraseñas diferentes.
//verificar los status

//se crea la ruta de login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // validar que se enviaron datos
  if (!username || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  // buscar usuario en el arreglo
  const usuarioValido = usuarios.find(
    (u) => u.usuario === username && u.password === password
  );

  if (usuarioValido) {
    return res.json({ message: "Login correcto", user: usuarioValido.usuario });
  } else {
    return res.status(401).json({ message: "Datos incorrectos" });
  }
});




//configuracion openApi
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
        url: "http://localhost:3000/{basepath}",
        description: "Servidor local",
        variables: {                  
          basepath: {                   
            default: "v1",
            description: "Versión de la api",
            enum: [- "v1"]
             }
        }
        
      }
      
    ]
    
  },
  apis: ["./server.js"]
};

const specs = swaggerJsdoc(options);




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
 *           description: Operacion exitosa
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/LoginResponse'
 *
 *         "401":
 *           description: Datos incorrectos
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *
 *         "400":
 *           description: Faltan datos
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
 *         mensaje:
 *           type: string
 *
 *     ErrorResponse:
 *       title: Respuesta de error
 *       type: object
 *       properties:
 *         mensaje:
 *           type: string
 *         detalles:
 *           type: string
 */




//ruta de documentacion
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));






// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
