export const USER_ERROR_MESSAGES = {
  INVALID_BODY: 'Cuerpo inválido',

  USERNAME: {
    EMPTY: 'no debe estar vacio',
    INVALID: 'no tiene formato de correo',
    NOT_FOUND: 'no encontrado',
  },
  PASSWORD: {
    EMPTY: 'no debe estar vacio',
    INVALID: 'debe tener entre 4 y 16 caracteres',
    NOT_FOUND: 'no encontrado',
  },

  USERNAME_EMPTY: 'No debe estar vacío',
  USERNAME_FORMAT: 'No tiene formato de correo',

  PASSWORD_EMPTY: 'No debe estar vacío',
  PASSWORD_LENGTH: 'Debe tener entre 4 y 16 caracteres',

  INVALID_LOGIN_FIELD: 'Verifica tus datos',
  INVALID_CREDENTIALS: 'Usuario o contraseña inválidos',

  VALIDATION_ERRORS: 'Errores de validación',
  INTERNAL_ERROR: 'Error interno del servidor',

  REGEX_EMAIL_UNDEFINED: 'Falta configurar el regex del correo en el entorno',

  PORT_UNDEFINED: 'La variable "PORT" no está definida',
  PORT_NOT_NUMBER: 'La variable "PORT" debe ser un número',
} as const;
