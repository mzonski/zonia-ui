import { DolarPrefix } from '@zonia-ui/theme';
import styled from 'styled-components';

import { Stack } from '../../../containers';
import { ButtonMixins } from '../../button/style';
import { ButtonGroupProps } from '../types';

import { ButtonGroupMixins } from './mixins';

export const StyledButtonGroup = styled(Stack).attrs<DolarPrefix<ButtonGroupProps>>({})`
  display: flex;

  ${ButtonGroupMixins.direction}
  ${ButtonGroupMixins.stick}

  button {
    ${ButtonMixins.size};
    ${ButtonMixins.shadows};
    ${ButtonMixins.typography};
    ${ButtonMixins.border};
    ${ButtonMixins.colors};
  }
`;
