import type { Meta, StoryObj } from '@storybook/react';
import { getRandomPangram } from '@zonia-ui/core';
import useNextFromArray from '@zonia-ui/core/hooks/useNextFromArray';
import { TextFieldConcise } from '../textFieldConcise';
import { DiamondIcon } from '../../../icons';
import { IconButton } from '../iconButton';
import { Stack } from '../../containers';
import { Button } from '../button';
import { ThemeStoryUtil } from '../../../style';

const meta = {
  title: '2. Components/Input/TextInput Concise',
  component: TextFieldConcise,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...ThemeStoryUtil.meta.argTypes,
    helperText: {
      control: 'text',
    },
    left: { table: { disable: true } },
    onChange: { action: 'onChange' },
    right: { table: { disable: true } },
    value: {
      control: 'text',
    },
  },
  args: {
    ...ThemeStoryUtil.meta.args,
  },
} satisfies Meta<typeof TextFieldConcise>;

export default meta;

type Story = StoryObj<typeof TextFieldConcise>;

const icon = <DiamondIcon />;
const iconButton = (
  <IconButton fill>
    <DiamondIcon />
  </IconButton>
);

export const TextFieldDesignStory: Story = {
  name: 'Design',
  args: {
    left: icon,
    right: iconButton,
    disabled: false,
    label: 'Lorem ipsum',
    placeholder: 'Dolor sit amet',
    readOnly: false,
    helperText: getRandomPangram(),
    borderColor: 'black',
    borderType: 'small',
    verticalBorders: false,
    outlineColor: 'primary',
    shape: 'medium',
  },
};

export const TextFieldPureStory: Story = {
  name: 'Pure TextInput',
  args: {
    placeholder: undefined,
    shape: undefined,
    label: 'Lorem ipsum',
  },
  argTypes: {
    left: { table: { disable: true } },
    right: { table: { disable: true } },
    helperText: { table: { disable: true } },
    verticalBorders: { table: { disable: true } },
  },
};
