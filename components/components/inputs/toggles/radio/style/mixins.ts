import { DolarPrefix, StyleFunctionPick } from '@zonia-ui/theme';
import { css, StyleFunction } from 'styled-components';

import { StyledToggle, toggleSizes } from '../../_shared';
import { StyledRadioProps } from '../types';

const radioSizeMixin: StyleFunction<DolarPrefix<Pick<Required<StyledRadioProps>, 'size'>>> = (ctx) => {
  const { $size: radioSize } = ctx;

  const thumbPx = toggleSizes[radioSize];

  return css`
    span {
      width: ${thumbPx}px;
      height: ${thumbPx}px;
      &:before {
        width: ${thumbPx}px;
      }
    }
    input[type='checkbox'] {
      &:not(&:checked) + span:before {
        transform: scale(0);
      }

      &:checked + span:before {
        transform: scale(0.6);
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
