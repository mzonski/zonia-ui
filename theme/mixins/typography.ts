import { css, RuleSet, StyleFunction } from 'styled-components';

import { ThemeFontWeightType, ThemePrimaryColor, ThemeTypographyHeads, ThemeTypographyTexts } from '../types';

export function typographyMixin(
  type: 'head',
  variant: ThemeTypographyHeads,
  weight?: ThemeFontWeightType,
  color?: ThemePrimaryColor,
): StyleFunction<object>;
export function typographyMixin(
  type: 'text',
  variant: ThemeTypographyTexts,
  weight?: ThemeFontWeightType,
  color?: ThemePrimaryColor,
): StyleFunction<object>;
export function typographyMixin(
  type: 'text' | 'head',
  variant: ThemeTypographyHeads | ThemeTypographyTexts,
  weight?: ThemeFontWeightType,
  color?: ThemePrimaryColor,
): StyleFunction<object> {
  return (ctx) => {
    const {
      components: { typography },
      fonts: { weights: fontWeights },
      colors: { primary },
    } = ctx.theme;

    const rules: RuleSet[] = [];

    const { fontSize, lineHeight } = typography[type][variant];

    rules.push(css`
      font-size: ${fontSize};
      line-height: ${lineHeight};

      svg {
        width: ${fontSize};
        height: ${fontSize};
      }
    `);

    if (weight) {
      const fontWeight = fontWeights[weight];
      rules.push(css`
        font-weight: ${fontWeight};
      `);
    }

    if (color) {
      const fontColor = primary[color];
      rules.push(css`
        color: ${fontColor};
      `);
    }

    return rules;
  };
}
