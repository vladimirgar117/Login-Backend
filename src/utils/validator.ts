

export const isString = (val: unknown): val is string => typeof val === 'string';

export const isNumber = (val: unknown): val is number => typeof val === 'number' && !isNaN(val);

export const isArray = (val: unknown): val is any[] => Array.isArray(val);

export const isObject = (val: unknown): val is object => 
  val !== null && typeof val === 'object' && !Array.isArray(val);

export const isNull = (val: unknown): val is null => val === null;

export const isUndefined = (val: unknown): val is undefined => typeof val === 'undefined';

export const isFunction = (val: unknown): val is Function => typeof val === 'function';

export const isDate = (val: unknown): val is Date => val instanceof Date && !isNaN(val.getTime());
