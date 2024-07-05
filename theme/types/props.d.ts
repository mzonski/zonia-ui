import { Property } from 'csstype';
import { StyleFunction } from 'styled-components';

export type DolarPrefix<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};

export type SvgProps = {
  size: number;
  color?: Property.Color;
};

export type RequiredDolar<T> = DolarPrefix<Required<T>>;
export type PickRequiredStyled<T, K extends keyof T> = RequiredDolar<Pick<T, K>>;
export type StyleFunctionRequirePick<T, K extends keyof T> = StyleFunction<PickRequiredStyled<T, K>>;
export type StyleFunctionDolar<T> = StyleFunction<DolarPrefix<T>>;
export type StyleFunctionDolarPick<T, K extends keyof T> = StyleFunction<DolarPrefix<Pick<T, K>>>;
