import express from 'express';

import loginRoutes from './login.js';

import { ENV } from './config/variables-env.js';

import { errorHandler } from './middlewares/error-handler.js';
import {methodNotAllowedHandler} from './middlewares/method-not-allowed-handler.js';
import { notFoundHandler } from './middlewares/not-found-handler.js';


const app = express();

app.use(express.json());

app.use('/', loginRoutes);

app.use(methodNotAllowedHandler);

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(ENV.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${ENV.PORT}`);
});
