export const isString = (value: unknown): value is string =>
    typeof value === 'string';

export const isNumber = (value: unknown): value is number =>
    typeof value === 'number' && !Number.isNaN(value);

export const isArray = (value: unknown): value is unknown[] =>
    Array.isArray(value);

export const isObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value);

export const isNull = (value: unknown): value is null =>
    value === null;

export const isUndefined = (value: unknown): value is undefined =>
    value === undefined;

export const isFunction = (
    value: unknown
): value is (...args: never[]) => unknown =>
    typeof value === 'function';

export const isDate = (value: unknown): value is Date =>
    value instanceof Date && !Number.isNaN(value.getTime());