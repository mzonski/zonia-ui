import 'styled-components';
import '@zonia-ui/theme/types';
import {
  ThemeSecondaryColor,
  ThemeBorderSizes,
  ThemeFontWeight,
  ThemePrimaryColor,
  ThemeSpacings,
  ThemeTypographyHeads,
  ThemeTypographyTexts,
  TypographyConfig,
  ValidColorFormat,
  ValidSizeFormat,
} from '@zonia-ui/theme';
import type { Property } from 'csstype';

export interface ZuiTheme {
  colors: {
    primary: Record<ThemePrimaryColor, ValidColorFormat>;
    secondary: Record<ThemeSecondaryColor, ValidColorFormat>;
  };
  spacing: Record<ThemeSpacings, ValidSizeFormat>;
  components: {
    table: unknown;
    typography: {
      head: Record<ThemeTypographyHeads, TypographyConfig>;
      text: Record<ThemeTypographyTexts, TypographyConfig>;
    };
  };
  fonts: {
    defaultSize: ValidSizeFormat;
    defaultFamily: Property.FontFamily;
    weights: Record<ThemeFontWeight, Property.FontWeight>;
  };
  borders: {
    color: ValidColorFormat;
    size: Record<ThemeBorderSizes, ValidSizeFormat>;
    type: 'solid';
    radius: ValidSizeFormat;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ZuiTheme {}
}
