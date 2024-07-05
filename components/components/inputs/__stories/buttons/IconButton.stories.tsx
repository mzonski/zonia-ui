import type { Meta, StoryObj } from '@storybook/react';

import { themeShapeKey } from '@zonia-ui/theme';
import { expect, userEvent, waitFor, within } from '@storybook/test';
import { IconButton } from '../../iconButton';
import { DiamondIcon } from '../../../../icons';
import { ButtonStoryUtil } from './Button.storyutil';

const meta = {
  title: '2. Components/Input/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...ButtonStoryUtil.meta.argTypes,
    shape: {
      control: 'select',
      options: themeShapeKey,
    },
    onClick: { action: 'onClick' },
  },
  args: {
    ...ButtonStoryUtil.meta.args,
    shape: 'oval',
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
// centered' | 'fullscreen' | 'padded' | 'none
export const IconButtonFullscreenFillStory: Story = {
  name: 'Fullscreen fill',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    fill: true,
    children: <DiamondIcon />,
    'data-testid': 'TEST_BUTTON',
  },
};
