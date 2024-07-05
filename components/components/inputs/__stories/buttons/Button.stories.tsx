import type { Meta, StoryObj } from '@storybook/react';
import { getRandomPangram } from '@zonia-ui/core';
import { Button } from '../../button';
import { DiamondIcon } from '../../../../icons';
import { ButtonStoryUtil } from './Button.storyutil';

const meta = {
  title: '2. Components/Input/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...ButtonStoryUtil.meta.argTypes,
    children: {
      control: 'text',
    },
    onClick: { action: 'onClick' },
  },
  args: {
    ...ButtonStoryUtil.meta.args,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

const children = (
  <>
    <DiamondIcon />
    {getRandomPangram()}
  </>
);

export const ButtonDefaultStory: Story = {
  name: 'Button',
  args: {
    children,
    'data-testid': 'TEST_BUTTON',
  },
};
// centered' | 'fullscreen' | 'padded' | 'none
export const ButtonDefaultFillStory: Story = {
  name: 'Fullscreen fill',
  parameters: {
    layout: 'none',
  },
  args: {
    fill: true,
    children,
    'data-testid': 'TEST_BUTTON',
  },
};
