


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

