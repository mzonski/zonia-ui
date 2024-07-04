import { ThemeElevationSpacing, ThemeOutline, ThemePrimaryColor, ThemeSpacings } from '@zonia-ui/theme';
import type { StyleFunction } from 'styled-components';
import { css } from 'styled-components';

export const defaultBorderMixin =
  (size: ThemeSpacings = 'px', color: ThemePrimaryColor = 'black'): StyleFunction<object> =>
  (ctx) => {
    const {
      colors: { primary: primaryColors },
      spacing,
    } = ctx.theme;

    return css`
      border: ${spacing[size]} solid ${primaryColors[color]};
    `;
  };

export const boxShadowMixin =
  (space: ThemeElevationSpacing, color: ThemePrimaryColor = 'black'): StyleFunction<object> =>
  (ctx) => {
    const {
      colors: { primary: primaryColors },
      spacing,
      elevation: { spacing: elevationSpacing },
    } = ctx.theme;

    return css`
      box-shadow: ${spacing[elevationSpacing[space]]} ${spacing[elevationSpacing[space]]} 0 ${primaryColors[color]};
    `;
  };

export const focusOutlineMixin =
  (space: ThemeOutline, color: ThemePrimaryColor = 'primary'): StyleFunction<object> =>
  (ctx) => {
    const {
      colors: { primary: primaryColors },
      spacing,
      elevation: { outline },
    } = ctx.theme;

    return css`
      box-shadow: 0 0 0 ${spacing[outline[space]]} ${primaryColors[color]};
    `;
  };
