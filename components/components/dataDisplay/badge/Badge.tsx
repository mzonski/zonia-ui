import { createElement, ElementType, ReactElement } from 'react';
import styled from 'styled-components';
import { DolarPrefix, ThemePrimaryColor } from '@zonia-ui/theme';

import { TextVariant } from '../typography';
import { badgeMixin } from './utils/mixins';
import { getBadgeIconSize, getBadgeTypographyTextVariant } from './utils/converters';

export type StyledBadgeProps = DolarPrefix<Pick<BadgeProps, 'size' | 'shape' | 'iconPosition' | 'color'>>;

const StyledBadge = styled.div<Required<StyledBadgeProps>>`
  ${badgeMixin}
`;

export type BadgeProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: ThemePrimaryColor;
  icon?: ElementType;
  iconPosition?: 'left' | 'right';
  shape?: 'rounded' | 'square';
  text: string;
};

export const Badge = ({
  text,
  icon,
  size = 'md',
  color = 'primary',
  iconPosition = 'left',
  shape = 'rounded',
}: Readonly<BadgeProps>) => {
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
    <StyledBadge aria-label={text ?? 'Badge'} $size={size} $color={color} $shape={shape} $iconPosition={iconPosition}>
      {Content}
    </StyledBadge>
  );
};
