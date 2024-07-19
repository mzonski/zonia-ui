import { DolarPrefix } from '@zonia-ui/theme';
import styled from 'styled-components';

import { BasseTextFieldMixins } from '../../_input';
import { StyledConciseTextFieldProps } from '../types';

import { ConciseTextFieldMixins } from './mixins';

const LabelWrapper = styled.label<DolarPrefix<StyledConciseTextFieldProps>>`
  display: grid;
  grid-template:
    '_1 _1 _1 _1' 8px
    'left input input right' 1fr
    'helperText helperText helperText helperText' min-content
    / min-content 1fr min-content min-content;
  position: relative;

  ${BasseTextFieldMixins.alignment}
  ${BasseTextFieldMixins.border}
  ${BasseTextFieldMixins.colors}
  ${BasseTextFieldMixins.shape}
  ${BasseTextFieldMixins.spacing}
  ${BasseTextFieldMixins.typography}

  ${ConciseTextFieldMixins.colors}
  ${ConciseTextFieldMixins.alignment}
  ${ConciseTextFieldMixins.spacing}
  ${ConciseTextFieldMixins.typography}
  ${ConciseTextFieldMixins.placeholder}
`;

const Placeholder = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  z-index: -2;
`;

const Input = styled.input`
  z-index: 1;
  grid-area: input;
`;
const TitleWrapper = styled.header`
  grid-area: label;
`;
const InputBgEl = styled.main`
  z-index: -1;

  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
`;
const LeftEl = styled.aside`
  z-index: 1;
  grid-area: left;
`;
const RightEl = styled.aside`
  z-index: 1;
  grid-area: right;
`;
const HelperText = styled.footer`
  grid-area: helperText;
`;

const Status = styled.div`
  grid-area: status;
  background-color: green;
`;

export const TextFieldConciseStyles = {
  Wrapper: LabelWrapper,
  Input,
  Title: TitleWrapper,
  InputBgEl,
  Left: LeftEl,
  Right: RightEl,
  HelperText,
  Placeholder,
};
