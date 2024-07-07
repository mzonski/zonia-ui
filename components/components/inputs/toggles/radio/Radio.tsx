import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { RequiredDolar } from '@zonia-ui/theme';
import { StyledToggle, ToggleMixins, ToggleStyles } from '../_shared';
import { RadioProps } from './types';
import { RadioMixins } from './style/mixins';

const Container = styled(ToggleStyles.Container)<RequiredDolar<StyledToggle>>`
  ${ToggleMixins.pseudoElementColor};
  ${RadioMixins.alignment};
  ${RadioMixins.size};
  ${RadioMixins.shape};
`;

const RadioComponent = (
  {
    color = 'primary',
    size = 'sm',
    borderType = 'tiny',
    outlineColor = 'primary',
    borderColor = 'black',
    shape = 'oval',
    label,
    text,
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
      $borderType={borderType}
      $shape={shape}
      $hasText={!!text}
    >
      <ToggleStyles.RadioInput ref={ref} {...props} />
      <ToggleStyles.PseudoElement />

      {!label && !text ? null : (
        <ToggleStyles.HtmlLabel>
          {label && <ToggleStyles.Label $omitLineHeight={!text}>{label}</ToggleStyles.Label>}
          {text && <ToggleStyles.Text>{text}</ToggleStyles.Text>}
        </ToggleStyles.HtmlLabel>
      )}
    </Container>
  );
};

const Radio = forwardRef(RadioComponent);

export default Radio;
