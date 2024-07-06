import {
  borderMixin,
  calculateTextContrast,
  flexAlignmentMixin,
  isThemePrimaryColor,
  ThemePrimaryColor,
  ValidColorFormat,
} from '@zonia-ui/theme';
import type { StyleFunction } from 'styled-components';
import { css } from 'styled-components';

import type { StyledBadgeProps } from '../Badge';

import { getBadgeGapSpacing, getBadgeHorizontalPaddingSpacing, getBadgeVerticalPaddingSpacing } from './converters';

export type BadgeMixinProps = Required<Pick<StyledBadgeProps, '$shape' | '$color' | '$size' | '$iconPosition'>>;

export const badgeMixin: StyleFunction<BadgeMixinProps> = (ctx) => {
  const { $size, $color, $shape, $iconPosition } = ctx;

  const {
    colors: { primary: primaryColors, secondary: secondaryColors },
    spacing,
    shape,
  } = ctx.theme;

  const horizontalPadding = spacing[getBadgeHorizontalPaddingSpacing($size)];
  const verticalPadding = spacing[getBadgeVerticalPaddingSpacing($size)];
  const gap = spacing[getBadgeGapSpacing($size)];
  let backgroundColor: ValidColorFormat;
  let color: ValidColorFormat;

  if (isThemePrimaryColor($color)) {
    backgroundColor = primaryColors[$color];
    color = calculateTextContrast(primaryColors[$color]);
  } else {
    backgroundColor = secondaryColors[$color];
    color = calculateTextContrast(secondaryColors[$color]);
  }

  return css`
    ${flexAlignmentMixin('center', 'center', true)}
    ${borderMixin('tiny')}
    color: ${color};
    flex-direction: ${$iconPosition === 'left' ? 'row' : 'row-reverse'};
    gap: ${gap};
    padding: ${`${verticalPadding} ${horizontalPadding}`};
    background-color: ${backgroundColor};
    border-radius: ${$shape === 'badge' ? horizontalPadding : shape[$shape]};
    text-align: center;
  `;
};
