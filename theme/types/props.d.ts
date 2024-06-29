export type DolarPrefix<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};
