import { ThemeBorderSizes, ThemePrimaryColor, ThemeShapeType, ThemeSpacings } from '@zonia-ui/theme';
import { Property } from 'csstype';

import { FlexProps } from '../flexbox';

export const directionMap = {
  right: 'row',
  left: 'row-reverse',
  top: 'column-reverse',
  bottom: 'column',
} as const;

export type StackProps = Pick<FlexProps, 'inline' | 'flexGap'> & {
  center?: boolean;
  direction?: keyof typeof directionMap;
  shape?: ThemeShapeType;
  borderSize?: ThemeBorderSizes;
  borderColor?: ThemePrimaryColor;
  bgColor?: ThemePrimaryColor;
  gap?: ThemeSpacings;
  wrap?: Property.FlexWrap;
};
