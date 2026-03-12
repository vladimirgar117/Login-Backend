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

// aplicacion que manejara las rutas
const app = express();

// se recibe JSON
app.use(express.json());

// servir frontend
app.use(express.static(path.join(__dirname, "../public")));


// tipo de usuario
interface Usuario {
  usuario: string;
  password: string;
}

// arreglo de usuarios
const usuarios: Usuario[] = [
  { usuario: "admin1", password: "1234" },
  { usuario: "admin2", password: "1234" },
  { usuario: "admin3", password: "1234" },
  { usuario: "admin4", password: "1234" },
  { usuario: "admin5", password: "1234" },
  { usuario: "admin", password: "12345" }
];


// ruta login
app.post("/login", (req: Request, res: Response) => {

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  const usuarioValido = usuarios.find(
    (u) => u.usuario === username && u.password === password
  );

  if (usuarioValido) {
    return res.json({
      message: "Login correcto",
      user: usuarioValido.usuario
    });
  }

  return res.status(401).json({ message: "Datos incorrectos" });

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


// iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});