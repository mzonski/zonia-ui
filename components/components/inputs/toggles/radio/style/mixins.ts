import { DolarPrefix, StyleFunctionPick } from '@zonia-ui/theme';
import { css, StyleFunction } from 'styled-components';

import { StyledToggle } from '../../_shared';
import { StyledRadioProps } from '../types';

const switchBorderRadius: Record<NonNullable<StyledRadioProps['size']>, number> = {
  // xs: 6,
  sm: 16,
  md: 20,
  lg: 24,
};

const radioSizeMixin: StyleFunction<DolarPrefix<Pick<Required<StyledRadioProps>, 'size'>>> = (ctx) => {
  const { $size: radioSize } = ctx;

  const thumbPx = switchBorderRadius[radioSize];

  return css`
    width: ${thumbPx}px;
    height: ${thumbPx}px;

    span {
      &:before {
        width: 100%;
        height: 100%;
      }
    }
    input[type='checkbox'] {
      &:not(&:checked) + span:before {
        transform: scale(0);
      }

      &:checked + span:before {
        transform: scale(0.65);
      }
    }
  `;
};

const radioShapeMixin: StyleFunctionPick<StyledToggle, 'shape'> = (ctx) => {
  const { shape } = ctx.theme;

  return css`
    span {
      &:before {
        border-radius: ${shape[ctx.$shape]};
      }
    }
  `;
};

const radioDisplayMixin: StyleFunction<object> = () => {
  return css`
    span {
    }
  `;
};

export const RadioMixins = {
  size: radioSizeMixin,
  alignment: radioDisplayMixin,
  shape: radioShapeMixin,
};
