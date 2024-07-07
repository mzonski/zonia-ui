import { createElement, ReactElement } from 'react';
import styled from 'styled-components';
import { DolarPrefix } from '@zonia-ui/theme';

import { TextVariant } from '../typography';
import { badgeMixin } from './utils/mixins';
import { getBadgeIconSize, getBadgeTypographyTextVariant } from './utils/converters';
import { BadgeProps } from './types';

export type StyledBadgeProps = DolarPrefix<Pick<BadgeProps, 'size' | 'shape' | 'iconPosition' | 'color' | 'noWrap'>>;

const StyledBadge = styled.div<Required<StyledBadgeProps>>`
  ${badgeMixin}
`;

export const Badge = ({
  text,
  icon,
  size = 'md',
  color = 'primary',
  iconPosition = 'left',
  shape = 'badge',
  noWrap = true,
  className,
}: Readonly<BadgeProps & Partial<Pick<HTMLDivElement, 'className'>>>) => {
  const textElement = (
    <TextVariant variant={getBadgeTypographyTextVariant(size)} weight="medium">
      {text}
    </TextVariant>
  );
  let Content: ReactElement;

  if (!icon) {
    Content = textElement;
  } else {
    const Icon = createElement(icon, { size: getBadgeIconSize(size) });
    Content = (
      <>
        {Icon}
        {textElement}
      </>
    );
  }

  return (
    <StyledBadge
      className={className}
      aria-label={text ?? 'Badge'}
      $size={size}
      $color={color}
      $shape={shape}
      $iconPosition={iconPosition}
      $noWrap={noWrap}
    >
      {Content}
    </StyledBadge>
  );
};
