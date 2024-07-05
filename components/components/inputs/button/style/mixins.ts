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
  ThemeSpacings,
  typographyMixin,
} from '@zonia-ui/theme';
import { css, Interpolation, StyleFunction } from 'styled-components';

import { ButtonProps, ButtonSize } from '../types';

/**
 * returns [verticalSpacing, horizontalSpacing, gap]
 */
const spacingSizeButtonMap: Record<NonNullable<ButtonProps['size']>, [ThemeSpacings, ThemeSpacings, ThemeSpacings]> = {
  '2xs': ['1.5', '3', '1'],
  xs: ['2', '4', '1.5'],
  sm: ['2.5', '5', '1.5'],
  md: ['2.5', '5', '2'],
  lg: ['3', '6', '2.5'],
};

const buttonSizeMixin: StyleFunction<DolarPrefix<Pick<ButtonProps, 'size' | 'fullWidth' | 'fill'>>> = ({
  $size: size,
  $fullWidth: isFullWidth,
  $fill,
  theme: { spacing },
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
    const [verticalSpacing, horizontalSpacing, gap] = spacingSizeButtonMap[size];
    interpolation.push(css`
      padding: ${!$fill ? `${spacing[verticalSpacing]} ${spacing[horizontalSpacing]}` : 'unset'};
      gap: ${spacing[gap]};
    `);
  }
  if ($fill) {
    interpolation.push(css`
      width: 100%;
      height: 100%;
    `);
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
  NonNullable<DolarPrefix<Pick<ButtonProps, 'size' | 'variant' | 'shadowColor' | 'fill'>>>
> = (ctx) => {
  const { $shadowColor, $variant, $size, $fill } = ctx;

  if ($variant === 'text' || $fill) return null;

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
  const {
    components: { typography },
  } = ctx.theme;

  const fontWidth = isBold ? 'bold' : 'normal';
  const variant = labelVariant ?? convertButtonSizeToTypographyVariant(size);

  const { fontSize } = typography.text[variant];

  return css`
    ${typographyMixin('text', variant, fontWidth)}
    svg {
      width: calc(${fontSize} * 1.25);
      height: calc(${fontSize} * 1.25);
    }
  `;
};

const buttonBorderMixin: StyleFunction<DolarPrefix<Pick<ButtonProps, 'variant' | 'fill'>>> = (ctx) => {
  const { $variant, $fill } = ctx;
  const { size: borderSizes, defaultType } = ctx.theme.borders;

  if ($fill) return null;

  const ruleBuilder = new RuleBuilder();

  if ($variant === 'ghost') {
    ruleBuilder.push(css`
      border: ${borderSizes.small} ${defaultType} transparent;
    `);
  }

  ruleBuilder.push(css`
    ${$variant !== 'ghost' && borderMixin('small')};

    ${shapeMixin('medium')}
  `);

  return ruleBuilder.build();
};

const buttonShapeMixin: StyleFunction<DolarPrefix<Pick<ButtonProps, 'fill'>>> = (ctx) => {
  const { $fill } = ctx;

  if ($fill) return null;

  return css`
    ${shapeMixin('medium')}
  `;
};

const buttonTransitionMixin: StyleFunction<DolarPrefix<Pick<ButtonProps, 'variant' | 'fill'>>> = (ctx) => {
  const { $variant, $fill } = ctx;

  if ($fill) return null;

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
