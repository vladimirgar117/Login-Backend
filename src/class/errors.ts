
import { ErrorCode } from "../enums/error-code.js";
import type {LoginErrors} from "../interfaces/login-errors.js";


export class ValError<T> extends Error {
  public readonly code: ErrorCode;
  public readonly errors: LoginErrors<T> | undefined;

  constructor(
    message: string,
    code: ErrorCode,
    errors?: LoginErrors<T>
  ) {
    super(message);
    this.name = "ValError";
    this.code = code;
    this.errors = errors;

    Object.setPrototypeOf(this, ValError.prototype);
  }
}