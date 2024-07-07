import { StyleFunctionDolarPick, typographyMixin } from '@zonia-ui/theme';
import { css, StyleFunction } from 'styled-components';

import { removeInputAutofill } from '../../../../style';
import { StyledTextFieldProps } from '../types';

const textFieldColorsMixin: StyleFunctionDolarPick<StyledTextFieldProps, 'hasError'> = (ctx) => {
  const {
    $hasError,
    theme: {
      colors: { primary },
    },
  } = ctx;

  return css`
    ${removeInputAutofill}
    input {
      &:disabled {
        ~ *:not(header, footer, aside) {
          opacity: 0.55;
        }

        ~ header {
          opacity: 0.55;
        }

        ~ footer {
          opacity: ${$hasError ? 1 : 0.55};
        }

        ~ main {
          border-color: ${primary.grey400};
        }
      }

      &:read-only:not(:disabled) {
        ~ *:not(header, footer) {
          opacity: 0.95;
        }

        ~ header {
          opacity: 0.85;
        }

        ~ footer {
          opacity: 0.85;
        }
      }
    }

    footer {
      ${$hasError && `color: ${primary.error};`};
    }
  `;
};

const textFieldSpacingMixin: StyleFunction<object> = (ctx) => {
  const { spacing } = ctx.theme;
  return css`
    footer,
    header {
      padding-inline: ${spacing['1']};
      svg {
        margin-inline: ${spacing['1']};
      }
    }
    &:has(footer, header) {
      row-gap: ${(props) => props.theme.spacing['2']};
    }
  `;
};

const textFieldAlignmentMixin: StyleFunction<object> = (_ctx) => {
  return css`
    footer,
    header {
      display: inline-block;
    }

    footer {
      display: inline-flex;
      justify-items: center;
    }
  `;
};

const textFieldTypographyMixin: StyleFunction<object> = (_ctx) => {
  return css`
    header {
      ${typographyMixin('text', 'md', 'medium', undefined, true)}
    }

    footer {
      ${typographyMixin('text', 'sm', 'normal', undefined, true)}
    }
  `;
};

export const TextFieldMixins = {
  alignment: textFieldAlignmentMixin,
  colors: textFieldColorsMixin,
  spacing: textFieldSpacingMixin,
  typography: textFieldTypographyMixin,
};
