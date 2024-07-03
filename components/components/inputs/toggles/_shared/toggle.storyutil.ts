import type { Meta } from '@storybook/react';
import { primaryColors } from '@zonia-ui/theme';
import { themeShape } from '@zonia-ui/theme/constants/shape';

import { StyledToggle } from './types';

const toggleStyleMeta = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    outlineColor: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    borderColor: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    shape: {
      control: 'select',
      options: themeShape,
    },
  },
  args: {
    color: 'primary',
    outlineColor: 'primary',
    borderColor: 'black',
    shape: 'medium',
  },
} satisfies Meta<StyledToggle>;

const disabledToggleStyleArgTypes = {
  color: { table: { disable: true } },
  outlineColor: { table: { disable: true } },
  borderColor: { table: { disable: true } },
  shape: { table: { disable: true } },
};

export const ToggleStoryUtil = {
  meta: toggleStyleMeta,
  disabledArgTypes: disabledToggleStyleArgTypes,
};
