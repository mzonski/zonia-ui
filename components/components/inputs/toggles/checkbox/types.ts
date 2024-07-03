import { InputHTMLAttributes } from 'react';
import { ValuesType } from 'utility-types';

import type { StyledToggle } from '../_shared';

export const checkboxSizes = ['sm', 'md', 'lg'] as const;
export type CheckboxSize = ValuesType<typeof checkboxSizes>;

export type StyledCheckboxProps = {
  size?: CheckboxSize;
} & StyledToggle;

export type CheckboxProps = StyledCheckboxProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color'>;
