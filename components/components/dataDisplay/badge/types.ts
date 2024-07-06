import { ThemePrimaryColor, ThemeSecondaryColor, type ThemeShapeType } from '@zonia-ui/theme';
import { ElementType } from 'react';
import { ValuesType } from 'utility-types';

export const badgeSizes = ['xs', 'sm', 'md', 'lg'] as const;
export type BadgeSize = ValuesType<typeof badgeSizes>;

type BaseBadgeProps = {
  size?: BadgeSize;
  icon?: ElementType;
  iconPosition?: 'left' | 'right';
  shape?: 'badge' | ThemeShapeType;
  text: string;
  color: ThemePrimaryColor | ThemeSecondaryColor;
};

export type BadgeProps = BaseBadgeProps;
