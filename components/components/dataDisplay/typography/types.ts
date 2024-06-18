import { AsProp } from '@zonia-ui/core';
import type { ThemeFontWeight, ThemeTypographyHeads, ThemeTypographyTexts } from '@zonia-ui/theme';
import type { ElementType, PropsWithChildren } from 'react';

export type BaseTypographyProps<TElement extends ElementType = 'span'> = PropsWithChildren & {
  weight?: ThemeFontWeight;
  color?: 'white' | 'black';
} & AsProp<TElement>;

export type HeadingProps = BaseTypographyProps & {
  type: 'head';
  variant?: ThemeTypographyHeads;
};

export type TextProps = BaseTypographyProps & {
  type: 'text';
  variant?: ThemeTypographyTexts;
};

export type TypographyProps = HeadingProps | TextProps;
