import { DolarPrefix } from '@zonia-ui/theme';
import styled from 'styled-components';

import { StyledTextFieldProps } from '../types';

import { TextFieldMixins } from './mixins';

const LabelWrapper = styled.label<DolarPrefix<StyledTextFieldProps>>`
  display: grid;
  grid-template:
    'label label label _1' auto
    'label label label status' min-content
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

const Input = styled.input.attrs({
  type: 'text',
})`
  z-index: 1;
  grid-area: input;
  place-items: center;
  margin-inline: 1px;
  border: 0;

  &::placeholder {
    // color: colors.get-color(neutral);
  }

  &:read-only {
    opacity: 0.95;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 1;

    &::placeholder {
      color: $placeholder-color;
      opacity: 0.4;
      border-bottom: unset;
    }
  }

  &:required {
    &:invalid {
      box-shadow: none;
    }
  }

  @media not screen and (prefers-reduced-motion: reduce) {
    transition: border-color ease-in-out 100ms;
  }
  @media screen and (prefers-reduced-motion: reduce) {
    transition: none;
  }
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

export const TextFieldStyles = {
  Wrapper: LabelWrapper,
  Input,
  Title: TitleWrapper,
  InputBgEl,
  Left: LeftEl,
  Right: RightEl,
  HelperText,
};
