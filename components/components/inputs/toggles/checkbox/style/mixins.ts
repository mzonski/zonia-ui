import { colorMixin, StyleFunctionPick } from '@zonia-ui/theme';
import { css, StyleFunction } from 'styled-components';

import { toggleSizes } from '../../_shared';
import { CheckboxProps } from '../types';

const checkboxColorMixin: StyleFunctionPick<CheckboxProps, 'color'> = (ctx) => {
  const { $color: color } = ctx;

  return css`
    input[type='checkbox']:indeterminate + * {
      ${colorMixin('bg', 'primary', color)}
    }
  `;
};

const checkboxSizeMixin: StyleFunctionPick<CheckboxProps, 'size'> = (ctx) => {
  const { $size } = ctx;

  const size = toggleSizes[$size];

  return css`
    span {
      width: ${size}px;
      height: ${size}px;
    }
  `;
};

const checkboxSvgIconMixin: StyleFunction<object> = () => {
  return css`
    input[type='checkbox']:not(:indeterminate, :checked) + span {
      .checkbox-left-path {
        stroke-width: 0;
        d: path('M 7 7 L 7 7');
      }
      .checkbox-right-path {
        stroke-width: 0;
        d: path('M 7 7 L 7 7');
      }
    }

    input[type='checkbox']:indeterminate:not(:checked) + span {
      .checkbox-left-path {
        d: path('M 2.35 7 L 5.25 7');
      }
      .checkbox-right-path {
        d: path('M 5.25 7 L 11.65 7');
      }
    }

    input[type='checkbox']:checked:not(:indeterminate) + span {
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
  color: checkboxColorMixin,
  size: checkboxSizeMixin,
  animations: checkboxSvgIconMixin,
};
