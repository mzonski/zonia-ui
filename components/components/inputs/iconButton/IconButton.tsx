import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { IconButtonProps } from './types';
import { StyledIconButton } from './style/styles';

export type ButtonComponentProps = PropsWithChildren<
  IconButtonProps & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'disabled'>
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
    shape = 'oval',
    fill = false,
    ...buttonProps
  }: ButtonComponentProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <StyledIconButton
      ref={ref}
      {...buttonProps}
      $color={color}
      $labelTextVariant={labelTextVariant}
      $labelBold={labelBold}
      $size={size}
      $fullWidth={fullWidth}
      $variant={variant}
      $shadowColor={shadowColor}
      $shape={shape}
      $fill={fill}
    >
      {children}
    </StyledIconButton>
  );
};

const IconButton = forwardRef(ButtonComponent);

export default IconButton;
