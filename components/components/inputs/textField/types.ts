import { InputHTMLAttributes, ReactElement } from 'react';

import { ThemeStyledProps } from '../../../style/props';

export type StyledTextFieldProps = {
  verticalBorders: boolean;
} & Pick<ThemeStyledProps, 'borderType' | 'outlineColor' | 'borderColor' | 'shape'>;

export type TextInputComponentProps = {
  label: string;
  placeholder?: string;
  left?: ReactElement | string;
  right?: ReactElement | string;
  helperText?: ReactElement | string;
} & Pick<InputHTMLAttributes<HTMLInputElement>, 'id' | 'required' | 'disabled' | 'readOnly' | 'onChange' | 'value'>;

export type TextFieldProps = StyledTextFieldProps & TextInputComponentProps;
