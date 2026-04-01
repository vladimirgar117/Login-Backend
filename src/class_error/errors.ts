import { ErrorCode } from "../enums/Error-Code.js";
import type { LoginErrors} from "../validations/login-validation.js";


export class valError  extends Error {
  public readonly code: ErrorCode;
  public readonly errors: LoginErrors;

  constructor(
    message: string,
    code: ErrorCode,
    errors: LoginErrors
  ) {
    super(message);
    this.name = "valError";
    this.code = code;
    this.errors = errors;

    Object.setPrototypeOf(this, valError.prototype);
  }
}