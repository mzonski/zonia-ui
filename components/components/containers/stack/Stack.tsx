import styled from 'styled-components';
import { Flexbox, FlexProps } from '../flexbox/Flexbox.tsx';

export type StackProps = Pick<FlexProps, '$inline' | '$direction' | '$gap'> & { $center?: boolean };

export const Stack = styled(Flexbox)<StackProps>`
  display: ${(props) => (props.$inline ? 'inline-flex' : 'flex')};
  flex-direction: ${(props) => props.$direction ?? 'column'};
  gap: ${(props) => props.$gap ?? '1rem'};
  justify-content: ${(props) => (props.$center ? 'center' : props.$justify)};
  align-items: ${(props) => (props.$center ? 'center' : props.$align)};
`;
