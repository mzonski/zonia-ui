import { ElementType, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { DolarPrefix } from '@zonia-ui/theme';
import { AsProp } from '@zonia-ui/core';

export type StyledBadgeProps = DolarPrefix<Pick<BadgeProps, 'size' | 'shape' | 'iconPosition' | 'color'>>;

const StyledBadge = styled.div<Required<StyledBadgeProps>>`
  ${badgeMixin}
`;

export type PaperProps<C extends ElementType = 'div'> = PropsWithChildren &
  AsProp<C> & {
    elevation: number;
  };

export const Paper = ({ children }: Readonly<PaperProps>) => {
  return (
    <StyledBadge aria-label={text ?? 'Badge'} $size={size} $color={color} $shape={shape} $iconPosition={iconPosition}>
      {children}
    </StyledBadge>
  );
};
