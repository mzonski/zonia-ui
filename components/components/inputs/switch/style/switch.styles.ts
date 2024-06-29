import { borderMixin, DolarPrefix, fillAbsoluteSpaceMixin } from '@zonia-ui/theme';
import styled from 'styled-components';

import { SwitchProps } from '../types';

import { SwitchMixins } from './mixins';

const Container = styled.div<NonNullable<DolarPrefix<SwitchProps>>>`
  display: inline-block;
  position: relative;

  ${SwitchMixins.colors};
  ${SwitchMixins.size};
  ${SwitchMixins.shape};
  z-index: 1;
`;

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  z-index: 2;
  opacity: 0;
  cursor: pointer;
  ${fillAbsoluteSpaceMixin}
`;

const Slider = styled.span`
  ${fillAbsoluteSpaceMixin};

  ${borderMixin('tiny')}

  &:before {
    position: absolute;
    content: '';
    transition: transform 0.25s cubic-bezier(0.38, 1.22, 0.54, 0.98);
  }
`;

export const SwitchStyles = {
  Container,
  Input,
  Slider,
};
