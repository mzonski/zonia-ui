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
    shape = 'pill',
    pillShape = 'oval',
    borderType = 'tiny',
    borderColor = 'black',
    text,
    label,
    ...props
  }: Readonly<SwitchProps>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <Container
      $size={size}
      $shape={shape}
      $pillShape={pillShape}
      $borderType={borderType}
      $borderColor={borderColor}
      $outlineColor={outlineColor}
      $color={color}
      $hasText={!!text}
    >
      <ToggleStyles.Input ref={ref} {...props} />
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

const Switch = forwardRef(SwitchComponent);

export default Switch;
