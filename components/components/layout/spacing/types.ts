import { Only, RequireAtLeastOne } from '@zonia-ui/core';
import type { ThemeSpacings } from '@zonia-ui/theme';

type PaddingTopBottomProps = RequireAtLeastOne<{
  pt: ThemeSpacings; // padding-top
  pb: ThemeSpacings; // padding-bottom
}>;

type PaddingLeftRightProps = RequireAtLeastOne<{
  pl: ThemeSpacings; // padding-left
  pr: ThemeSpacings; // padding-right
}>;

type PaddingHorizontalType = {
  ph: ThemeSpacings; // padding-left + padding-right
};

type PaddingVerticalType = {
  pv: ThemeSpacings; // padding-top + padding-bottom
};

export type AroundPaddingProps = Only<
  PaddingTopBottomProps & PaddingLeftRightProps,
  PaddingVerticalType & PaddingHorizontalType
>;
export type VerticalHorizontalPaddingProps = Only<
  PaddingHorizontalType & PaddingVerticalType,
  PaddingLeftRightProps & PaddingTopBottomProps
>;
export type VerticalPaddingProps = PaddingVerticalType & PaddingLeftRightProps;
export type HorizontalPaddingProps = PaddingHorizontalType & PaddingTopBottomProps;
export type PaddingProps =
  | AroundPaddingProps
  | VerticalPaddingProps
  | HorizontalPaddingProps
  | VerticalHorizontalPaddingProps;

type MarginTopBottomProps = RequireAtLeastOne<{
  mt: ThemeSpacings; // margin-top
  mb: ThemeSpacings; // margin-bottom
}>;

type MarginLeftRightProps = RequireAtLeastOne<{
  ml: ThemeSpacings; // margin-left
  mr: ThemeSpacings; // margin-right
}>;

type MarginHorizontalType = {
  mh: ThemeSpacings; // margin-left + margin-right
};

type MarginVerticalType = {
  mv: ThemeSpacings; // margin-top + margin-bottom
};

export type AroundMarginProps = Only<
  MarginTopBottomProps & MarginLeftRightProps,
  MarginVerticalType & MarginHorizontalType
>;

export type VerticalHorizontalMarginProps = Only<
  MarginHorizontalType & MarginVerticalType,
  MarginLeftRightProps & MarginTopBottomProps
>;
export type VerticalMarginProps = MarginVerticalType & MarginLeftRightProps;
export type HorizontalMarginProps = MarginHorizontalType & MarginTopBottomProps;
export type MarginProps =
  | AroundMarginProps
  | VerticalMarginProps
  | HorizontalMarginProps
  | VerticalHorizontalMarginProps;

export type SpacingProps = Partial<(MarginProps | PaddingProps) & { inline: boolean }>;
