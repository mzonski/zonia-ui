import { DolarPrefix, ThemeSpacings } from '@zonia-ui/theme';
import { css, Interpolation, StyleFunction } from 'styled-components';

import { IconButtonProps } from '../types';

const sizeSpacingMap: Record<NonNullable<IconButtonProps['size']>, ThemeSpacings> = {
  '2xs': '1',
  xs: '1.5',
  sm: '2',
  md: '2.5',
  lg: '3',
};

const iconButtonSizeMixin: StyleFunction<DolarPrefix<Pick<IconButtonProps, 'size' | 'fullWidth' | 'fill'>>> = (ctx) => {
  const {
    $size,
    $fullWidth,
    $fill,
    theme: { spacing },
  } = ctx;

  const spacingSize = $size ? spacing[sizeSpacingMap[$size]] : undefined;

  const interpolation: Interpolation<object>[] = [
    css`
      min-width: 16px;
      min-height: 16px;
    `,
  ];
  if ($fullWidth) {
    interpolation.push(css`
      width: 100%;
      display: inline-flex;
    `);
  }
  if (spacingSize && !$fill) {
    interpolation.push(css`
      padding: ${spacingSize};
      gap: ${spacingSize};
    `);
  }
  if ($fill) {
    interpolation.push(css`
      width: 100%;
      height: 100%;
    `);
  }
  return interpolation;
};

const iconButtonShapeMixin: StyleFunction<DolarPrefix<Pick<IconButtonProps, 'shape' | 'fill'>>> = (ctx) => {
  const {
    $shape,
    $fill,
    theme: { shape },
  } = ctx;
  if ($fill) return null;
  return css`
    border-radius: ${shape[$shape ?? 'oval']};
  `;
};

export const IconButtonMixins = {
  size: iconButtonSizeMixin,
  shape: iconButtonShapeMixin,
};
