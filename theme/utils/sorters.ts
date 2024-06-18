import type { ValidSizeFormat } from '../types';

function removeSizeUnits(value: string) {
  return Number(value.replace(/(em|rem|px)/g, ''));
}

export const sizeSorter = (prev: ValidSizeFormat, next: ValidSizeFormat) => {
  return removeSizeUnits(prev) - removeSizeUnits(next);
};
