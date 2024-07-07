import type { InputHTMLAttributes, ReactElement } from 'react';

import { BaseStyledTextFieldProps } from '../_input/types';

export type StyledTextFieldProps = BaseStyledTextFieldProps & { hasError: boolean };

export type TextInputComponentProps = {
  label: string;
  placeholder?: string;
  left?: ReactElement | string;
  right?: ReactElement | string;
  helperText?: ReactElement | string;
} & Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'disabled' | 'readOnly' | 'onChange' | 'value'> &
  ({ error: true; errorMessage: string } | { error: false | undefined });

export type TextFieldProps = StyledTextFieldProps & TextInputComponentProps;
