import styled from 'styled-components';
import type { Property } from 'csstype';
import { SpacingBox } from '../spacing';
import type { SpacingProps } from '../spacing/types';

export type FlexProps = {
  $inline?: boolean;
  $direction?: Property.FlexDirection;
  $justify?: Property.JustifyContent;
  $align?: Property.AlignItems;
  $wrap?: Property.FlexWrap;
  $grow?: Property.FlexGrow;
  $shrink?: Property.FlexShrink;
  $basis?: Property.FlexBasis;
  $alignContent?: Property.AlignContent;
  $alignSelf?: Property.AlignSelf;
  $flex?: Property.Flex;
  $flexFlow?: Property.FlexFlow;
  $gap?: Property.Gap;
  $order?: Property.Order;
};

export const Flexbox = styled(SpacingBox)<FlexProps>`
  display: ${(props) => (props.$inline ? 'inline-flex' : 'flex')};
  flex-direction: ${(props) => props.$direction};
  justify-content: ${(props) => props.$justify};
  align-items: ${(props) => props.$align};
  flex-wrap: ${(props) => props.$wrap};
  flex-grow: ${(props) => props.$grow};
  flex-shrink: ${(props) => props.$shrink};
  flex-basis: ${(props) => props.$basis};
  align-content: ${(props) => props.$alignContent};
  order: ${(props) => props.$order};
  flex: ${(props) => props.$flex};
  align-self: ${(props) => props.$alignSelf};
  flex-flow: ${(props) => props.$flexFlow};
  gap: ${(props) => props.$gap};
`;
