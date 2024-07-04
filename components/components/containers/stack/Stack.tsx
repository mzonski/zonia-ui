import styled from 'styled-components';
import { DolarPrefix } from '@zonia-ui/theme';
import { Flexbox, FlexProps } from '../flexbox';

export type StackProps = Pick<FlexProps, 'inline' | 'direction' | 'gap'> & { center?: boolean };

export const Stack = styled(Flexbox)<DolarPrefix<StackProps>>`
  display: ${(props) => (props.$inline ? 'inline-flex' : 'flex')};
  flex-direction: ${(props) => props.$direction ?? 'column'};
  gap: ${(props) => props.$gap ?? '1rem'};
  justify-content: ${(props) => (props.$center ? 'center' : props.$justify)};
  align-items: ${(props) => (props.$center ? 'center' : props.$align)};
`;
