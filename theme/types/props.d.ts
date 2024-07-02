import { StyleFunction } from 'styled-components';

export type DolarPrefix<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};

export type RequiredDolar<T> = DolarPrefix<Required<T>>;
export type PickStyled<T, K extends keyof T> = RequiredDolar<Pick<T, K>>;
export type StyleFunctionPick<T, K extends keyof T> = StyleFunction<PickStyled<T, K>>;
export type StyleFunctionDolar<T> = StyleFunction<RequiredDolar<T>>;
