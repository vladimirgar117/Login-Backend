import { Router } from "express";
import type { Request, Response } from "express";
import  { users } from './data/users-datasource';
import { validateLogin } from "./validations/login-validation";

const router = Router();


// ruta login
  router.post("/login", (req: Request, res: Response) => {

// Validar body
  const errors = validateLogin(req.body);

// validar que se enviaron datos
 if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: "Error de los datos enviados", 
      details: errors,
 });
  }


 const {username, password } = req.body as {
  username : string;
  password : string;
 };

 // buscar usuario en el arreglo
  const validUser = users.find(
  (u) =>
    u.user.toLowerCase() === username.toLowerCase() &&
    u.password === password
);


  if (!validUser) {
    return res.status(401).json({
      message: "las credenciales son incorrectas",
      details: {
        username: "usuario o contraseña invalidos", 
      },
    });
  }

  if (validUser) {
    return res.status(200).json({
       message: "Login correcto" 
       
});
  } 
});


export default router;