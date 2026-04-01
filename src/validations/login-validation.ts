

import type {LoginBody} from "../interfaces/loginbody.js";

import 'dotenv/config';

const Regex = process.env.REGEX_EMAIL;

if (!Regex) {
  throw new Error('La variable "REGEX_EMAIL" no está definida');
}

 const REGEX_EMAIL = new RegExp(Regex);
 

 type LoginErrors = Partial<LoginBody>;

 export const validateLogin = (body: LoginBody): LoginErrors => {
  const errors: LoginErrors = {};


 const { username, password} = body  ;

 

  // Validar que sea un objeto
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return {
      username: "Cuerpo de solicitud invalido"
    };
  } 
  

  // Validación username (email)
  if (typeof username !== "string" || username.trim() === "" ) {
    errors.username = "no debe estar vacío"
  } else if (!REGEX_EMAIL.test(username)) {
    errors.username = "no tiene formato de correo";
  }

  // Validación password
  if (typeof password !== "string" || password === "") {
    errors.password = "no debe estar vacío";
  } else if (password.length < 4 || password.length > 16) {
    errors.password = "debe tener entre 4 y 16 caracteres";
  }

  return errors;
};

