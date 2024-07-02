import { ForwardedRef, forwardRef } from 'react';
import { CheckboxProps } from './types';
import { CheckboxStyles } from './style/checkbox.styles';

const CheckboxComponent = (
  {
    color = 'primary',
    size = 'sm',
    outlineColor = 'primary',
    borderColor = 'black',
    ...props
  }: Readonly<CheckboxProps>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <CheckboxStyles.Container $color={color} $size={size} $borderColor={borderColor} $outlineColor={outlineColor}>
      <CheckboxStyles.Input ref={ref} {...props} />
      <CheckboxStyles.Box>
        <CheckboxStyles.Svg>
          <CheckboxStyles.Path className="checkbox-left-path" />
          <CheckboxStyles.Path className="checkbox-right-path" />
        </CheckboxStyles.Svg>
      </CheckboxStyles.Box>
    </CheckboxStyles.Container>
  );
};

export const Checkbox = forwardRef(CheckboxComponent);
