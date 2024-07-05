import { ThemeBorderSizes, ThemePrimaryColor, ThemeSecondaryColor, ThemeShapeType } from '@zonia-ui/theme';

export type ThemeStyledProps<TColor extends ThemePrimaryColor | ThemeSecondaryColor = ThemePrimaryColor> = {
  color: TColor;
  outlineColor: TColor;
  borderColor: TColor;
  shape: ThemeShapeType;
  borderType: ThemeBorderSizes;
};

export type TestProps = {
  'data-test-id'?: string;
};
