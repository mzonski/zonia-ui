import { SvgProps } from '@zonia-ui/theme';
import { ValuesType } from 'utility-types';

export const colorfulLoaderVariants = ['default', 'pastel'] as const;
export type ColorfulLoaderVariant = ValuesType<typeof colorfulLoaderVariants>;

export type ColorfulProgressProps = {
  variant?: ColorfulLoaderVariant;
} & Partial<SvgProps>;
