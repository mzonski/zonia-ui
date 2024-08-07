import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { ButtonProps } from './types';
import { StyledButton } from './style/styles';

export type ButtonComponentProps = PropsWithChildren<
  ButtonProps & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'disabled'>
> & { 'data-testid'?: string };

const ButtonComponent = (
  {
    size = 'md',
    labelTextVariant,
    children,
    labelBold,
    fullWidth = false,
    color = 'primary',
    variant = 'primary',
    shadowColor = 'black',
    fill = false,
    ...buttonProps
  }: ButtonComponentProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <StyledButton
      ref={ref}
      {...buttonProps}
      $color={color}
      $labelTextVariant={labelTextVariant}
      $labelBold={labelBold}
      $size={size}
      $fullWidth={fullWidth}
      $variant={variant}
      $shadowColor={shadowColor}
      $fill={fill}
    >
      {children}
    </StyledButton>
  );
};

const Button = forwardRef(ButtonComponent);

export default Button;
