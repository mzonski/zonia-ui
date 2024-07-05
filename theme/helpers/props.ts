import { DolarPrefix } from '../types';

export const appendDolarPrefix = <TObj extends object = object>(obj: TObj) => {
  return Object.entries(obj).reduce((newObj, [cKey, cVal]) => {
    Object.assign(newObj, { [`$${cKey}`]: cVal });
    return newObj;
  }, {} as DolarPrefix<TObj>);
};
