import {
  blendColors,
  borderMixin,
  boxShadowMixin,
  calculateTextContrast,
  DolarPrefix,
  rgbaToHex,
  RuleBuilder,
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
    }
  `);

  switch (variant) {
    case 'primary': {
      const hoverBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.1));
      const activeBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.3));
      ruleBuilder.push(css`
        background-color: ${selectedColor};
        color: ${calculateTextContrast(selectedColor)};

        &:hover:not(&:disabled) {
          background-color: ${hoverBg};
        }
        &:active:not(&:disabled) {
          background-color: ${activeBg};
        }
      `);
      break;
    }

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
      ruleBuilder.push(css`
        background-color: transparent;
        &:hover:not(&:disabled) {
          border-color: ${selectedColor};
        }
        &:active:not(&:disabled) {
          border-color: ${selectedColor};
        }
      `);

      break;
    case 'text':
      ruleBuilder.push(css`
        background-color: transparent;
        border-color: transparent;
        box-shadow: unset;
        //&:hover:not(&:disabled) {
        //  border-color: transparent;
        //}
        &:active:not(&:disabled) {
          border-color: ${selectedColor};
        }
      `);

      break;
    default:
      break;
  }

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
  NonNullable<DolarPrefix<Pick<ButtonProps, 'size' | 'variant' | 'shadowColor'>>>
> = (ctx) => {
  const { $shadowColor, $variant, $size } = ctx;

  if ($variant === 'text') return null;

  const [hover, active] = convertSizeToShadows($size);

  return css`
    &:hover:not(&:disabled) {
      ${boxShadowMixin(hover, $shadowColor)};
    }

    &:active:not(&:disabled) {
      ${boxShadowMixin(active, $shadowColor)};
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

const buttonBorderMixin: StyleFunction<DolarPrefix<Pick<ButtonProps, 'variant'>>> = (ctx) => {
  const { $variant: variant } = ctx;
  const { size: borderSizes, defaultType } = ctx.theme.borders;

  const ruleBuilder = new RuleBuilder();

  if (variant === 'ghost') {
    ruleBuilder.push(css`
      border: ${borderSizes.small} ${defaultType} transparent;
    `);
  }

  ruleBuilder.push(css`
    ${variant !== 'ghost' && borderMixin('small')};

    ${shapeMixin('medium')}
  `);

  return ruleBuilder.build();
};

const buttonShapeMixin: StyleFunction<DolarPrefix<Pick<ButtonProps, 'variant'>>> = (_ctx) => {
  return css`
    ${shapeMixin('medium')}
  `;
};

const buttonTransitionMixin: StyleFunction<DolarPrefix<Pick<ButtonProps, 'variant'>>> = (ctx) => {
  const { $variant } = ctx;

  if ($variant === 'text')
    return css`
      transition: border-color 0.15s cubic-bezier(0.38, 1.22, 0.54, 0.98);
    `;

  return css`
    transition: box-shadow 0.15s cubic-bezier(0.38, 1.22, 0.54, 0.98);
  `;
};

export const ButtonMixins = {
  typography: buttonTypographyMixin,
  size: buttonSizeMixin,
  colors: buttonColorsMixin,
  shadows: buttonShadowMixin,
  border: buttonBorderMixin,
  shape: buttonShapeMixin,
  transitions: buttonTransitionMixin,
};
