import {
  blendColors,
  borderMixin,
  calculateTextContrast,
  colorMixin,
  fillAbsoluteSpaceMixin,
  focusOutlineMixin,
  rgbaToHex,
  StyleFunctionPick,
} from '@zonia-ui/theme';
import { css, StyleFunction } from 'styled-components';

import { StyledToggle } from './types';

// TODO: Move
const cursorMixin: StyleFunction<object> = () => {
  return css`
    input[type='checkbox'] {
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    }
  `;
};

const toggleDisplayMixin: StyleFunction<object> = () => {
  return css`
    display: inline-block;
    position: relative;

    span {
      display: block;
      ${fillAbsoluteSpaceMixin};
    }

    input[type='checkbox'] {
      ${fillAbsoluteSpaceMixin};
  `;
};

const toggleShapeMixin: StyleFunctionPick<StyledToggle, 'color'> = (ctx) => {
  const {
    $color: color,
    theme: {
      colors: { primary: primaryColors },
    },
  } = ctx;

  const selectedColor = primaryColors[color];

  return css`
    span {
      &:before {
        background-color: ${calculateTextContrast(selectedColor)};
      }
    }
  `;
};

const toggleBorderShapeMixin: StyleFunctionPick<StyledToggle, 'shape'> = (ctx) => {
  const { shape } = ctx.theme;
  return css`
    span {
      border-radius: ${shape[ctx.$shape]};
    }
  `;
};

const togglePseudoElementColorMixin: StyleFunctionPick<StyledToggle, 'color'> = (ctx) => {
  const {
    $color: color,
    theme: {
      colors: { primary: primaryColors },
    },
  } = ctx;

  const selectedColor = primaryColors[color];

  return css`
    span {
      &:before {
        background-color: ${calculateTextContrast(selectedColor)};
      }
    }
  `;
};

const toggleColorMixin: StyleFunctionPick<StyledToggle, 'color' | 'borderColor' | 'outlineColor'> = (ctx) => {
  const {
    $color: color,
    $borderColor: borderColor,
    $outlineColor: outlineColor,
    theme: {
      colors: { primary: primaryColors },
    },
  } = ctx;

  const selectedColor = primaryColors[color];

  const checkedHoverBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.1));
  const checkedActiveBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.2));

  const uncheckedHoverBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.85));
  const uncheckedActiveBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.75));
  // TODO: Remove border XD
  return css`
    span {
      ${colorMixin('bg', 'primary', 'grey100')}
      ${borderMixin('tiny', 'all', borderColor)}
    }

    input[type='checkbox'] {
      &:checked + * {
        ${colorMixin('bg', 'primary', color)}
      }

      &:focus + * {
        ${focusOutlineMixin('lg', outlineColor)}
      }

      &:hover:checked:not(:disabled) + * {
        background-color: ${checkedHoverBg};
      }
      &:active:checked:not(:disabled) + * {
        background-color: ${checkedActiveBg};
      }

      &:hover:not(:checked):not(:disabled) + * {
        background-color: ${uncheckedHoverBg};
      }
      &:active:not(:checked):not(:disabled) + * {
        background-color: ${uncheckedActiveBg};
      }

      &:disabled + * {
        opacity: 0.4;
      }
    }
  `;
};
export const ToggleMixins = {
  display: toggleDisplayMixin,
  color: toggleColorMixin,
  pseudoElementColor: togglePseudoElementColorMixin,
  cursor: cursorMixin,
  shape: toggleBorderShapeMixin,
};
