import { DolarPrefix, StyleFunctionRequirePick } from '@zonia-ui/theme';
import { css, StyleFunction } from 'styled-components';

import { StyledToggle, toggleSizes } from '../../_shared';

const radioSizeMixin: StyleFunction<DolarPrefix<Pick<Required<StyledToggle>, 'size'>>> = (ctx) => {
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
    input[type='radio'] {
      &:not(&:checked) + span:before {
        transform: scale(0);
      }

      &:checked + span:before {
        transform: scale(0.6);
      }
    }
  `;
};

const radioShapeMixin: StyleFunctionRequirePick<StyledToggle, 'shape'> = (ctx) => {
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
