import type { ThemeBorderSizes, ValidSizeFormat } from '../types';
import { valueToRem } from '../utils';

export const themeBorderSize = {
  tiny: valueToRem(1),
  small: valueToRem(1.5),
  medium: valueToRem(2.25),
  large: valueToRem(3),
} as const satisfies Record<ThemeBorderSizes, ValidSizeFormat>;
