import {
  blendColors,
  calculateTextContrast,
  colorMixin,
  DolarPrefix,
  fillAbsoluteSpaceMixin,
  focusOutlineMixin,
  rgbaToHex,
  RuleBuilder,
  valueToRem,
} from '@zonia-ui/theme';
import { css, RuleSet, StyleFunction } from 'styled-components';

import { StyledSwitchProps, SwitchProps } from '../types';

const switchColorMixin: StyleFunction<NonNullable<DolarPrefix<Pick<SwitchProps, 'color'>>>> = (ctx) => {
  const {
    $color,
    theme: {
      colors: { primary: primaryColors },
    },
  } = ctx;

  const ruleBuilder = new RuleBuilder();
  const color = $color ?? 'primary';
  const selectedColor = primaryColors[color];

  const checkedHoverBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.1));
  const checkedActiveBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.2));

  const uncheckedHoverBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.85));
  const uncheckedActiveBg = rgbaToHex(blendColors(selectedColor, primaryColors.white, 0.75));

  ruleBuilder.push(css`
    span {
      ${colorMixin('bg', 'primary', 'grey100')}

      &:before {
        background-color: ${calculateTextContrast(selectedColor)};
      }
    }
    input[type='checkbox'] {
      &:not(&:checked) + span {
        &:before {
          background-color: ${calculateTextContrast(primaryColors.grey100)};
        }
      }

      &:checked + span {
        ${colorMixin('bg', 'primary', color)}
      }

      &:focus + span {
        ${focusOutlineMixin('lg', color)}
      }

      &:hover:is(&:checked):not(:disabled) + span {
        background-color: ${checkedHoverBg};
      }
      &:active:is(&:checked):not(:disabled) + span {
        background-color: ${checkedActiveBg};
      }

      &:hover:not(&:checked):not(:disabled) + span {
        background-color: ${uncheckedHoverBg};
      }
      &:active:not(&:checked):not(:disabled) + span {
        background-color: ${uncheckedActiveBg};
      }

      &:active:not(:disabled) + span {
        ${focusOutlineMixin('md', color)}
      }

      &:disabled + span {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }
  `);

  return ruleBuilder.build();
};

// Not every thumbPx works flawlessly with this, don't know why yet xD
const switchToggleMixin = (thumbPx: number): RuleSet => {
  const spacing = 3;

  const height = thumbPx + spacing;
  const width = thumbPx * 2 + spacing;
  const topMargin = spacing / 2;
  const thumbSize = thumbPx - topMargin;
  const transformPx = width - spacing - topMargin - thumbSize;

  return css`
    width: ${width}px;
    height: ${height}px;

    span {
      &:before {
        top: ${valueToRem(topMargin)};
        left: ${valueToRem(topMargin)};
        height: ${valueToRem(thumbSize)};
        width: ${valueToRem(thumbSize)};
        border-radius: 50%;
      }
    }

    input[type='checkbox'] {
      &:not(&:checked) + span:before {
        transform: translateX(0);
      }

      &:checked + span:before {
        transform: translateX(${valueToRem(transformPx)});
      }
    }
  `;
};

const switchBorderRadius: Record<NonNullable<StyledSwitchProps['size']>, number> = {
  sm: 14,
  md: 18,
  lg: 22,
};

const switchSizeMixin: StyleFunction<DolarPrefix<Pick<Required<StyledSwitchProps>, 'size'>>> = (ctx) => {
  const { $size: switchSize } = ctx;

  return css`
    ${switchToggleMixin(switchBorderRadius[switchSize])}
  `;
};

const switchShapeMixin: StyleFunction<DolarPrefix<Pick<Required<StyledSwitchProps>, 'size'>>> = (ctx) => {
  const { $size: switchSize } = ctx;

  return css`
    border-radius: ${switchBorderRadius[switchSize]}px;

    span {
      border-radius: ${switchBorderRadius[switchSize]}px;
    }
  `;
};

const switchCursorMixin: StyleFunction<object> = () => {
  return css`
    input[type='checkbox'] {
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    }
  `;
};
const switchAlignmentMixin: StyleFunction<object> = () => {
  return css`
    span {
      ${fillAbsoluteSpaceMixin};
      &:before {
        ${fillAbsoluteSpaceMixin};
        content: '';
      }
    }

    input[type='checkbox'] {
      ${fillAbsoluteSpaceMixin};
    }
  `;
};

export const SwitchMixins = {
  colors: switchColorMixin,
  size: switchSizeMixin,
  shape: switchShapeMixin,
  alignment: switchAlignmentMixin,
  cursor: switchCursorMixin,
};
