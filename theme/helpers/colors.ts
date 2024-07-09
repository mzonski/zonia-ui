import { ExecutionContext } from 'styled-components';

import { isThemePrimaryColor, isThemeSecondaryColor } from '../constants';
import type { ThemePrimaryColor, ThemeSecondaryColor } from '../types';

export function colorHelper(ctx: ExecutionContext) {
  const getColor = (color: ThemePrimaryColor | ThemePrimaryColor) => {
    if (isThemePrimaryColor(color)) {
      return ctx.theme.colors.primary[color];
    }

    return ctx.theme.colors.secondary[color];
  };
  const getPrimaryOrDefault = (color: ThemePrimaryColor, defaultColor?: ThemePrimaryColor) => {
    return ctx.theme.colors.primary[color ?? defaultColor ?? 'primary'];
  };
  const getSecondaryOrDefault = (color: ThemeSecondaryColor, defaultColor?: ThemeSecondaryColor) => {
    return ctx.theme.colors.secondary[color ?? defaultColor ?? 'crystalBlue'];
  };

  return {
    getPrimary: getPrimaryOrDefault,
    getSecondary: getSecondaryOrDefault,
    getColor,
    isPrimary: isThemePrimaryColor,
    isSecondary: isThemeSecondaryColor,
  };
}
