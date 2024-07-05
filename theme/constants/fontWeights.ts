import type { Property } from 'csstype';

import type { ThemeFontWeightType } from '../types';

export const themeFontWeightKey = ['bold', 'semibold', 'medium', 'normal'] as const;

export const themeFontWeightMap = {
  bold: 700,
  semibold: 600,
  medium: 500,
  normal: 400,
} as const satisfies Record<ThemeFontWeightType, Property.FontWeight>;
