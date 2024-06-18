import type { ThemeSpacings, ThemeElevationSpacing } from '../types';

export const themeElevationType = ['md', 'lg', 'xl'] as const;
export const themeElevationSpacing = {
  md: '1',
  lg: '2',
  xl: '3',
} as const satisfies Record<ThemeElevationSpacing, ThemeSpacings>;

export const themeElevationOutline = {
  md: 'px',
  lg: '0.5',
  xl: '1',
} as const satisfies Record<ThemeElevationSpacing, ThemeSpacings>;
