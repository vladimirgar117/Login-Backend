//import type { HttpStatusDetail } from "../interfaces/status-detail";


export enum HttpStatus {
  /**
   * la peticion fue exitosa
   */
  OK = 200,
  /**
   * la peticion esta mal formada 
   */
  BAD_REQUEST = 400,
  /**
   * no esta autenticado
   */
  UNAUTHORIZED = 401,
  /**
   * Sí está autenticado, pero no tiene permisos
   */
  FORBIDDEN = 403,
  /**
   * el recurso no existe
   */
  NOT_FOUND = 404,
  /**
   * Error inesperado del servidor
   */
  INTERNAL_SERVER_ERROR = 500,

}


// export const HttpStatusInfo: Record<HttpStatus, HttpStatusDetail> = {
//   [HttpStatus.OK]: {
//     code: 200,
//     name: "OK",
//     description: "La solicitud ha tenido éxito.",
//   },
//   [HttpStatus.BAD_REQUEST]: {
//     code: 400,
//     name: "Bad Request",
//     description: "El servidor no pudo interpretar la solicitud por sintaxis inválida.",
//   },
//   [HttpStatus.UNAUTHORIZED]: {
//     code: 401,
//     name: "Unauthorized",
//     description: "Es necesario autenticarse para obtener la respuesta.",
//   },
//   [HttpStatus.FORBIDDEN]: {
//     code: 403,
//     name: "Forbidden",
//     description: "El cliente no tiene derechos de acceso al contenido.",
//   },
//   [HttpStatus.NOT_FOUND]: {
//     code: 404,
//     name: "Not Found",
//     description: "El servidor no pudo encontrar el recurso solicitado.",
//   },
//   [HttpStatus.INTERNAL_SERVER_ERROR]: {
//     code: 500,
//     name: "Internal Server Error",
//     description: "El servidor encontró una condición inesperada.",
//   },
// };