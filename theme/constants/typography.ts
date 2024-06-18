import { valueToRem } from '../utils';

export const themeText = {
  xl: {
    fontSize: valueToRem(20),
    lineHeight: valueToRem(30),
  },
  lg: {
    fontSize: valueToRem(18),
    lineHeight: valueToRem(27.36),
  },
  md: {
    fontSize: valueToRem(16),
    lineHeight: valueToRem(25),
  },
  sm: {
    fontSize: valueToRem(14),
    lineHeight: valueToRem(19.6),
  },
  xs: {
    fontSize: valueToRem(12),
    lineHeight: valueToRem(16),
  },
} as const;
