import type { ValidSizeFormat } from '../types';

type ThemeSpacingKeys =
  | '0'
  | 'px'
  | '0.5'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '3.5'
  | '4'
  | '5'
  | '6'
  | '8'
  | '9'
  | '10'
  | '12'
  | '14'
  | '16'
  | '18'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '72'
  | '80'
  | '96';

export const themeSpacing = {
  '0': '0px',
  px: '1px',
  '0.5': '2px',
  '1': '4px',
  '1.5': '6px',
  '2': '8px',
  '2.5': '10px',
  '3': '12px',
  '3.5': '14px',
  '4': '16px',
  '5': '20px',
  '6': '24px',
  '8': '32px',
  '9': '36px',
  '10': '40px',
  '12': '48px',
  '14': '56px',
  '16': '64px',
  '18': '72px',
  '20': '80px',
  '24': '96px',
  '28': '112px',
  '32': '128px',
  '36': '144px',
  '40': '160px',
  '44': '176px',
  '48': '192px',
  '52': '208px',
  '56': '224px',
  '60': '240px',
  '64': '256px',
  '72': '288px',
  '80': '320px',
  '96': '384px',
} as const satisfies Record<ThemeSpacingKeys, ValidSizeFormat>;

// export type ThemeSpacingKey= keyof typeof themeSpacing;
