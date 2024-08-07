import { css, RuleSet, StyleFunction } from 'styled-components';

import { MixinCorners, ThemeBorderSizes, ThemePrimaryColor, ThemeShapeType } from '../types';

export const borderMixin =
  (size: ThemeBorderSizes = 'tiny', corners: MixinCorners = 'all', color?: ThemePrimaryColor): StyleFunction<object> =>
  (ctx) => {
    const primaryColors = ctx.theme.colors.primary;
    const { size: borderSizes, color: defaultColor, defaultType } = ctx.theme.borders;
    const borderStyle = `${borderSizes[size]} ${defaultType} ${color ? primaryColors[color] : defaultColor}`;

    let rule: RuleSet;

    switch (corners) {
      case 'top':
        rule = css`
          border-top: ${borderStyle};
        `;
        break;
      case 'left':
        rule = css`
          border-left: ${borderStyle};
        `;
        break;
      case 'right':
        rule = css`
          border-right: ${borderStyle};
        `;
        break;
      case 'bottom':
        rule = css`
          border-bottom: ${borderStyle};
        `;
        break;
      case 'vertical':
        rule = css`
          border-top: ${borderStyle};
          border-bottom: ${borderStyle};
        `;
        break;
      case 'horizontal':
        rule = css`
          border-left: ${borderStyle};
          border-right: ${borderStyle};
        `;
        break;
      case 'all':
      default:
        rule = css`
          border: ${borderStyle};
        `;
        break;
    }

    return rule;
  };

export const shapeMixin =
  (shapeType: ThemeShapeType): StyleFunction<object> =>
  (ctx) => {
    const { shape } = ctx.theme;

    return css`
      border-radius: ${shape[shapeType]};
    `;
  };
