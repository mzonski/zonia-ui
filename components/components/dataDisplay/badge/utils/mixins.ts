import { borderMixin, flexAlignmentMixin } from '@zonia-ui/theme';
import type { StyleFunction } from 'styled-components';
import { css } from 'styled-components';

import type { StyledBadgeProps } from '../Badge';

import { getBadgeGapSpacing, getBadgeHorizontalPaddingSpacing, getBadgeVerticalPaddingSpacing } from './converters';

export type BadgeMixinProps = Required<Pick<StyledBadgeProps, '$shape' | '$color' | '$size' | '$iconPosition'>>;

export const badgeMixin: StyleFunction<BadgeMixinProps> = (ctx) => {
  const { $size: badgeSize, $color: bgColor, $shape: badgeShape, $iconPosition: iconPosition } = ctx;

  const {
    colors: { primary: primaryColors },
    spacing,
    shape: { square: squareShape },
  } = ctx.theme;

  const horizontalPadding = spacing[getBadgeHorizontalPaddingSpacing(badgeSize)];
  const verticalPadding = spacing[getBadgeVerticalPaddingSpacing(badgeSize)];
  const gap = spacing[getBadgeGapSpacing(badgeSize)];

  return css`
    ${flexAlignmentMixin('center', 'center', true)}
    ${borderMixin('tiny')}
    flex-direction: ${iconPosition === 'left' ? 'row' : 'row-reverse'};
    gap: ${gap};
    padding: ${`${verticalPadding} ${horizontalPadding}`};
    background-color: ${primaryColors[bgColor]};
    border-radius: ${badgeShape === 'rounded' ? horizontalPadding : squareShape};
    align-self: flex-start;
    text-align: center;
  `;
};
