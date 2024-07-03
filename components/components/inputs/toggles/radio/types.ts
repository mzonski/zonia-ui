import { ThemeBorderSizes } from '@zonia-ui/theme';
import { InputHTMLAttributes } from 'react';
import { ValuesType } from 'utility-types';

import { StyledToggle } from '../_shared';

export const radioSizes = ['sm', 'md', 'lg'] as const;
export type RadioSize = ValuesType<typeof radioSizes>;

export type StyledRadioProps = {
  size?: RadioSize;
  border?: ThemeBorderSizes;
} & StyledToggle;

export type RadioProps = StyledRadioProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
