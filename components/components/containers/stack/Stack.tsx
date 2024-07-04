import styled, { css } from 'styled-components';
import { DolarPrefix } from '@zonia-ui/theme';
import { Flexbox, FlexProps } from '../flexbox';

const directionMap = {
  right: 'row',
  left: 'row-reverse',
  top: 'column-reverse',
  bottom: 'column',
} as const;

export type StackProps = Pick<FlexProps, 'inline' | 'gap'> & {
  center?: boolean;
  direction?: keyof typeof directionMap;
};

export const Stack = styled(Flexbox)<DolarPrefix<StackProps>>`
  ${(props) =>
    props.$inline &&
    css`
      display: inline-flex;
    `};
  flex-direction: ${(props) => directionMap[props.$direction ?? 'bottom']};
  justify-content: ${(props) => (props.$center ? 'center' : props.$justify)};
  align-items: ${(props) => (props.$center ? 'center' : props.$align)};
`;
