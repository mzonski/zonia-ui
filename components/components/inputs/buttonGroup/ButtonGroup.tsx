import { ButtonHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { appendDolarPrefix } from '@zonia-ui/theme';
import { ButtonGroupProps } from './types';
import { StyledButtonGroup } from './style/styles';

export type ButtonGroupComponentProps = PropsWithChildren<
  ButtonGroupProps & Pick<ButtonHTMLAttributes<HTMLDivElement>, 'type' | 'onClick' | 'disabled'>
> & { 'data-testid'?: string };

const ButtonGroupComponent = (
  { children, stick = undefined, ...props }: ButtonGroupComponentProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { $direction = 'right', ...buttonProps } = appendDolarPrefix(props);

  return (
    <StyledButtonGroup ref={ref} {...buttonProps} $direction={$direction} $stick={stick}>
      {children}
    </StyledButtonGroup>
  );
};

const ButtonGroup = forwardRef(ButtonGroupComponent);

export default ButtonGroup;
