import { ForwardedRef, forwardRef } from 'react';
import { useUniqueId } from '../../../hooks/useUniqueId';
import { Badge } from '../../dataDisplay';
import { TextFieldConciseStyles } from './style';
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
    hasError,
    placeholder,
    ...inputProps
  } = restProps;
  const fieldId = useUniqueId(id);
  return (
    <TextFieldConciseStyles.Wrapper
      $borderType={borderType}
      $outlineColor={outlineColor}
      $borderColor={borderColor}
      $verticalBorders={verticalBorders}
      $shape={shape}
      $color={color}
      $hasError={!!hasError}
      $hasPlaceholder={!!placeholder}
      htmlFor={`tf-${fieldId}`}
    >
      <TextFieldConciseStyles.Input id={`tf-${fieldId}`} ref={ref} {...inputProps} placeholder={placeholder ?? label} />

      <TextFieldConciseStyles.InputBgEl className="tf--inputBg" />
      {left && <TextFieldConciseStyles.Left className="tf--left">{left}</TextFieldConciseStyles.Left>}
      {right && <TextFieldConciseStyles.Right className="tf--right">{right}</TextFieldConciseStyles.Right>}
      {helperText && (
        <TextFieldConciseStyles.HelperText className="tf--helperText">{helperText}</TextFieldConciseStyles.HelperText>
      )}
      <TextFieldConciseStyles.Placeholder className="tf--placeholder">
        <div className="tf--placeholder-item">{label}</div>
      </TextFieldConciseStyles.Placeholder>
    </TextFieldConciseStyles.Wrapper>
  );
};

const TextFieldConcise = forwardRef(TextFieldComponent);

export default TextFieldConcise;
