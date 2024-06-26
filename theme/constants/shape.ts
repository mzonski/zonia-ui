import type { Property } from 'csstype';

import type { ThemeShapeType } from '../types';

export const themeShape = ['sharp', 'rounded', 'medium', 'pill', 'oval'] as const;

export const themeShapes = {
  sharp: '0',
  rounded: '2px',
  medium: '4px',
  pill: '8px',
  oval: '50%',
} as const satisfies Record<ThemeShapeType, Property.BorderRadius>;
