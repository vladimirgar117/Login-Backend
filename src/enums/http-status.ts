export enum HttpStatus {
  /**
 * La petición fue exitosa
 */
OK = 200,

/**
 * La petición es inválida o no cumple las reglas esperadas
 */
BAD_REQUEST = 400,

/**
 * La solicitud requiere autenticación válida
 */
UNAUTHORIZED = 401,

/**
 * El cliente está autenticado, pero no tiene permisos
 */
FORBIDDEN = 403,

/**
 * El recurso solicitado no existe
 */
NOT_FOUND = 404,

/**
 * El método HTTP no está permitido para el recurso
 */
METHOD_NOT_ALLOWED = 405,

/**
 * Error interno del servidor
 */
INTERNAL_SERVER_ERROR = 500,

};