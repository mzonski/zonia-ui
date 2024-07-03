import type { ElementType } from 'react';
import styled from 'styled-components';
import { spacingBoxMixin } from '../spacing/utils/mixins';
import type { SpacingProps } from '../spacing/types';
import type { BoxProps } from '../Box';
import { Flexbox, type FlexProps } from './Flexbox';

export type SpacingFlexBoxProps<C extends ElementType = 'div'> = BoxProps<C> & SpacingProps & FlexProps;

const SpacingFlexBox = styled(Flexbox)<SpacingFlexBoxProps>`
  ${spacingBoxMixin}
`;

export default SpacingFlexBox;
