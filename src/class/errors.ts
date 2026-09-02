import { ErrorCode } from '../enums/error-code.js';
import type { FieldErrors } from '../interfaces/field-errors.js';

export class AppError<T> extends Error {
  public readonly code: ErrorCode;
  public readonly errors: FieldErrors<T> | undefined;

  constructor(
    message: string,
    code: ErrorCode,
    errors?: FieldErrors<T>
  ) {
    super(message);

    this.name = 'AppError';
    this.code = code;
    this.errors = errors;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}