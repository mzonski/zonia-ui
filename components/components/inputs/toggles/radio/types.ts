import { InputHTMLAttributes } from 'react';

import { StyledToggle, ToggleLabelProps } from '../_shared';

export type RadioProps = StyledToggle & ToggleLabelProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;
