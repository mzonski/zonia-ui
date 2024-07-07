import {
  blendColors,
  calculateTextContrast,
  focusOutlineMixin,
  lightenColor,
  rgbaToHex,
  StyleFunctionDolarPick,
  typographyMixin,
} from '@zonia-ui/theme';
import { css, Interpolation, StyleFunction } from 'styled-components';

import { removeInputAutofill } from '../../../../style';
import { styledBadgeMixin } from '../../../dataDisplay/badge/utils/mixins';
import { StyledTextFieldProps } from '../types';

const textFieldBorderMixin: StyleFunctionDolarPick<
  StyledTextFieldProps,
  'borderType' | 'borderColor' | 'verticalBorders'
> = (ctx) => {
  const {
    $verticalBorders,
    $borderColor,
    $borderType,
    theme: {
      shape,
      colors: { primary },
      borders: { size: borderSizes, defaultType },
    },
  } = ctx;

  const borderShape = shape.rounded;
  const borderSize = borderSizes[$borderType];
  const borderColor = primary[$borderColor];

  return css`
    aside {
      border: ${borderShape} ${defaultType} transparent;
    }

    main {
      border-radius: ${borderShape};
      border: ${borderSize} ${defaultType} ${borderColor};
    }

    .tf--left {
      border-top-left-radius: ${borderShape};
      border-bottom-left-radius: ${borderShape};
      border-width: ${borderSize};
      border-right: ${$verticalBorders ? `${borderSize} ${defaultType} ${borderColor}` : 0};
    }

    .tf--right {
      border-top-right-radius: ${borderShape};
      border-bottom-right-radius: ${borderShape};
      border-width: ${borderSize};
      border-left: ${$verticalBorders ? `${borderSize} ${defaultType} ${borderColor}` : 0};
    }
  `;
};

const textFieldSpacingMixin: StyleFunctionDolarPick<
  StyledTextFieldProps,
  'borderType' | 'borderColor' | 'verticalBorders'
> = (ctx) => {
  const {
    $verticalBorders,
    theme: { spacing },
  } = ctx;

  const interpolations: Interpolation<object> = [];

  interpolations.push(css`
    input {
      padding-block: ${spacing['2']};
      padding-left: ${spacing['3']};
      padding-right: ${spacing['3']};
    }

    &:has(.tf--left) input {
      padding-left: ${spacing['1']};
    }

    &:has(.tf--right) input {
      padding-right: ${spacing['1']};
    }

    &:has(footer, header) {
      row-gap: ${(props) => props.theme.spacing['2']};
    }

    .tf--right,
    .tf--left {
      padding-inline: ${spacing['2']};

      &:has(button) {
        padding: 0;

        button {
          padding-inline: ${spacing['2']};
        }
      }
    }
  `);

  if ($verticalBorders) {
    interpolations.push(css`
      &:not(.tf--left, .tf-right) {
        input {
          padding-inline: ${spacing['3']};
        }
      }

      &:is(.tf--left, .tf-right) {
        input {
          padding-inline: ${(props) => props.theme.spacing['2']};
        }
      }

      &:is(.tf--left):not(.tf-right) {
        input {
          padding-right: 0;
        }
      }

      &:is(.tf-right):not(.tf-right) {
        input {
          padding-left: 0;
        }
      }
    `);
  }

  return interpolations;
};

const textFieldShapeMixin: StyleFunctionDolarPick<StyledTextFieldProps, 'borderType' | 'shape'> = (ctx) => {
  const {
    $shape,
    theme: { shape },
  } = ctx;

  const borderShape = shape[$shape];
  return css`
    main {
      border-radius: ${borderShape};
    }

    .tf--left {
      border-top-left-radius: ${borderShape};
      border-bottom-left-radius: ${borderShape};
    }

    .tf--right {
      border-top-right-radius: ${borderShape};
      border-bottom-right-radius: ${borderShape};
    }
  `;
};

const textFieldColorsMixin: StyleFunctionDolarPick<StyledTextFieldProps, 'borderColor' | 'outlineColor' | 'color'> = (
  ctx,
) => {
  const {
    $borderColor,
    $outlineColor,
    $color,
    theme: {
      colors: { primary },
    },
  } = ctx;

  const currentColor = primary[$color];
  const borderColor = primary[$borderColor];

  const hoverBg = rgbaToHex(blendColors(currentColor, primary.white, 0.9));
  const activeBg = rgbaToHex(blendColors(currentColor, primary.white, 0.8));

  return css`
    ${removeInputAutofill}
    input {
      background-color: transparent;

      &::placeholder {
        background-color: transparent;
        color: ${lightenColor(primary.black, 25)};
      }

      &:hover:not(&:disabled, :read-only) ~ main {
        color: ${calculateTextContrast(hoverBg)};
        background-color: ${hoverBg};
      }

      &:active:not(&:disabled, :read-only) ~ main {
        color: ${calculateTextContrast(activeBg)};
        background-color: ${activeBg};
      }

      &:focus:not(&:disabled, :read-only) ~ main {
        color: ${calculateTextContrast(activeBg)};
        background-color: ${activeBg};
      }

      &:focus:not(:read-only, :disabled) ~ main {
        ${focusOutlineMixin('lg', $outlineColor)}
      }

      &:disabled {
        ~ * {
          cursor: not-allowed;
        }

        ~ *:not(header, footer, aside) {
          opacity: 0.55;
        }

        ~ header {
          opacity: 0.75;
        }

        ~ footer {
          opacity: 0.75;
        }

        ~ main {
          border-color: ${primary.grey400};
        }

        ~ aside {
          border-color: ${primary.grey400};
          opacity: 0.25;

          button {
            background-color: ${primary.grey300};
          }

          * {
            pointer-events: none;
          }
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

        ~ main {
          border-color: ${primary.grey400};
        }

        ~ aside {
          opacity: 0.45;
          border-color: ${primary.grey400};

          button {
            background-color: ${primary.grey200};
          }

          * {
            pointer-events: none;
          }
        }
      }
    }

    input,
    aside {
      border-color: transparent;

      button {
      }
    }

    main {
      border-color: ${borderColor};
      background-color: ${primary.white};
    }
  `;
};

const textFieldAlignmentMixin: StyleFunction<object> = (_ctx) => {
  return css`
    min-width: 192px;

    input {
      background-color: transparent;
    }

    aside {
      display: block;
      align-content: center;
      overflow: hidden;
    }

    footer,
    header {
      display: inline-block;
    }
  `;
};

const textFieldTypographyMixin: StyleFunction<object> = (_ctx) => {
  return css`
    header {
      ${typographyMixin('text', 'md', 'medium', undefined, true)}
    }

    input {
      ${typographyMixin('text', 'sm', 'normal', undefined, true)}
    }

    footer {
      ${typographyMixin('text', 'sm', 'normal', undefined)}
    }
  `;
};

const placeholderFieldMixin: StyleFunctionDolarPick<StyledTextFieldProps, 'borderType' | 'shape' | 'color'> = (ctx) => {
  const {
    $color,
    $shape,
    $borderType,
    theme: {
      borders: { size: borderSizes },
      shape,
    },
  } = ctx;

  const borderSize = borderSizes[$borderType];

  return css`
    .tf--placeholder {
      display: inline-flex;
      width: fit-content;
      overflow: hidden;

      transition:
        0.25s height ease-out,
        0.25s top ease-out,
        0.25s transform ease-out;

      position: relative;
      font-size: 0;
      height: 16px;
      left: ${shape[$shape]};

      min-width: 14px;
      min-height: 0;
      max-height: 14px;
      top: calc(-1 * 7px + ${borderSize} / 2);

      ${styledBadgeMixin({ $size: 'xs', $color, $shape })}
      ${typographyMixin('text', 'xs', 'medium', undefined, true)}
    }

    &:has(.tf--left) ~ * {
      .tf--placeholder {
        left: 0;
      }
    }

    input {
      &:placeholder-shown ~ .tf--placeholder {
        transform: scaleY(0);
      }

      &:not(:placeholder-shown) ~ .tf--placeholder {
        transform: scaleY(1);
      }
    }
  `;
};

export const TextFieldMixins = {
  alignment: textFieldAlignmentMixin,
  border: textFieldBorderMixin,
  colors: textFieldColorsMixin,
  shape: textFieldShapeMixin,
  spacing: textFieldSpacingMixin,
  typography: textFieldTypographyMixin,
  placeholder: placeholderFieldMixin,
};
