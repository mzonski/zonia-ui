import type { Meta } from '@storybook/react';
import { getPangram } from '@zonia-ui/core';
import { primaryColors, themeBorderSizeKey } from '@zonia-ui/theme';
import { themeShapeKey } from '@zonia-ui/theme/constants/shape';
import { keys } from 'fp-ts/es6/Record';

import { StyledToggle, ToggleLabelProps, toggleSizes } from '../../toggles/_shared';

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
      options: themeBorderSizeKey,
    },
    shape: {
      control: 'select',
      options: themeShapeKey,
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

export const ToggleStoryutil = {
  meta: toggleStyleMeta,
  disabledArgTypes: disabledToggleStyleArgTypes,
};
