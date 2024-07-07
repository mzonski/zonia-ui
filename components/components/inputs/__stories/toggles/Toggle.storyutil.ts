import type { Meta } from '@storybook/react';
import { getPangram } from '@zonia-ui/core';
import { keys } from 'fp-ts/es6/Record';

import { ThemeStoryUtil } from '../../../../style';
import { StyledToggle, ToggleLabelProps, toggleSizes } from '../../toggles/_shared';

const toggleStyleMeta = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
  argTypes: {
    ...ThemeStoryUtil.meta.argTypes,
    label: {
      checked: 'string',
    },
    size: {
      control: 'radio',
      options: keys(toggleSizes),
    },
    text: {
      control: 'text',
    },
  },
  args: {
    ...ThemeStoryUtil.meta.args,
    label: getPangram('pl'),
    text: getPangram('en'),

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
