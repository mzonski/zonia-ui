import type { Property } from 'csstype';

import type { ThemeShapeType } from '../types';

export const themeShapeKey = ['sharp', 'rounded', 'medium', 'pill', 'large', 'oval'] as const;

export const themeShapeMap = {
  sharp: '0',
  rounded: '2px',
  medium: '4px',
  pill: '8px',
  large: '16px',
  oval: '50%',
} as const satisfies Record<ThemeShapeType, Property.BorderRadius>;
