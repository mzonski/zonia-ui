import styled from 'styled-components';
import type { Property } from 'csstype';
import { DolarPrefix, ThemeSpacings } from '@zonia-ui/theme';
import { AsProp } from '@zonia-ui/core';
import { FlexboxMixins } from './mixins';

export type FlexProps = {
  inline?: boolean;
  flexGap?: ThemeSpacings;
  columnGap?: ThemeSpacings;
  rowGap?: ThemeSpacings;
  flexDirection?: Property.FlexDirection;
  justify?: Property.JustifyContent;
  align?: Property.AlignItems;
  wrap?: Property.FlexWrap;
  grow?: Property.FlexGrow;
  shrink?: Property.FlexShrink;
  basis?: Property.FlexBasis;
  alignContent?: Property.AlignContent;
  alignSelf?: Property.AlignSelf;
  flex?: Property.Flex;
  flexFlow?: Property.FlexFlow;
  order?: Property.Order;
};

export const Flexbox = styled.div<DolarPrefix<FlexProps> & AsProp<'div' | 'span' | 'p'>>`
  ${FlexboxMixins.gap}
  display: ${(props) => (props.$inline ? 'inline-flex' : 'flex')};
  flex-direction: ${(props) => props.$flexDirection};
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
`;
