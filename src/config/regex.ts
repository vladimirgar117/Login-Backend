

<<<<<<< HEAD
//cargando la variable de entorno (regex_email)
// import 'dotenv/config';



// const value = process.env.REGEX_EMAIL;
// console.log (value);
// if (!value) {
//   throw new Error('La variable "EMAIL_REGEX" no está definida');
// }

//export const EMAIL_REGEX = new RegExp(value);
=======
const rawRegex = process.env.REGEX_EMAIL;

if (!rawRegex) {
  throw new Error('La variable "REGEX_EMAIL" no está definida');
}

// Limpia posibles / al inicio y final
const cleaned = rawRegex.replace(/^\/|\/$/g, "");

// Exporta el RegExp ya construido
export const REGEX_EMAIL: RegExp = new RegExp(cleaned);
>>>>>>> 117e710bb4759e2b76ccff8487f6a13be871c9b4
