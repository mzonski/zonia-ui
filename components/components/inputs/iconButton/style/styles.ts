import { DolarPrefix } from '@zonia-ui/theme';
import styled from 'styled-components';

import { ButtonMixins } from '../../button/style';
import type { IconButtonProps } from '../types';

import { IconButtonMixins } from './mixins';

export const StyledIconButton = styled.button<NonNullable<DolarPrefix<IconButtonProps>>>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${ButtonMixins.shadows};
  ${ButtonMixins.typography};
  ${ButtonMixins.border};
  ${ButtonMixins.colors};
  ${ButtonMixins.transitions};

  ${IconButtonMixins.size};
  ${IconButtonMixins.shape};

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
