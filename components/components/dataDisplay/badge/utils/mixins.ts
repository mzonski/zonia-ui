import {
  borderMixin,
  calculateTextContrast,
  flexAlignmentMixin,
  isThemePrimaryColor,
  ValidColorFormat,
} from '@zonia-ui/theme';
import type { StyleFunction } from 'styled-components';
import { css } from 'styled-components';

import type { StyledBadgeProps } from '../Badge';

import { getBadgeGapSpacing, getBadgeHorizontalPaddingSpacing, getBadgeVerticalPaddingSpacing } from './converters';

export type BadgeMixinProps = Required<
  Pick<StyledBadgeProps, '$shape' | '$color' | '$size' | '$iconPosition' | '$noWrap'>
>;

export const styledBadgeMixin =
  ({
    $size = 'md',
    $color = 'primary',
    $shape = 'badge',
    $noWrap = true,
    $iconPosition = 'left',
  }: Partial<BadgeMixinProps>): StyleFunction<object> =>
  (ctx) => {
    const {
      colors: { primary: primaryColors, secondary: secondaryColors },
      spacing,
      shape,
    } = ctx.theme;

    const horizontalPadding = spacing[getBadgeHorizontalPaddingSpacing($size ?? 'md')];
    const verticalPadding = spacing[getBadgeVerticalPaddingSpacing($size ?? 'md')];
    const gap = spacing[getBadgeGapSpacing($size ?? 'md')];
    let backgroundColor: ValidColorFormat | undefined;
    let color: ValidColorFormat | undefined;

    if ($color) {
      if (isThemePrimaryColor($color)) {
        backgroundColor = primaryColors[$color];
        color = calculateTextContrast(primaryColors[$color]);
      } else {
        backgroundColor = secondaryColors[$color];
        color = calculateTextContrast(secondaryColors[$color]);
      }
    }

    return css`
      ${$noWrap && `flex-wrap: nowrap; text-wrap: nowrap;`}
      ${color && `color: ${color};`};
      ${backgroundColor && `background-color: ${backgroundColor};`};
      flex-direction: ${$iconPosition === 'left' ? 'row' : 'row-reverse'};
      gap: ${gap};
      padding: ${`${verticalPadding} ${horizontalPadding}`};
      border-radius: ${$shape === 'badge' ? horizontalPadding : shape[$shape ?? 'pill']};
      text-align: center;
    `;
  };

export const badgeMixin: StyleFunction<BadgeMixinProps> = (ctx) => {
  const { $size, $color, $shape, $iconPosition } = ctx;

  return css`
    ${styledBadgeMixin({ $size, $color, $shape, $iconPosition })}
  `;
};
