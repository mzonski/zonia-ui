import type { Meta, StoryObj } from '@storybook/react';

import { primaryColors, themeShape } from '@zonia-ui/theme';
import { defaultThemeTextTypography } from '@zonia-ui/theme/themes/typography';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { IconButton } from '../iconButton';
import { ButtonSizes, ButtonVariants } from '../button';
import { DiamondIcon } from '../../../icons';

const meta = {
  title: '2. Components/Input',
  component: IconButton,
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
    children: { table: { disable: true } },
    variant: {
      control: 'radio',
      options: ButtonVariants,
      defaultValue: 'primary',
    },
    shape: {
      control: 'select',
      options: themeShape,
    },
    onClick: { action: 'onClick' },
  },
  args: {
    color: 'primary',
    shadowColor: 'black',
    labelTextVariant: 'md',
    size: 'md',
    labelBold: false,
    disabled: false,
    fullWidth: false,
    shape: 'oval',
    variant: 'primary',
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconButtonStory: Story = {
  name: 'IconButton',
  args: {
    size: 'md',
    children: <DiamondIcon />,
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
