import { DolarPrefix } from '@zonia-ui/theme';
import styled from 'styled-components';

import type { ButtonProps } from '../types';

import { ButtonMixins } from './mixins';

export const StyledButton = styled.button<NonNullable<DolarPrefix<ButtonProps>>>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${ButtonMixins.size};
  ${ButtonMixins.shadows};
  ${ButtonMixins.typography};
  ${ButtonMixins.shape};
  ${ButtonMixins.colors};

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
