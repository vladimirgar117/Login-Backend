export const USER_ERROR_MESSAGES = {
 
  USERNAME: {
    EMPTY: 'no debe estar vacio',
    INVALID: 'no tiene formato de correo',
    NOT_FOUND: 'no encontrado',
    TYPE: 'debe ser una cadena de texto',
  },
  PASSWORD: {
    EMPTY: 'no debe estar vacio',
    INVALID: 'debe tener entre 4 y 16 caracteres',
    TYPE: 'debe ser una cadena de texto',
  },


 
  INVALID_LOGIN_FIELD: 'Verifica tus datos',

  INVALID_CREDENTIALS: 'Usuario o contraseña inválidos',
  
  VALIDATION_ERRORS: 'Errores de validación',
  
} as const;
