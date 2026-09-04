export enum HttpStatus {
  /**
   * La peticion fue exitosa
   */
  OK = 200,
  /**
   * La peticion esta mal formada
   */
  BAD_REQUEST = 400,
  /**
   * No esta autenticado
   */
  UNAUTHORIZED = 401,
  /**
   * Sí está autenticado, pero no tiene permisos
   */
  FORBIDDEN = 403,
  /**
   * El recurso no existe
   */
  NOT_FOUND = 404,
  /**
   * metodo no permitido
   */
  METHOD_NOT_ALLOWED = 405,
  /**
   * Error interno del servidor
   */
  INTERNAL_SERVER_ERROR = 500,
  
}
