import type { DolarPrefix } from '../types';

export const prefixPropsWithDolar = <T extends object = object>(obj: T) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    Object.assign(acc, { [`$${key}`]: value });
    return acc;
  }, {} as DolarPrefix<T>);
};
