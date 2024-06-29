import { ForwardedRef, forwardRef } from 'react';
import { SwitchProps } from './types';
import { SwitchStyles } from './style/switch.styles';

const SwitchComponent = (
  { color = 'primary', size = 'sm', ...props }: Readonly<SwitchProps>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <SwitchStyles.Container $color={color} $size={size}>
      <SwitchStyles.Input ref={ref} {...props} />
      <SwitchStyles.Slider />
    </SwitchStyles.Container>
  );
};

export const Switch = forwardRef(SwitchComponent);
