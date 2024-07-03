import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { RequiredDolar } from '@zonia-ui/theme';
import { ToggleStyles, ToggleMixins } from '../_shared';
import { StyledSwitchProps, SwitchProps } from './types';
import { SwitchMixins } from './style/mixins';

const Container = styled(ToggleStyles.Container)<RequiredDolar<StyledSwitchProps>>`
  ${ToggleMixins.pseudoElementColor};
  ${SwitchMixins.pill};
  ${SwitchMixins.size};
`;

const SwitchComponent = (
  {
    color = 'primary',
    size = 'sm',
    outlineColor = 'primary',
    borderColor = 'black',
    shape = 'medium',
    pillShape = 'oval',
    ...props
  }: Readonly<SwitchProps>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <Container
      $color={color}
      $size={size}
      $borderColor={borderColor}
      $outlineColor={outlineColor}
      $shape={shape}
      $pillShape={pillShape}
    >
      <ToggleStyles.Input ref={ref} {...props} />
      <ToggleStyles.PseudoElement />
    </Container>
  );
};

export const Switch = forwardRef(SwitchComponent);
