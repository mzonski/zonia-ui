import { ThemeShapeType } from '@zonia-ui/theme';
import { InputHTMLAttributes } from 'react';
import { ValuesType } from 'utility-types';

import { StyledToggle } from '../_shared';

export const switchSizes = ['sm', 'md', 'lg'] as const;
export type SwitchSize = ValuesType<typeof switchSizes>;

export type StyledSwitchProps = {
  size?: SwitchSize;
  pillShape?: ThemeShapeType;
} & StyledToggle;

export type SwitchProps = StyledSwitchProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
