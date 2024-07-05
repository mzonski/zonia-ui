import type { Property } from 'csstype';
import type { ValuesType } from 'utility-types';

import {
  primaryColors,
  secondaryColors,
  themeBorderSize,
  themeFontWeightMap,
  themeFontWeightKey,
  themeShapeKey,
  themeShapeMap,
  themePrimaryColorKey,
  themeSecondaryColorsKey,
} from '../constants';
import { baseTheme } from '../themes/baseTheme';
import { themeElevationOutline, themeElevationSpacing, themeElevationType } from '../themes/elevation';
import { themeSpacing } from '../themes/spacing';
import { defaultThemeHeadTypography, defaultThemeTextTypography } from '../themes/typography';

type ValidFontSizeUnits = 'px' | 'rem' | 'em' | '%';
export type PxSizeUnit = `${number}px` | 0;
export type ValidSizeFormat = `${number}${ValidFontSizeUnits}` | '0';

type HexColor = `#${string}`;
type RgbColor = `rgb(${number},${number},${number})` | `rgb(${number}, ${number}, ${number})`;
type RgbaColor = `rgba(${number},${number},${number},${number})` | `rgba(${number}, ${number}, ${number}, ${number})`;
export type ValidColorFormat = HexColor | RgbColor | RgbaColor;
export type TypographyConfig = { fontSize: ValidSizeFormat; lineHeight: Property.FontSize };

export type ThemeColors = keyof typeof baseTheme.colors;
export type ThemePrimaryColor = ValuesType<typeof themePrimaryColorKey>;
export type ThemeSecondaryColor = ValuesType<typeof themeSecondaryColorsKey>;
export type ThemeSpacings = keyof typeof themeSpacing;
export type ThemeElevationSpacing = keyof typeof themeElevationSpacing;
export type ThemeElevationType = ValuesType<typeof themeElevationType>;
export type ThemeOutline = keyof typeof themeElevationOutline;
export type ThemeTypographyTypes = keyof typeof baseTheme.components.typography;
export type ThemeTypographyHeads = keyof typeof defaultThemeHeadTypography;
export type ThemeTypographyTexts = keyof typeof defaultThemeTextTypography;

export type ThemeBorderSizes = keyof typeof themeBorderSize;

export type ThemeFontWeightType = ValuesType<typeof themeFontWeightKey>;
export type ThemeFontWeight = typeof themeFontWeightMap;

export type ThemeShapeType = ValuesType<typeof themeShapeKey>;
export type ThemeShape = typeof themeShapeMap;
