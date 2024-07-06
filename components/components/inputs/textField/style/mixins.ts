import { focusOutlineMixin, lightenColor, StyleFunctionDolarPick, typographyMixin } from '@zonia-ui/theme';
import { css, StyleFunction } from 'styled-components';

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
      overflow: hidden;
      border-top-right-radius: ${borderShape};
      border-bottom-right-radius: ${borderShape};
      border-width: ${borderSize};
      border-left: ${$verticalBorders ? `${borderSize} ${defaultType} ${borderColor}` : 0};
    }
  `;
};

const textFieldSpacingMixin: StyleFunctionDolarPick<StyledTextFieldProps, 'borderType' | 'borderColor'> = (ctx) => {
  const {
    theme: { spacing },
  } = ctx;

  return css`
    &:has(footer),
    &:has(header) {
      row-gap: ${(props) => props.theme.spacing['2']};
    }


    .tf--right,
    .tf--left {
      padding-inline: ${spacing['2']};
      &:has(button) {
        padding: 0;

        button {
          padding-inline: ${spacing['2']}};
        }
      }
    }
    input {
      padding: ${spacing['2']} ${spacing['3']};
    }
  `;
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

const textFieldColorsMixin: StyleFunctionDolarPick<StyledTextFieldProps, 'borderColor' | 'outlineColor'> = (ctx) => {
  const {
    $borderColor,
    $outlineColor,
    theme: {
      colors: { primary },
    },
  } = ctx;

  const borderColor = primary[$borderColor];

  return css`
    input {
      &::placeholder {
        color: ${lightenColor(primary.black, 25)};
      }

      &:focus:not(:read-only, :disabled) ~ main {
        ${focusOutlineMixin('lg', $outlineColor)}
      }

      &:disabled {
        ~ * {
          cursor: not-allowed;
        }
        ~ *:not(header, footer) {
          opacity: 0.55;
        }
        ~ header {
          opacity: 0.75;
        }
        ~ footer {
          opacity: 0.75;
        }
        ~ aside {
          button {
            opacity: 0.45;
            pointer-events: none;
          }
        }
      }
    }

    input,
    aside {
      border-color: transparent;
    }
    main {
      border-color: ${borderColor};
      background-color: ${primary.white};
    }
  `;
};

const textFieldAlignmentMixin: StyleFunction<object> = (_ctx) => {
  return css`
    input {
      background-color: transparent;
    }
    aside {
      display: block;
      align-content: center;
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
      ${typographyMixin('text', 'sm', 'normal', 'black')}
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
};
