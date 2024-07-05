import { ReactNode } from 'react';

import { ThemeStyledProps } from '../../../../style/props';

export const toggleSizes = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

export type ToggleSizeType = keyof typeof toggleSizes;

export type StyledToggle = {
  size?: ToggleSizeType;
  hasText?: boolean;
} & ThemeStyledProps;

export type ToggleLabelProps = {
  label?: ReactNode | string;
  text?: ReactNode | string;
};
