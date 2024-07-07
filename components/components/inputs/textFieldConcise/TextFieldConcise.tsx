import { ForwardedRef, forwardRef } from 'react';
import { useUniqueId } from '../../../hooks/useUniqueId';
import { TextFieldStyles } from './style';
import { TextFieldProps } from './types';

const TextFieldComponent = (
  { id, label, helperText, left, right, ...restProps }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const {
    color = 'primary',
    borderType = 'medium',
    outlineColor = 'primary',
    borderColor = 'black',
    shape = 'large',
    verticalBorders = false,
    ...inputProps
  } = restProps;
  const fieldId = useUniqueId(id);
  return (
    <TextFieldStyles.Wrapper
      $borderType={borderType}
      $outlineColor={outlineColor}
      $borderColor={borderColor}
      $verticalBorders={verticalBorders}
      $shape={shape}
      $color={color}
      htmlFor={`tf-${fieldId}`}
    >
      <TextFieldStyles.Input id={`tf-${fieldId}`} ref={ref} {...inputProps} />
      {label && <TextFieldStyles.Title className="tf--title">{label}</TextFieldStyles.Title>}
      {left && <TextFieldStyles.Left className="tf--left">{left}</TextFieldStyles.Left>}
      <TextFieldStyles.InputBgEl className="tf--inputBg" />
      {right && <TextFieldStyles.Right className="tf--right">{right}</TextFieldStyles.Right>}
      {helperText && <TextFieldStyles.HelperText className="tf--helperText">{helperText}</TextFieldStyles.HelperText>}
    </TextFieldStyles.Wrapper>
  );
};

const TextField = forwardRef(TextFieldComponent);

export default TextField;
