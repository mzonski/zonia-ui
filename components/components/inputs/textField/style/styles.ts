import { DolarPrefix } from '@zonia-ui/theme';
import styled from 'styled-components';

import { BasseTextFieldMixins } from '../../_input';
import { StyledTextFieldProps } from '../types';

import { TextFieldMixins } from './mixins';

const LabelWrapper = styled.label<DolarPrefix<StyledTextFieldProps>>`
  display: grid;
  grid-template:
    'label label label _1' auto
    'left input input right' 1fr
    'helperText helperText helperText helperText' min-content
    / min-content 1fr min-content min-content;

  ${BasseTextFieldMixins.alignment}
  ${BasseTextFieldMixins.border}
  ${BasseTextFieldMixins.colors}
  ${BasseTextFieldMixins.shape}
  ${BasseTextFieldMixins.spacing}
  ${BasseTextFieldMixins.typography}

  ${TextFieldMixins.typography}
  ${TextFieldMixins.colors}
  ${TextFieldMixins.alignment}
  ${TextFieldMixins.spacing}
`;

const Input = styled.input.attrs({
  type: 'text',
})`
  z-index: 1;
  grid-area: input;
`;
const TitleWrapper = styled.header`
  grid-area: label;
`;
const InputBgEl = styled.main`
  z-index: -1;

  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
`;
const LeftEl = styled.aside`
  grid-area: left;
`;
const RightEl = styled.aside`
  grid-area: right;
`;
const HelperText = styled.footer`
  grid-area: helperText;
`;

export const TextFieldStyles = {
  Wrapper: LabelWrapper,
  Input,
  Title: TitleWrapper,
  InputBgEl,
  Left: LeftEl,
  Right: RightEl,
  HelperText,
};
