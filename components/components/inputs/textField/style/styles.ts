import { DolarPrefix } from '@zonia-ui/theme';
import styled from 'styled-components';

import { badgeMixin, BadgeMixinProps, styledBadgeMixin } from '../../../dataDisplay/badge/utils/mixins';
import { StyledTextFieldProps } from '../types';

import { TextFieldMixins } from './mixins';

const LabelWrapper = styled.label<DolarPrefix<StyledTextFieldProps>>`
  display: grid;
  grid-template:
    'label label label _1' auto
    'label label label _1' min-content
    'left input input right' 1fr
    'helperText helperText helperText helperText' min-content
    / min-content 1fr min-content min-content;

  ${TextFieldMixins.colors}
  ${TextFieldMixins.alignment}
  ${TextFieldMixins.border}
  ${TextFieldMixins.shape}
  ${TextFieldMixins.spacing}
  ${TextFieldMixins.typography}
`;

const Placeholder = styled.span`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
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

  grid-area: 3 / 1 / 4 / 5;
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

const Status = styled.div`
  grid-area: status;
  background-color: green;
`;

export const TextFieldStyles = {
  Wrapper: LabelWrapper,
  Input,
  Title: TitleWrapper,
  InputBgEl,
  Left: LeftEl,
  Right: RightEl,
  HelperText,
  Placeholder,
  Status,
};
