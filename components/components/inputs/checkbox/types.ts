import { ThemePrimaryColor } from '@zonia-ui/theme';
import { InputHTMLAttributes } from 'react';
import { ValuesType } from 'utility-types';

export const checkboxSizes = ['sm', 'md', 'lg'] as const;
export type CheckboxSize = ValuesType<typeof checkboxSizes>;

export type StyledCheckboxProps = {
  color?: ThemePrimaryColor;
  size?: CheckboxSize;
  outlineColor?: ThemePrimaryColor;
  borderColor?: ThemePrimaryColor;
};

export type CheckboxProps = StyledCheckboxProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'>;
