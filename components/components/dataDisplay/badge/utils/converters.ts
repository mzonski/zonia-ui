import type { ThemeSpacings, ThemeTypographyTexts, ValidSizeFormat } from '@zonia-ui/theme';

import { BadgeProps } from '../types';

export const getBadgeGapSpacing = (size: BadgeProps['size']): ThemeSpacings => {
  switch (size) {
    default:
      return '1';
    case 'xs':
      return '0.5';
    case 'sm':
    case 'md':
      return '1';
    case 'lg':
      return '1.5';
  }
};

export const getBadgeVerticalPaddingSpacing = (size: NonNullable<BadgeProps['size']>): ThemeSpacings => {
  switch (size) {
    case 'xs':
    case 'sm':
      return '0.5';
    default:
    case 'md':
      return '1';
    case 'lg':
      return '1.5';
  }
};

export const getBadgeHorizontalPaddingSpacing = (size: BadgeProps['size']): ThemeSpacings => {
  switch (size) {
    case 'xs':
      return '2';
    case 'sm':
      return '2.5';
    default:
    case 'md':
      return '3';
    case 'lg':
      return '3.5';
  }
};

export const getBadgeTypographyTextVariant = (size: BadgeProps['size']): ThemeTypographyTexts => {
  switch (size) {
    case 'xs':
      return 'xs';
    default:
    case 'sm':
      return 'sm';
  }
};

export const getBadgeIconSize = (size: BadgeProps['size']): ValidSizeFormat => {
  switch (size) {
    case 'xs':
      return '12px';
    default:
      return '16px';
  }
};
