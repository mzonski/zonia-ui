import { StyledTextFieldProps, TextInputComponentProps } from '../textField';

export type StyledConciseTextFieldProps = StyledTextFieldProps & { hasPlaceholder?: boolean };

export type ConciseTextFieldProps = StyledTextFieldProps & TextInputComponentProps;
