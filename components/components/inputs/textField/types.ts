import type { InputHTMLAttributes, ReactElement } from 'react';

import { BaseStyledTextFieldProps } from '../_input/types';

export type StyledTextFieldProps = BaseStyledTextFieldProps & { hasError?: boolean };

export type TextInputComponentProps = {
  label: string;
  placeholder?: string;
  left?: ReactElement | string;
  right?: ReactElement | string;
  helperText?: ReactElement | string;
  error?: boolean;
} & Pick<
  InputHTMLAttributes<HTMLInputElement>,
  'id' | 'disabled' | 'readOnly' | 'onChange' | 'value' | 'defaultValue' | 'type'
>;

export type TextFieldProps = StyledTextFieldProps & TextInputComponentProps;
