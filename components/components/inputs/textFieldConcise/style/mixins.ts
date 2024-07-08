import {
  borderMixin,
  convertSizeToNumber,
  fillAbsoluteSpaceMixin,
  StyleFunctionDolarPick,
  typographyMixin,
} from '@zonia-ui/theme';
import { css, StyleFunction } from 'styled-components';

import { removeInputAutofill } from '../../../../style';
import { styledBadgeMixin } from '../../../dataDisplay/badge/utils/mixins';
import { StyledConciseTextFieldProps } from '../types';

const textFieldColorsMixin: StyleFunctionDolarPick<StyledConciseTextFieldProps, 'hasError'> = (ctx) => {
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
        ~ *:not(footer, aside) {
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
    footer {
      padding-inline: ${spacing['1']};
      svg {
        margin-inline: ${spacing['1']};
      }
    }
    &:has(footer) {
      row-gap: ${(props) => props.theme.spacing['1']};
    }
  `;
};

const textFieldAlignmentMixin: StyleFunction<object> = (_ctx) => {
  return css`
    footer {
      display: inline-flex;
      justify-items: center;
    }
  `;
};

const textFieldTypographyMixin: StyleFunction<object> = (_ctx) => {
  return css`
    footer {
      ${typographyMixin('text', 'xs', 'normal', undefined, true)}
    }
    input[type='text'] {
      ${typographyMixin('text', 'md', 'normal', undefined, true)}
    }
  `;
};

const placeholderFieldMixinSingleElement: StyleFunctionDolarPick<
  StyledConciseTextFieldProps,
  'borderType' | 'shape' | 'color' | 'borderColor'
> = (ctx) => {
  const {
    $color,
    $shape,
    $borderType,
    $borderColor,
    theme: {
      borders: { size: borderSizes },
      shape,
      spacing,
    },
  } = ctx;

  const borderSize = borderSizes[$borderType];

  const placeholderOffset = '2px';

  return css`
    input {
      position: relative;
      transition:
        0.25s padding ease-out,
        0.25s bottom ease-out;

      padding-top: calc(${spacing['2']} + ${placeholderOffset});
      padding-bottom: calc(${spacing['2']} - ${placeholderOffset});
      bottom: ${placeholderOffset};
    }

    .tf--placeholder {
      display: inline-flex;
      box-sizing: content-box;
      width: fit-content;
      overflow: hidden;

      transition:
        0.25s height ease-out,
        0.25s top ease-out,
        0.25s transform ease-out;

      position: relative;
      height: 12px;
      left: ${shape[$shape]};

      min-width: 12px;
      min-height: 0;
      max-height: 12px;
      top: calc(-1 * 17% - (${borderSize}));

      ${borderMixin($borderType, 'all', $borderColor)};
      ${styledBadgeMixin({ $size: 'xs', $color, $shape })}
      ${typographyMixin('text', 'xs', 'medium', undefined, true)}
    }

    &:has(.tf--left) ~ * {
      .tf--placeholder {
        left: 0;
      }
    }

    input {
      &:not(:placeholder-shown) {
        padding-top: calc(${spacing['2']} + ${placeholderOffset});
        padding-bottom: calc(${spacing['2']} - ${placeholderOffset});
        bottom: 0;
      }

      &:placeholder-shown ~ .tf--placeholder {
        transform: scaleY(0);
      }

      &:not(:placeholder-shown) ~ .tf--placeholder {
        transform: scaleY(1);
      }
    }
  `;
};

export const ConciseTextFieldMixins = {
  alignment: textFieldAlignmentMixin,
  colors: textFieldColorsMixin,
  spacing: textFieldSpacingMixin,
  typography: textFieldTypographyMixin,
  placeholder: placeholderFieldMixinSingleElement,
};
