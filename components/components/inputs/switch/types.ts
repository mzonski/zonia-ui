import { ThemePrimaryColor } from '@zonia-ui/theme';
import { InputHTMLAttributes } from 'react';
import { ValuesType } from 'utility-types';

export const switchSizes = ['sm', 'md'] as const;
export type SwitchSize = ValuesType<typeof switchSizes>;

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  color?: ThemePrimaryColor;
  size?: SwitchSize;
}
