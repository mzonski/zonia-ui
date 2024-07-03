import { DolarPrefix } from '@zonia-ui/theme';
import styled from 'styled-components';

import { ToggleStyles } from '../../_shared';
import { StyledCheckboxProps } from '../types';

import { CheckboxMixins } from './mixins';

const Container = styled(ToggleStyles.Container)<DolarPrefix<Required<StyledCheckboxProps>>>`
  ${CheckboxMixins.color};
  ${CheckboxMixins.size};
  ${CheckboxMixins.animations};
`;

const Element = styled.span`
  z-index: 0;
`;

const Svg = styled.svg.attrs({
  width: '14',
  height: '14',
  viewBox: '0 0 14 14',
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
})`
  width: 100%;
  height: 100%;
`;

const Path = styled.path`
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: currentColor;
  stroke-width: 1.7;
  transition:
    d 0.15s cubic-bezier(0.38, 1.22, 0.54, 0.98),
    stroke-width 0.25s cubic-bezier(0.38, 1.22, 0.54, 0.98);
`;

export const CheckboxStyles = {
  Container,
  Input: ToggleStyles.Input,
  Element,
  Svg,
  Path,
};
