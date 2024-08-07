import { RequiredDolar } from '@zonia-ui/theme';
import styled from 'styled-components';

import { InputMixins } from '../../../../style';
import { StyledText, StyledTextProps } from '../../../dataDisplay';

import { ToggleMixins } from './mixins';
import { StyledToggle } from './types';

const Container = styled.div<RequiredDolar<StyledToggle>>`
  ${ToggleMixins.label};
  ${ToggleMixins.border};
  ${ToggleMixins.shape};
  ${ToggleMixins.color};
  ${InputMixins.cursor};
  ${ToggleMixins.display};

  z-index: 1;
`;

const Input = styled.input.attrs({
  type: 'checkbox',
  name: 'switch',
})`
  z-index: 2;
  appearance: none;
`;

const RadioInput = styled.input.attrs({
  type: 'radio',
  name: 'switch',
})`
  z-index: 2;
  appearance: none;
`;

const PseudoElement = styled.span`
  &:before {
    content: '';
    z-index: 0;
    transition: transform 0.25s cubic-bezier(0.38, 1.22, 0.54, 0.98);
  }
`;

const HtmlLabel = styled.label``;

const Label = styled(StyledText).attrs<Partial<StyledTextProps>>({
  as: 'div',
  $variant: 'sm',
  $weight: 'medium',
  $omitLineHeight: true,
})`
  a {
    z-index: 4;
  }
`;

const Text = styled(StyledText).attrs<Partial<StyledTextProps>>({
  as: 'p',
  $variant: 'sm',
  $weight: 'normal',
  $omitLineHeight: false,
})`
  a {
    z-index: 4;
  }
`;

export const ToggleStyles = {
  Container,
  Input,
  RadioInput,
  PseudoElement,
  HtmlLabel,
  Label,
  Text,
};
