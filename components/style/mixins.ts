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

export const removeInputAutofill: Interpolation<object> = () => {
  return css`
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s linear 0s;
    }
  `;
};

export const InputMixins = {
  cursor: cursorMixin,
};
