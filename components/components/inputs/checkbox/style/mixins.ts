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

import { CheckboxProps } from '../types';

const checkboxColorMixin: StyleFunctionPick<CheckboxProps, 'color' | 'borderColor' | 'outlineColor'> = (ctx) => {
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
  //
  return css`
    div {
      ${colorMixin('bg', 'primary', 'grey100')}
      ${borderMixin('tiny', 'all', borderColor)}

      &:before {
        background-color: ${calculateTextContrast(selectedColor)};
      }
    }

    input[type='checkbox'] {
      &:checked + div {
        ${colorMixin('bg', 'primary', color)}
      }

      &:indeterminate + div {
        ${colorMixin('bg', 'primary', color)}
      }

      &:focus + div {
        ${focusOutlineMixin('lg', outlineColor)}
      }

      &:hover:checked:not(:disabled) + div {
        background-color: ${checkedHoverBg};
      }
      &:active:checked:not(:disabled) + div {
        background-color: ${checkedActiveBg};
      }

      &:hover:not(:checked):not(:disabled) + div {
        background-color: ${uncheckedHoverBg};
      }
      &:active:not(:checked):not(:disabled) + div {
        background-color: ${uncheckedActiveBg};
      }

      &:disabled + div {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }
  `;
};

const checkboxSizes = {
  sm: 16,
  md: 20,
  lg: 24,
};

const checkboxSizeMixin: StyleFunctionPick<CheckboxProps, 'size'> = (ctx) => {
  const { $size } = ctx;

  const size = checkboxSizes[$size];

  return css`
    width: ${size}px;
    height: ${size}px;

    input[type='checkbox'] + div {
      width: ${size}px;
      height: ${size}px;
    }
  `;
};

const checkboxShapeMixin: StyleFunction<object> = (ctx) => {
  const { size: borderSizes, color: defaultColor, defaultType } = ctx.theme.borders;
  return css`
    div {
      border-radius: 4px;
    }
  `;
};

const checkboxDisabledMixin: StyleFunction<object> = () => {
  return css`
    input[type='checkbox'] {
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    }
  `;
};
const checkboxAlignmentMixin: StyleFunction<object> = () => {
  return css`
    div {
      svg {
        width: 100%;
        height: 100%;
      }
    }

    input[type='checkbox'] {
      ${fillAbsoluteSpaceMixin};
    }
  `;
};
const checkboxAnimationsMixin: StyleFunction<object> = () => {
  return css`
    input[type='checkbox']:not(:indeterminate, :checked) + div {
      .checkbox-left-path {
        stroke-width: 0;
        d: path('M 7 7 L 7 7');
      }
      .checkbox-right-path {
        stroke-width: 0;
        d: path('M 7 7 L 7 7');
      }
    }

    input[type='checkbox']:indeterminate:not(:checked) + div {
      .checkbox-left-path {
        d: path('M 2.35 7 L 5.25 7');
      }
      .checkbox-right-path {
        d: path('M 5.25 7 L 11.65 7');
      }
    }

    input[type='checkbox']:checked:not(:indeterminate) + div {
      .checkbox-left-path {
        d: path('M 2.35 7 L 5.25 10.2');
      }
      .checkbox-right-path {
        d: path('M 5.25 10.2 L 11.65 3.8');
      }
    }
  `;
};

export const CheckboxMixins = {
  colors: checkboxColorMixin,
  size: checkboxSizeMixin,
  animations: checkboxAnimationsMixin,
  shape: checkboxShapeMixin,
  cursor: checkboxDisabledMixin,
  alignment: checkboxAlignmentMixin,
};
