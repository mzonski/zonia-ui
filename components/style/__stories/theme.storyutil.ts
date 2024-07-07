import type { Meta } from '@storybook/react';
import { primaryColors, themeBorderSizeKey } from '@zonia-ui/theme';
import { themeShapeKey } from '@zonia-ui/theme/constants/shape';

import { ThemeStyledProps } from '../props';

const meta = {
  argTypes: {
    borderColor: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    borderType: {
      control: 'radio',
      options: themeBorderSizeKey,
    },
    color: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    outlineColor: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    shape: {
      control: 'select',
      options: themeShapeKey,
    },
  },
  args: {
    borderColor: 'black',
    borderType: 'tiny',
    color: 'primary',
    outlineColor: 'primary',
    shape: 'medium',
  },
} satisfies Meta<ThemeStyledProps>;

const disabledArgTypes = {
  borderColor: { table: { disable: true } },
  borderType: { table: { disable: true } },
  color: { table: { disable: true } },
  outlineColor: { table: { disable: true } },
  shape: { table: { disable: true } },
};

export const ThemeStoryUtil = {
  meta,
  disabledArgTypes,
};
