import type { Meta, StoryObj } from '@storybook/react';

import { primaryColors } from '@zonia-ui/theme';
import { defaultThemeTextTypography } from '@zonia-ui/theme/themes/typography';
import { DUMMY_MESSAGE } from '@zonia-ui/core';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { Button } from './Button';
import { ButtonSizes, ButtonVariants } from './types';

const meta = {
  title: '2. Components/Input',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: Object.keys(primaryColors),
      defaultValue: 'primary',
    },
    shadowColor: {
      control: 'select',
      options: Object.keys(primaryColors),
      defaultValue: 'black',
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
      defaultValue: 'false',
    },
    disabled: {
      control: 'boolean',
      defaultValue: 'false',
    },
    fullWidth: {
      control: 'boolean',
      defaultValue: 'false',
    },
    children: {
      control: 'text',
      defaultValue: 'Zażółć geślą jaźń',
    },
    variant: {
      control: 'radio',
      options: ButtonVariants,
      defaultValue: 'secondary',
    },
    onClick: { action: 'onClick' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultComponent: Story = {
  name: 'Button',
  args: {
    size: 'md',
    children: DUMMY_MESSAGE,
    'data-testid': 'TEST_BUTTON',
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByTestId('TEST_BUTTON');

    await step('Click on button', async () => {
      await userEvent.click(buttonElement);
    });

    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};
