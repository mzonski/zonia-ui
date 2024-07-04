import { InputHTMLAttributes } from 'react';

import { StyledToggle, ToggleLabelProps } from '../_shared';

export type StyledCheckboxProps = {
  // empty for now
};

export type CheckboxProps = StyledToggle &
  ToggleLabelProps &
  StyledCheckboxProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'>;
