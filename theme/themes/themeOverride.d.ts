import 'styled-components';
import type { Property } from 'csstype';

import type {
  ThemeBorderSizes,
  ThemeElevationType,
  ThemeFontWeightType,
  ThemePrimaryColor,
  ThemeSecondaryColor,
  ThemeShape,
  ThemeSpacings,
  ThemeTypographyHeads,
  ThemeTypographyTexts,
  TypographyConfig,
  ValidColorFormat,
  ValidSizeFormat,
} from '../types';

export interface ZuiTheme {
  colors: {
    primary: Record<ThemePrimaryColor, ValidColorFormat>;
    secondary: Record<ThemeSecondaryColor, ValidColorFormat>;
  };
  spacing: Record<ThemeSpacings, ValidSizeFormat>;
  components: {
    typography: {
      head: Record<ThemeTypographyHeads, TypographyConfig>;
      text: Record<ThemeTypographyTexts, TypographyConfig>;
    };
  };
  fonts: {
    defaultSize: ValidSizeFormat;
    defaultFamily: Property.FontFamily;
    weights: Record<ThemeFontWeightType, Property.FontWeight>;
  };
  shape: ThemeShape;
  elevation: {
    spacing: Record<ThemeElevationType, ThemeSpacings>;
    outline: Record<ThemeElevationType, ThemeSpacings>;
  };
  borders: {
    defaultType: 'solid';
    defaultShape: ValidSizeFormat;
    color: ValidColorFormat;
    size: Record<ThemeBorderSizes, ValidSizeFormat>;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ZuiTheme {}
}
