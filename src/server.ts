// importa Express
import express from 'express';
import 'dotenv/config';
import loginRoutes from './login.js';

import { PORT } from './config/port.js';
import { USER_ERROR_MESSAGES } from './utils/user-error-messages.js';
import { ValError } from './class/errors.js';
import { ErrorCode } from './enums/error-code.js';
import { errorHandler } from './middlewares/error-handler.js';

// aplicacion que maneja las rutas
const app = express();

// se recibe JSON
//app.use(express.json());
app.use(
  express.json({
    verify: (_req, _res, buf) => {
      try {
        JSON.parse(buf.toString());
      } catch {
        throw new ValError(USER_ERROR_MESSAGES.INVALID_BODY, ErrorCode.INVALID_ENTITY);
      }
    },
  })
);
// conectar rutas
app.use('/', loginRoutes);

app.use(errorHandler);

// iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
