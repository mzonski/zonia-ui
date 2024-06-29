import { isDevEnv } from '@zonia-ui/core';
import {
  adjustLightness,
  adjustSaturation,
  appendAlpha,
  blendColors,
  borderMixin,
  calculateTextContrast,
  DolarPrefix,
  rgbaToHex,
  RuleBuilder,
  boxShadowMixin,
  shapeMixin,
  ThemeElevationSpacing,
  typographyMixin,
} from '@zonia-ui/theme';
import { css, Interpolation, StyleFunction } from 'styled-components';

import { ButtonProps, ButtonSize } from '../types';

const borderSizeMapInterpolation: Record<NonNullable<ButtonProps['size']>, Interpolation<object>> = {
  '2xs': css`
    padding: 6px 12px;
    gap: 6px;
  `,
  xs: css`
    padding: 8px 16px;
    gap: 8px;
  `,
  sm: css`
    padding: 10px 20px;
    gap: 8px;
  `,
  md: css`
    padding: 10px 20px;
    gap: 10px;
  `,
  lg: css`
    padding: 12px 24px;
    gap: 10px;
  `,
};

const buttonSizeMixin: StyleFunction<DolarPrefix<Pick<ButtonProps, 'size' | 'fullWidth'>>> = ({
  $size: size,
  $fullWidth: isFullWidth,
}) => {
  const interpolation: Interpolation<object>[] = [
    css`
      min-width: 16px;
      min-height: 16px;
    `,
  ];
  if (isFullWidth) {
    interpolation.push(css`
      width: 100%;
      display: inline-flex;
    `);
  }
  if (size) {
    interpolation.push(borderSizeMapInterpolation[size]);
  }
  return interpolation;
};

const buttonColorsMixin: StyleFunction<DolarPrefix<Pick<ButtonProps, 'color' | 'variant'>>> = (ctx) => {
  const {
    colors: { primary: primaryColors },
  } = ctx.theme;
  const { $variant: variant } = ctx;

  const selectedColor = primaryColors[ctx.$color ?? 'primary'];

  const ruleBuilder = new RuleBuilder();

  ruleBuilder.push(css`
    &:disabled {
      opacity: 0.4;
      // color: ${primaryColors.grey500};
      // background-color: ${variant === 'ghost' ? 'transparent' : primaryColors.white};
      // border-color: ${primaryColors.grey400};
    }
  `);

  switch (variant) {
    case 'primary':
      ruleBuilder.push(css`
        background-color: ${selectedColor};
        color: ${calculateTextContrast(selectedColor)};

        &:hover:not(&:disabled) {
          background-color: ${adjustLightness(selectedColor, 4)};
        }
        &:active:not(&:disabled) {
          background-color: ${adjustLightness(selectedColor, -2)};
        }
      `);
      break;
    case 'secondary':
      {
        const hoverBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.9));
        const activeBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.85));

        ruleBuilder.push(css`
          background-color: ${primaryColors.white};
          color: ${calculateTextContrast(primaryColors.white)};

          &:hover:not(&:disabled) {
            color: ${calculateTextContrast(hoverBg)};
            background-color: ${hoverBg};
          }
          &:active:not(&:disabled) {
            color: ${calculateTextContrast(activeBg)};
            background-color: ${activeBg};
          }
        `);
      }

      break;
    case 'ghost':
      {
        ruleBuilder.push(css`
          background-color: transparent;
          &:hover:not(&:disabled) {
            border-color: ${selectedColor};
          }
          &:active:not(&:disabled) {
            border-color: ${selectedColor};
          }
        `);
      }
      break;
    default:
      break;
  }

  console.log('=>(mixins.ts:126) ruleBuilder.build', ruleBuilder.build());
  return ruleBuilder.build();
};

function convertSizeToShadows(size: ButtonProps['size']): [ThemeElevationSpacing, ThemeElevationSpacing] {
  switch (size) {
    case '2xs':
    case 'xs':
      return ['sm', 'xs'];
    case 'sm':
    case 'md':
    default:
      return ['md', 'sm'];
    case 'lg':
      return ['lg', 'md'];
  }
}

const buttonShadowMixin: StyleFunction<
  NonNullable<DolarPrefix<Pick<ButtonProps, 'size' | 'variant' | 'color' | 'shadowColor'>>>
> = (ctx) => {
  const { $shadowColor: shadowColor } = ctx;
  const [hover, active] = convertSizeToShadows(ctx.$size);

  return css`
    &:hover:not(&:disabled) {
      ${boxShadowMixin(hover, shadowColor)};
    }

    &:active:not(&:disabled) {
      ${boxShadowMixin(active, shadowColor)};
    }
  `;
};

const convertButtonSizeToTypographyVariant = (buttonSize?: ButtonSize) => {
  switch (buttonSize) {
    case 'md':
    case 'lg':
      return 'md';
    case '2xs':
    case 'xs':
    case 'sm':
    default:
      return 'sm';
  }
};

const buttonTypographyMixin: StyleFunction<
  DolarPrefix<Pick<ButtonProps, 'size' | 'labelTextVariant' | 'labelBold'>>
> = (ctx) => {
  const { $labelTextVariant: labelVariant, $size: size, $labelBold: isBold } = ctx;

  const fontWidth = isBold ? 'bold' : 'normal';
  const variant = labelVariant ?? convertButtonSizeToTypographyVariant(size);

  return css`
    ${typographyMixin('text', variant, fontWidth)}
  `;
};

const buttonShapeMixin: StyleFunction<DolarPrefix<Pick<ButtonProps, 'size' | 'variant' | 'labelBold'>>> = (ctx) => {
  const { $variant: variant, $size: size, $labelBold: isBold } = ctx;

  const ruleBuilder = new RuleBuilder();

  ruleBuilder.push(css`
    transition: border 0.05s linear;

    border: 0;

    ${variant !== 'ghost' && borderMixin('small')};

    ${shapeMixin('medium')}

    &:hover:not(&:disabled) {
      ${borderMixin('small')}
    }

    &:active:not(&:disabled) {
      ${borderMixin('tiny')}
    }
  `);

  return ruleBuilder.build();
};

export const ButtonMixins = {
  typography: buttonTypographyMixin,
  size: buttonSizeMixin,
  colors: buttonColorsMixin,
  shadows: buttonShadowMixin,
  shape: buttonShapeMixin,
};
