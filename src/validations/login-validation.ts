

export interface LoginBody {
  username: string;
  password: string;
}

export interface LoginErrors {
  username?: string;
  password?: string;
}

export const validateLogin = (body: any): LoginErrors => {
  const errors: LoginErrors = {};

  // Validar que sea un objeto
  if (!body || typeof body !== "object") {
    return {
      username: "body inválido",
      password: "body inválido",
    };
  } 
  
  const { username, password } = body;

  // Regex básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validación username (email)
  if (!username) {
    errors.username = "no debe estar vacío";
  } else if (!emailRegex.test(username)) {
    errors.username = "no tiene formato de correo";
  }

  // Validación password
  if (!password) {
    errors.password = "no debe estar vacío";
  } else if (password.length < 4 || password.length > 16) {
    errors.password = "debe tener entre 4 y 16 caracteres";
  }

  return errors;
};


