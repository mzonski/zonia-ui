import { primaryColors, secondaryColors, DEFAULT_FONT_SIZE } from '../constants';
import { themeFontWeights } from '../constants/fontWeights';
import { themeShapes } from '../constants/shape';
import { valueToRem } from '../utils';

import { themeElevationOutline, themeElevationSpacing } from './elevation';
import { themeSpacing } from './spacing';
import type { ZuiTheme } from './themeOverride';

export const baseTheme = {
  colors: {
    primary: primaryColors,
    secondary: secondaryColors,
  },
  components: {
    typography: {
      head: {
        h1: {
          fontSize: valueToRem(72),
          lineHeight: '140%',
        },
        h2: {
          fontSize: valueToRem(60),
          lineHeight: '140%',
        },
        h3: {
          fontSize: valueToRem(48),
          lineHeight: '140%',
        },
        h4: {
          fontSize: valueToRem(36),
          lineHeight: '140%',
        },
        h5: {
          fontSize: valueToRem(30),
          lineHeight: '132%',
        },
        h6: {
          fontSize: valueToRem(24),
          lineHeight: '130%',
        },
      },
      text: {
        xl: {
          fontSize: valueToRem(20),
          lineHeight: valueToRem(30),
        },
        lg: {
          fontSize: valueToRem(18),
          lineHeight: valueToRem(27.36),
        },
        md: {
          fontSize: valueToRem(16),
          lineHeight: valueToRem(25),
        },
        sm: {
          fontSize: valueToRem(14),
          lineHeight: valueToRem(19.6),
        },
        xs: {
          fontSize: valueToRem(12),
          lineHeight: valueToRem(16),
        },
      },
    },
  },
  spacing: themeSpacing,
  fonts: {
    defaultSize: `${DEFAULT_FONT_SIZE}px`,
    defaultFamily: `'Plus Jakarta Sans Variable'`, // 'Inter', 'Plus Jakarta Sans Variable'
    weights: themeFontWeights,
  },
  shape: themeShapes,
  elevation: {
    spacing: themeElevationSpacing,
    outline: themeElevationOutline,
  },
  borders: {
    size: {
      tiny: valueToRem(1),
      small: valueToRem(1.5),
      medium: valueToRem(2.25),
      large: valueToRem(3),
    },
    color: primaryColors.black,
    defaultType: 'solid',
    defaultShape: valueToRem(4),
  },
} as const satisfies ZuiTheme;
