import { ElementType, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { AsProp } from '@zonia-ui/core';
import type { DolarPrefix } from '@zonia-ui/theme';
import { SpacingBox } from '../../containers';
import type { SpacingProps } from '../../containers/spacing/types';
import { spacingBoxMixin } from '../../containers/spacing/utils/mixins';

export const StyledPaper = styled.div<DolarPrefix<SpacingProps>>`
  background-color: ${(props) => props.theme.colors.primary.grey100};
  ${spacingBoxMixin}
`;

export type PaperProps<C extends ElementType = 'div'> = PropsWithChildren & AsProp<C>;

export const Paper = ({ children, ...props }: Readonly<PaperProps>) => {
  return <StyledPaper {...props}>{children}</StyledPaper>;
};
