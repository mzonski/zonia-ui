import { DeepMerge, UnknownRecord } from '../types';

import { isObject } from './guards';

export function deepMerge<T extends UnknownRecord, U extends UnknownRecord>(target: T, source: U): DeepMerge<T, U> {
  if (!isObject(target) || !isObject(source)) {
    return source as DeepMerge<T, U>;
  }

  const output = { ...target };

  Object.keys(source).forEach((key) => {
    if (isObject(source[key as keyof U])) {
      if (isObject(target) && key in target) {
        (output as UnknownRecord)[key] = deepMerge(target[key as keyof T] as T, source[key as keyof U] as U);
      } else {
        (output as UnknownRecord)[key] = source[key as keyof U];
      }
    } else {
      (output as UnknownRecord)[key] = source[key as keyof U];
    }
  });

  return output as DeepMerge<T, U>;
}
