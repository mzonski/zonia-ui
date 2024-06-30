import { ValidSizeFormat } from '../types';

export function extractNumberFromSize(size: ValidSizeFormat) {
  if (size === '0') return 0;
  const numericValue = parseFloat(size);
  return Number.isNaN(numericValue) ? 0 : numericValue;
}
