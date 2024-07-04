import { ThemeShapeType } from '@zonia-ui/theme';
import { InputHTMLAttributes } from 'react';

import { StyledToggle, ToggleLabelProps } from '../_shared';

export type StyledSwitchProps = {
  pillShape?: ThemeShapeType;
} & StyledToggle;

export type SwitchProps = ToggleLabelProps & StyledSwitchProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
