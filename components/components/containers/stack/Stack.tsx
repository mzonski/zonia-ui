import styled from 'styled-components';
import { DolarPrefix } from '@zonia-ui/theme';
import { directionMap, StackProps } from './types';
import { StackMixins } from './mixins';

export const Stack = styled.div<Partial<DolarPrefix<StackProps>>>`
  display: ${(props) => (props.$inline ? 'inline-flex' : 'flex')};
  flex-direction: ${(props) => directionMap[props.$direction ?? 'bottom']};
  flex-wrap: ${(props) => props.$wrap ?? 'nowrap'};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};

  ${StackMixins.border}
  ${StackMixins.center}
`;
