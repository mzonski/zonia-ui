import { css, Interpolation } from 'styled-components';

export const cursorMixin: Interpolation<object> = () => {
  return css`
    input[type='checkbox'] {
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
      }
    }
  `;
};

export const InputMixins = {
  cursor: cursorMixin,
};
