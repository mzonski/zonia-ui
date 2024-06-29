import { valueToRem } from '../utils';

export const defaultThemeTextTypography = {
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

export const defaultThemeHeadTypography = {
  h1: {
    fontSize: valueToRem(72),
    lineHeight: '140%',
  },
  h2: {
    fontSize: valueToRem(60),
    lineHeight: '140%',
  },
  h3: {
    fontSize: valueToRem(48),
    lineHeight: '140%',
  },
  h4: {
    fontSize: valueToRem(36),
    lineHeight: '140%',
  },
  h5: {
    fontSize: valueToRem(30),
    lineHeight: '132%',
  },
  h6: {
    fontSize: valueToRem(24),
    lineHeight: '130%',
  },
} as const;
