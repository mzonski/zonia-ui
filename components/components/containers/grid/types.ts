import { ThemeSpacings } from '@zonia-ui/theme';
import { Property } from 'csstype';

export type GridItemProps = {
  colSpan?: number;
  rowSpan?: number;
  alignSelf?: Property.AlignSelf;
  justifySelf?: Property.JustifySelf;
};

export type GridProps = {
  columns: number;
  rows: number;
  gap?: ThemeSpacings;
  columnGap?: ThemeSpacings;
  rowGap?: ThemeSpacings;
  minRowHeight?: Property.Height;
  maxWidth?: Property.MaxWidth;
  autoFlow?: Property.GridAutoFlow;
  justifyContent?: Property.JustifyContent;
  alignContent?: Property.AlignContent;
  justifyItems?: Property.JustifyItems;
  alignItems?: Property.AlignItems;
};
