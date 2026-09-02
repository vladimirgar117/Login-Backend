import express from 'express';

import loginRoutes from './login.js';

import { errorHandler } from './middlewares/error-handler.js';
import { ENV } from './config/variables-env.js';

const app = express();

app.use(express.json());

app.use('/', loginRoutes);

app.use(errorHandler);

app.listen(ENV.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${ENV.PORT}`);
});
