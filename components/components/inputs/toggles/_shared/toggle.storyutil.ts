import type { Meta } from '@storybook/react';
import { getPangram } from '@zonia-ui/core';
import { primaryColors } from '@zonia-ui/theme';
import { themeShape } from '@zonia-ui/theme/constants/shape';
import { keys } from 'fp-ts/es6/Record';

import { StyledToggle, ToggleLabelProps, toggleSizes } from './types';

const toggleStyleMeta = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: keys(toggleSizes),
    },
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
    borderType: {
      control: 'radio',
      options: ['tiny', 'small', 'medium'],
    },
    shape: {
      control: 'select',
      options: themeShape,
    },
    label: {
      checked: 'string',
    },
    text: {
      control: 'text',
    },
  },
  args: {
    label: getPangram('pl'),
    text: getPangram('en'),
    color: 'primary',
    outlineColor: 'primary',
    borderColor: 'black',
    shape: 'medium',
    borderType: 'tiny',
    size: 'md',
  },
} satisfies Meta<StyledToggle & ToggleLabelProps>;

const disabledToggleStyleArgTypes = {
  color: { table: { disable: true } },
  outlineColor: { table: { disable: true } },
  borderColor: { table: { disable: true } },
  borderType: { table: { disable: true } },
  shape: { table: { disable: true } },
  size: { table: { disable: true } },
};

export const ToggleStoryUtil = {
  meta: toggleStyleMeta,
  disabledArgTypes: disabledToggleStyleArgTypes,
};
