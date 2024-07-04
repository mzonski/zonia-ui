import { DolarPrefix } from '@zonia-ui/theme';
import { css, StyleFunction } from 'styled-components';

import { toggleSizes } from '../../_shared';
import { StyledSwitchProps } from '../types';

const switchSizeMixin: StyleFunction<DolarPrefix<Pick<Required<StyledSwitchProps>, 'size' | 'borderType'>>> = (ctx) => {
  const {
    $borderType,
    $size: radioSize,
    theme: {
      borders: { size: borderSizes },
    },
  } = ctx;

  const thumbPx = toggleSizes[radioSize];

  const borderSize = borderSizes[$borderType];

  return css`
    span {
      width: ${thumbPx * 2}px;
      height: ${thumbPx}px;
      &:before {
        width: calc(50% - (${borderSize} / 2));
        height: calc(100%);
      }
    }
    input[type='checkbox'] {
      &:not(&:checked) + span:before {
        transform: translateX(calc(${borderSize} / 2)) scale(0.75);
      }

      &:checked + span:before {
        transform: translateX(calc(${thumbPx}px - (${borderSize} / 2))) scale(0.75);
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
        border-radius: ${shape[$pillShape]};
      }
    }
  `;
};

export const SwitchMixins = {
  size: switchSizeMixin,
  pill: switchPillMixin,
};
