import { ThemeBorderSizes, ThemePrimaryColor, ThemeShapeType } from '@zonia-ui/theme';
import { ReactNode } from 'react';

export const toggleSizes = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

export type ToggleSizeType = keyof typeof toggleSizes;

export type StyledToggle = {
  color?: ThemePrimaryColor;
  outlineColor?: ThemePrimaryColor;
  borderColor?: ThemePrimaryColor;
  shape?: ThemeShapeType;
  borderType?: ThemeBorderSizes;
  size?: ToggleSizeType;
  hasText?: boolean;
};

export type ToggleLabelProps = {
  label?: ReactNode | string;
  text?: ReactNode | string;
};
