import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { RequiredDolar } from '@zonia-ui/theme';
import { ToggleStyles, ToggleMixins } from '../_shared';
import { RadioProps, StyledRadioProps } from './types';
import { RadioMixins } from './style/mixins';

const Container = styled(ToggleStyles.Container)<RequiredDolar<StyledRadioProps>>`
  ${ToggleMixins.pseudoElementColor};
  ${RadioMixins.alignment};
  ${RadioMixins.size};
  ${RadioMixins.shape};
`;

const RadioComponent = (
  {
    color = 'primary',
    size = 'sm',
    border = 'tiny',
    outlineColor = 'primary',
    borderColor = 'black',
    shape = 'oval',
    ...props
  }: Readonly<RadioProps>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <Container
      $color={color}
      $size={size}
      $borderColor={borderColor}
      $outlineColor={outlineColor}
      $border={border}
      $shape={shape}
    >
      <ToggleStyles.Input ref={ref} {...props} />
      <ToggleStyles.PseudoElement />
    </Container>
  );
};

const Radio = forwardRef(RadioComponent);

export default Radio;
