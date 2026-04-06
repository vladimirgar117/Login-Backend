import './load-env.js';


const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error('La variable "PORT" no está definida');
}

const PORT = Number(rawPort);

if (Number.isNaN(PORT)) {
  throw new Error('La variable "PORT" debe ser un número');
}

export { PORT };