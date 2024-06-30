import { borderMixin, DolarPrefix } from '@zonia-ui/theme';
import styled from 'styled-components';

import { StyledSwitchProps } from '../types';

import { SwitchMixins } from './mixins';

const Container = styled.div<DolarPrefix<Required<StyledSwitchProps>>>`
  display: inline-block;
  position: relative;

  ${SwitchMixins.alignment};
  ${SwitchMixins.colors};
  ${SwitchMixins.size};
  ${SwitchMixins.shape};
  ${SwitchMixins.cursor};
  z-index: 1;
`;

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  z-index: 2;
  appearance: none;
  cursor: pointer;
`;

const Slider = styled.span`
  ${borderMixin('tiny')}

  &:before {
    z-index: 1;
    //position: absolute;
    //content: '';
    transition: transform 0.25s cubic-bezier(0.38, 1.22, 0.54, 0.98);
  }
`;

export const SwitchStyles = {
  Container,
  Input,
  Slider,
};
