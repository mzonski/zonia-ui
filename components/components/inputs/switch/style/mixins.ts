import {
  blendColors,
  calculateTextContrast,
  colorMixin,
  DolarPrefix,
  focusOutlineMixin,
  rgbaToHex,
  RuleBuilder,
  valueToRem,
} from '@zonia-ui/theme';
import { css, RuleSet, StyleFunction } from 'styled-components';

import { SwitchProps } from '../types';

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
      &:checked + span {
        ${colorMixin('bg', 'primary', color)}
      }

      &:focus + span {
        ${focusOutlineMixin('lg', color)}
      }

      &:hover:is(&:checked) + span {
        background-color: ${checkedHoverBg};
      }
      &:active:is(&:checked) + span {
        background-color: ${checkedActiveBg};
      }

      &:hover:not(&:checked) + span {
        background-color: ${uncheckedHoverBg};
      }
      &:active:not(&:checked) + span {
        background-color: ${uncheckedActiveBg};
      }

      &:active + span {
        ${focusOutlineMixin('md', color)}
      }
    }
  `);

  return ruleBuilder.build();
};

const switchSizeMapInterpolation: Record<NonNullable<SwitchProps['size']>, RuleSet> = {
  sm: css`
    width: 36px;
    height: 20px;
    span {
      &:before {
        margin-block: ${valueToRem(3.5)};
        height: 12px;
        width: 12px;
        left: ${valueToRem(3)};
        border-radius: 50%;
      }
      left: 0;
      top: 0;
    }
  `,
  md: css`
    width: 44px;
    height: 24px;
  `,
};
const switchBorderRadius = 12;
const switchThumbSizePx: Record<NonNullable<SwitchProps['size']>, number> = {
  sm: 14,
  md: 18,
};

const switchSizeMixin: StyleFunction<DolarPrefix<Pick<SwitchProps, 'size'>>> = (ctx) => {
  const {
    $size: switchSize,
    theme: {
      colors: { primary: primaryColors },
    },
  } = ctx;

  const ruleBuilder = new RuleBuilder();

  const thumbSize = switchThumbSizePx[switchSize ?? 'sm'];
  ruleBuilder.push(switchSizeMapInterpolation[switchSize ?? 'sm']);

  ruleBuilder.push(css`
    input[type="checkbox"] {
      &:checked + span:before {
        transform: translateX(${thumbSize + switchBorderRadius / 4 - 2}px);
      }
    }
    span {
      &:before {
        position: absolute;
        content: '';
        transition: transform 0.25s cubic-bezier(.38,1.22,.54,.98);
      }
  `);

  return ruleBuilder.build();
};

const switchShapeMixin: StyleFunction<object> = () => {
  return css`
    border-radius: ${switchBorderRadius}px;
  `;
};

export const SwitchMixins = {
  colors: switchColorMixin,
  size: switchSizeMixin,
  shape: switchShapeMixin,
};
