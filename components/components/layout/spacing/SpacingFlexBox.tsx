import { ElementType } from 'react';
import styled from 'styled-components';
import { BoxProps } from '../Box';
import { Flexbox, FlexProps } from '../flexbox/Flexbox';
import { spacingBoxMixin } from './utils/mixins';
import { MarginProps, PaddingProps } from './types';

export type SpacingFlexBoxProps<C extends ElementType = 'div'> = BoxProps<C> & MarginProps & PaddingProps & FlexProps;

export const SpacingFlexBox = styled(Flexbox)<SpacingFlexBoxProps>`
  ${spacingBoxMixin}
`;
