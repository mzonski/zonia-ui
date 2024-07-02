import { DolarPrefix } from '@zonia-ui/theme';
import styled from 'styled-components';

import { StyledCheckboxProps } from '../types';

import { CheckboxMixins } from './mixins';

const Container = styled.div<DolarPrefix<Required<StyledCheckboxProps>>>`
  display: inline-block;
  position: relative;

  ${CheckboxMixins.colors};
  ${CheckboxMixins.size};
  ${CheckboxMixins.animations};
  ${CheckboxMixins.shape};
  ${CheckboxMixins.cursor};
  ${CheckboxMixins.alignment};
  z-index: 1;
`;

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  z-index: 2;
  appearance: none;
  cursor: pointer;
`;

const Box = styled.div`
  z-index: 1;
`;

const Svg = styled.svg.attrs({
  width: '14',
  height: '14',
  viewBox: '0 0 14 14',
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
})``;

const Path = styled.path`
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: currentColor;
  stroke-width: 1.7;
  transition:
    d 0.2s ease-out,
    stroke-width 0.2s ease-out;
`;

export const CheckboxStyles = {
  Container,
  Input,
  Box,
  Svg,
  Path,
};
