import { ThemePrimaryColor } from '@zonia-ui/theme';
import { InputHTMLAttributes } from 'react';
import { ValuesType } from 'utility-types';

export const switchSizes = ['sm', 'md', 'lg'] as const;
export type SwitchSize = ValuesType<typeof switchSizes>;

export type StyledSwitchProps = {
  color?: ThemePrimaryColor;
  size?: SwitchSize;
};

export type SwitchProps = StyledSwitchProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
