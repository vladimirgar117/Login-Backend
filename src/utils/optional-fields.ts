

export type OptionalFields<T> = {
  [K in keyof T]?: string;
};