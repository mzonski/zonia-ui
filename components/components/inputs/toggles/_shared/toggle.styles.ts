import { fillAbsoluteSpaceMixin, RequiredDolar } from '@zonia-ui/theme';
import styled from 'styled-components';

import { ToggleMixins } from './mixins';
import { StyledToggle } from './types';

const Container = styled.div<RequiredDolar<StyledToggle>>`
  ${ToggleMixins.shape};
  ${ToggleMixins.color};
  ${ToggleMixins.cursor};
  ${ToggleMixins.display};

  z-index: 1;
`;

const Input = styled.input.attrs({
  type: 'checkbox',
})`
  z-index: 2;
  appearance: none;
`;

const PseudoElement = styled.span`
  &:before {
    ${fillAbsoluteSpaceMixin};

    content: '';
    z-index: 0;
    transition: transform 0.25s cubic-bezier(0.38, 1.22, 0.54, 0.98);
  }
`;

export const ToggleStyles = {
  Container,
  Input,
  PseudoElement,
};
