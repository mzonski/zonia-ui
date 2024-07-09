import { StyledTextFieldProps, TextInputComponentProps } from '../textField';

export type StyledConciseTextFieldProps = StyledTextFieldProps & { hasPlaceholder?: boolean };

export type TextFieldProps = StyledTextFieldProps & TextInputComponentProps;
