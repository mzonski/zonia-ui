import {
  blendColors,
  calculateTextContrast,
  colorMixin,
  fillAbsoluteSpaceMixin,
  focusOutlineMixin,
  rgbaToHex,
  StyleFunctionRequirePick,
} from '@zonia-ui/theme';
import { css, StyleFunction } from 'styled-components';

import type { StyledToggle } from './types';

const toggleLabelAlignmentMixin: StyleFunctionRequirePick<StyledToggle, 'hasText'> = (ctx) => {
  const { $hasText } = ctx;

  if ($hasText) return null;

  return css`
    label > div {
      align-content: center;
      height: 100%;
    }
  `;
};

const toggleDisplayMixin: StyleFunction<object> = (ctx) => {
  const { spacing } = ctx.theme;
  return css`
    display: inline-flex;
    position: relative;
    gap: ${spacing['2.5']};

    span {
      display: flex;
      flex-grow: 0;
      flex-shrink: 0;
    }

    input[type='checkbox'] {
      ${fillAbsoluteSpaceMixin};
    }
  `;
};

const toggleBorderShapeMixin: StyleFunctionRequirePick<StyledToggle, 'shape'> = (ctx) => {
  const { shape } = ctx.theme;
  return css`
    span {
      border-radius: ${shape[ctx.$shape]};
    }
  `;
};
const toggleBorderMixin: StyleFunctionRequirePick<StyledToggle, 'borderType' | 'borderColor'> = (ctx) => {
  const {
    $borderType,
    $borderColor,
    theme: {
      colors: { primary },
      borders: { size: borderSizes, defaultType },
    },
  } = ctx;

  const borderColor = primary[$borderColor];
  return css`
    span {
      border: ${borderSizes[$borderType]} ${defaultType} ${borderColor};
    }
  `;
};

const togglePseudoElementColorMixin: StyleFunctionRequirePick<StyledToggle, 'color'> = (ctx) => {
  const {
    $color: color,
    theme: {
      colors: { primary: primaryColors },
    },
  } = ctx;

  const selectedColor = primaryColors[color];

  return css`
    span:before {
      background-color: ${calculateTextContrast(selectedColor)};
    }
  `;
};

const toggleColorMixin: StyleFunctionRequirePick<StyledToggle, 'color' | 'borderColor' | 'outlineColor'> = (ctx) => {
  const {
    $color: color,
    $outlineColor: outlineColor,
    theme: {
      colors: { primary: primaryColors },
    },
  } = ctx;

  const selectedColor = primaryColors[color];

  const checkedHoverBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.1));
  const checkedActiveBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.3));

  const uncheckedHoverBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.85));
  const uncheckedActiveBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.75));
  return css`
    span {
      ${colorMixin('bg', 'primary', 'grey100')}
    }

    input[type='checkbox'] {
      &:checked + * {
        ${colorMixin('bg', 'primary', color)}
      }

      &:focus + * {
        ${focusOutlineMixin('lg', outlineColor)}
      }

      &:hover:checked:not(:disabled) + *,
      &:hover:indeterminate:not(:disabled) + * {
        background-color: ${checkedHoverBg};
      }

      &:active:checked:not(:disabled) + *,
      &:active:indeterminate:not(:disabled) + * {
        background-color: ${checkedActiveBg};
      }

      &:hover:not(:checked, :indeterminate):not(:disabled) + * {
        background-color: ${uncheckedHoverBg};
      }

      &:active:not(:checked, :indeterminate):not(:disabled) + * {
        background-color: ${uncheckedActiveBg};
      }

      &:disabled ~ * {
        opacity: 0.4;
      }
    }
  `;
};
export const ToggleMixins = {
  display: toggleDisplayMixin,
  color: toggleColorMixin,
  pseudoElementColor: togglePseudoElementColorMixin,
  shape: toggleBorderShapeMixin,
  border: toggleBorderMixin,
  label: toggleLabelAlignmentMixin,
};
