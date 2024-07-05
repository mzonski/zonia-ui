import styled, { css } from 'styled-components';
import { DolarPrefix } from '@zonia-ui/theme';
import { directionMap, StackProps } from './types';
import { StackMixins } from './mixins';

export const Stack = styled.div<Partial<DolarPrefix<StackProps>>>`
  ${(props) =>
    props.$inline &&
    css`
      display: inline-flex;
    `};
  flex-direction: ${(props) => directionMap[props.$direction ?? 'bottom']};
  flex-wrap: ${(props) => props.$wrap ?? 'nowrap'};

  ${StackMixins.border}
  ${StackMixins.center}
`;
