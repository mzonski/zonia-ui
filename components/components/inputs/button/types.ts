import { ThemePrimaryColor, ThemeTypographyTexts } from '@zonia-ui/theme';
import { ValuesType } from 'utility-types';

export const ButtonStyle = ['contained', 'text'];

export const ButtonState = ['normal', 'hover', 'disabled'];

export const ButtonVariants = ['primary', 'secondary', 'ghost', 'text'] as const;
export const ButtonSizes = ['2xs', 'xs', 'sm', 'md', 'lg'] as const;
export type ButtonSize = ValuesType<typeof ButtonSizes>;
export type ButtonVariant = ValuesType<typeof ButtonVariants>;

export type ButtonProps = {
  color?: ThemePrimaryColor;
  labelBold?: boolean;
  labelTextVariant?: ThemeTypographyTexts;
  size?: ButtonSize;
  variant?: ButtonVariant;
  shadowColor?: ThemePrimaryColor;
  fullWidth?: boolean;
  fill?: boolean;
};
