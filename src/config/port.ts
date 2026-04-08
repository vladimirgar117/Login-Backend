//import './load-env.js';
import { EnvError } from '../class/env-error.js';
import { USER_ERROR_MESSAGES } from '../utils/user-error-messages.js';

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new EnvError(USER_ERROR_MESSAGES.PORT_UNDEFINED);
}

const PORT = Number(rawPort);

if (Number.isNaN(PORT)) {
  throw new EnvError(USER_ERROR_MESSAGES.PORT_NOT_NUMBER);
}

export { PORT };
