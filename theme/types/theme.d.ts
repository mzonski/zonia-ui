import type { Property } from 'csstype';
import type { ValuesType } from 'utility-types';

import { primaryColors, secondaryColors } from '../constants';
import { themeFontWeights, themeFontWeightType } from '../constants/fontWeights';
import { themeShape, themeShapes } from '../constants/shape';
import { baseTheme } from '../themes/baseTheme';
import { themeElevationOutline, themeElevationSpacing, themeElevationType } from '../themes/elevation';
import { themeSpacing } from '../themes/spacing';

type ValidFontSizeUnits = 'px' | 'rem' | 'em' | '%';
export type ValidSizeFormat = `${number}${ValidFontSizeUnits}` | '0';

type HexColor = `#${string}`;
type RgbColor = `rgb(${number},${number},${number})` | `rgb(${number}, ${number}, ${number})`;
type RgbaColor = `rgba(${number},${number},${number},${number})` | `rgba(${number}, ${number}, ${number}, ${number})`;
export type ValidColorFormat = HexColor | RgbColor | RgbaColor;
export type TypographyConfig = { fontSize: ValidSizeFormat; lineHeight: Property.FontSize };

export type ThemeColors = keyof typeof baseTheme.colors;
export type ThemePrimaryColor = keyof typeof primaryColors;
export type ThemeSecondaryColor = keyof typeof secondaryColors;
export type ThemeSpacings = keyof typeof themeSpacing;
export type ThemeElevationSpacing = keyof typeof themeElevationSpacing;
export type ThemeElevationType = ValuesType<typeof themeElevationType>;
export type ThemeOutline = keyof typeof themeElevationOutline;
export type ThemeTypographyTypes = keyof typeof baseTheme.components.typography;
export type ThemeTypographyHeads = keyof typeof baseTheme.components.typography.head;
export type ThemeTypographyTexts = keyof typeof baseTheme.components.typography.text;

export type ThemeBorderSizes = keyof typeof baseTheme.borders.size;

export type ThemeFontWeightType = ValuesType<typeof themeFontWeightType>;
export type ThemeFontWeight = typeof themeFontWeights;

export type ThemeShapeType = ValuesType<typeof themeShape>;
export type ThemeShape = typeof themeShapes;
