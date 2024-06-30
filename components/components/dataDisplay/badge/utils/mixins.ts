import { borderMixin, calculateTextContrast, flexAlignmentMixin } from '@zonia-ui/theme';
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
    shape,
  } = ctx.theme;

  const horizontalPadding = spacing[getBadgeHorizontalPaddingSpacing(badgeSize)];
  const verticalPadding = spacing[getBadgeVerticalPaddingSpacing(badgeSize)];
  const gap = spacing[getBadgeGapSpacing(badgeSize)];
  const backgroundColor = primaryColors[bgColor];
  const color = calculateTextContrast(primaryColors[bgColor]);

  console.log('=>(mixins.ts:27) backgroundColor, color', backgroundColor, color);

  return css`
    ${flexAlignmentMixin('center', 'center', true)}
    ${borderMixin('tiny')}
    color: ${color};
    flex-direction: ${iconPosition === 'left' ? 'row' : 'row-reverse'};
    gap: ${gap};
    padding: ${`${verticalPadding} ${horizontalPadding}`};
    background-color: ${backgroundColor};
    border-radius: ${badgeShape === 'badge' ? horizontalPadding : shape[badgeShape]};
    text-align: center;
  `;
};
