import { primaryColors, secondaryColors, DEFAULT_FONT_SIZE } from '../constants';
import { themeBorderSize } from '../constants/borderSizes';
import { themeFontWeightMap } from '../constants/fontWeights';
import { themeShapeMap } from '../constants/shape';
import { valueToRem } from '../utils';

import { themeElevationOutline, themeElevationSpacing } from './elevation';
import { themeSpacing } from './spacing';
import type { ZuiTheme } from './themeOverride';
import { defaultThemeHeadTypography, defaultThemeTextTypography } from './typography';

export const baseTheme = {
  colors: {
    primary: primaryColors,
    secondary: secondaryColors,
  },
  components: {
    typography: {
      head: defaultThemeHeadTypography,
      text: defaultThemeTextTypography,
    },
  },
  spacing: themeSpacing,
  fonts: {
    defaultSize: `${DEFAULT_FONT_SIZE}px`,
    defaultFamily: `'Plus Jakarta Sans Variable'`, // 'Inter', 'Plus Jakarta Sans Variable'
    weights: themeFontWeightMap,
  },
  shape: themeShapeMap,
  elevation: {
    spacing: themeElevationSpacing,
    outline: themeElevationOutline,
  },
  borders: {
    size: themeBorderSize,
    color: primaryColors.black,
    defaultType: 'solid',
    defaultShape: valueToRem(4),
  },
} as const satisfies ZuiTheme;
