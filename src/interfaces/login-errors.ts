import type {LoginBody} from "./login-body.js";


//export type LoginErrors = Partial<LoginBody>;


export type LoginErrors<T> = {
  [K in keyof T]?: string;
};