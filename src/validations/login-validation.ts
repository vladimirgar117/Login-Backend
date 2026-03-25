

export interface LoginBody {
  username: string;
  password: string;
}

export interface LoginErrors {
  username?: string;
  password?: string;
}

export const validateLogin = (body: unknown): LoginErrors => {
  const errors: LoginErrors = {};

  // Validar que sea un objeto
  if (!body || typeof body !== "object") {
    return {
      username: "body inválido",
      password: "body inválido",
    };
  } 
  
  const data = body as {username?: unknown; password: unknown};
  const { username, password} = data;

  // Regex básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validación username (email)
  if (typeof username !== "string" || username.trim() === "" ) {
    errors.username = "no debe estar vacío"
  } else if (!emailRegex.test(username)) {
    errors.username = "no tiene formato de correo";
  }

  // Validación password
  if (typeof password !== "string" || password.trim()=== "") {
    errors.password = "no debe estar vacío";
  } else if (password.length < 4 || password.length > 16) {
    errors.password = "debe tener entre 4 y 16 caracteres";
  }

  return errors;
};


