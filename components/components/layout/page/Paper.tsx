import { ElementType, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { AsProp } from '@zonia-ui/core';
import { spacingBoxMixin } from '../../containers/spacing/utils/mixins';

export const StyledPage = styled.div`
  width: 100%;
  height: 100%;
`;

export type PaperProps<C extends ElementType = 'div'> = PropsWithChildren & AsProp<C>;

export const Paper = ({ children, ...props }: Readonly<PaperProps>) => {
  return <StyledPage {...props}>{children}</StyledPage>;
};
