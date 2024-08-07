import { ForwardedRef, forwardRef } from 'react';
import { omit } from 'lodash';
import { useUniqueId } from '../../../hooks/useUniqueId';
import { WarningCircleIcon } from '../../../icons/WarningCircleIcon';
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
    borderColor,
    shape = 'large',
    verticalBorders = false,
    error,
    ...inputProps
  } = restProps;
  const fieldId = useUniqueId(id);
  const currentBorderColor = error ? 'error' : borderColor ?? 'black';
  return (
    <TextFieldStyles.Wrapper
      $borderType={borderType}
      $outlineColor={outlineColor}
      $borderColor={currentBorderColor}
      $verticalBorders={verticalBorders}
      $shape={shape}
      $color={color}
      htmlFor={`tf-${fieldId}`}
      $hasError={!!error}
    >
      <TextFieldStyles.Input id={`tf-${fieldId}`} ref={ref} {...omit(inputProps, 'errorMessage')} />
      {label && <TextFieldStyles.Title className="tf--title">{label}</TextFieldStyles.Title>}
      {left && <TextFieldStyles.Left className="tf--left">{left}</TextFieldStyles.Left>}
      <TextFieldStyles.InputBgEl className="tf--inputBg" />
      {right && <TextFieldStyles.Right className="tf--right">{right}</TextFieldStyles.Right>}
      {helperText && (
        <TextFieldStyles.HelperText className="tf--helperText">
          {error && <WarningCircleIcon />}
          {helperText}
        </TextFieldStyles.HelperText>
      )}
    </TextFieldStyles.Wrapper>
  );
};

const TextField = forwardRef(TextFieldComponent);

export default TextField;
