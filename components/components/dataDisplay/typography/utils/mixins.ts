import { css, StyleFunction } from 'styled-components';

import type { StyledHeadingProps } from '../HeadingVariant';
import type { StyledTextProps } from '../TextVariant';

export const textTypographyMixin: StyleFunction<StyledTextProps> = (ctx) => {
  const { $variant, $color, $weight = 'medium', $omitLineHeight } = ctx;

  const {
    components: {
      typography: { text: typographyText },
    },
    fonts: { weights: fontWeights },
    colors: { primary: primaryColors },
  } = ctx.theme;

  const { fontSize, lineHeight } = typographyText[$variant];
  const fontWeight = fontWeights[$weight];
  const fontColor = $color ? primaryColors[$color] : undefined;

  return css`
    color: ${fontColor ?? 'inherit'};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${$omitLineHeight ? fontSize : lineHeight};
  `;
};

export const headingTypographyMixin: StyleFunction<StyledHeadingProps> = (ctx) => {
  const { $variant, $color, $weight } = ctx;

  const {
    components: {
      typography: { head: typographyHead },
    },
    fonts: { weights: fontWeights },
    colors: { primary: primaryColors },
  } = ctx.theme;

  const { fontSize, lineHeight } = typographyHead[$variant];
  const fontWeight = fontWeights[$weight];
  const fontColor = $color ? primaryColors[$color] : undefined;

  return css`
    color: ${fontColor ?? 'inherit'};
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    line-height: ${lineHeight};
  `;
};
