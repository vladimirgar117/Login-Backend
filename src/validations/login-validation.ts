

import type {LoginBody} from "../interfaces/login-body.js";

import 'dotenv/config';
import {ValError} from "../class_error/errors.js";
import { REGEX_EMAIL } from "../config/regex.js";
import  { ErrorCode } from "../enums/error-code.js";
//import type { OptionalFields } from "../utils/optional-fields.js";
//import type {LoginErrors} from "../interfaces/login-errors.js";

 //export type LoginErrors = Partial<LoginBody>;
export type LoginErrors<T> = Partial<Record<keyof T, string>>;
 export const validateLogin = (body: unknown): void => {
 
 // Validar que sea un objeto
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw new ValError<LoginBody>(
      "Cuerpo inválido",
      ErrorCode.INVALID_ENTITY
    );
  } 


   const { username, password} = body as LoginBody ;
 
  const errors: LoginErrors<LoginBody>= {};
 
  
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

  if (Object.keys(errors).length > 0) {
    throw new ValError<LoginBody>(
      "Errores de validación",
      ErrorCode.INVALID_ENTITY,
      errors
 
       
 );

  }
};
        

