import { DolarPrefix, fillAbsoluteSpaceMixin, valueToRem } from '@zonia-ui/theme';
import { css, StyleFunction } from 'styled-components';

import { StyledSwitchProps } from '../types';

const switchBorderRadius: Record<NonNullable<StyledSwitchProps['size']>, number> = {
  sm: 14,
  md: 18,
  lg: 22,
};

const switchSizeMixin: StyleFunction<DolarPrefix<Pick<Required<StyledSwitchProps>, 'size'>>> = (ctx) => {
  const { $size: switchSize } = ctx;

  const thumbPx = switchBorderRadius[switchSize];

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
      }
    }

    input[type='checkbox'] {
      width: ${width}px;
      height: ${height}px;

      &:not(&:checked) + span:before {
        transform: translateX(0);
      }

      &:checked + span:before {
        transform: translateX(${valueToRem(transformPx)});
      }
    }
  `;
};

const switchPillMixin: StyleFunction<DolarPrefix<Pick<Required<StyledSwitchProps>, 'pillShape'>>> = (ctx) => {
  const {
    $pillShape,
    theme: { shape },
  } = ctx;

  return css`
    span {
      &:before {
        ${fillAbsoluteSpaceMixin};
        border-radius: ${shape[$pillShape]};
      }
    }
  `;
};

export const SwitchMixins = {
  size: switchSizeMixin,
  pill: switchPillMixin,
};
