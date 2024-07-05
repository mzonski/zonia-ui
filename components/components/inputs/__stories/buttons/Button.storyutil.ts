import type { Meta } from '@storybook/react';
import { primaryColors } from '@zonia-ui/theme';
import { defaultThemeTextTypography } from '@zonia-ui/theme/themes/typography';

import { ButtonProps, ButtonSizes, ButtonVariants } from '../../button';

const buttonStyleMeta = {
  argTypes: {
    variant: {
      control: 'radio',
      options: ButtonVariants,
    },
    color: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    shadowColor: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    labelTextVariant: {
      control: 'select',
      options: Object.keys(defaultThemeTextTypography),
    },
    size: {
      control: 'radio',
      options: ButtonSizes,
    },
    labelBold: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'primary',
    color: 'primary',
    shadowColor: 'black',
    labelTextVariant: 'md',
    size: 'md',
    labelBold: false,
    disabled: false,
    fullWidth: false,
    fill: false,
  },
} satisfies Meta<ButtonProps & Pick<HTMLInputElement, 'disabled'>>;

const disabledToggleStyleArgTypes = {
  variant: { table: { disable: true } },
  color: { table: { disable: true } },
  shadowColor: { table: { disable: true } },
  labelTextVariant: { table: { disable: true } },
  size: { table: { disable: true } },
  shape: { table: { disable: true } },
  labelBold: { table: { disable: true } },
  fullWidth: { table: { disable: true } },
  fill: { table: { disable: true } },
};

export const ButtonStoryUtil = {
  meta: buttonStyleMeta,
  disabledArgTypes: disabledToggleStyleArgTypes,
};
