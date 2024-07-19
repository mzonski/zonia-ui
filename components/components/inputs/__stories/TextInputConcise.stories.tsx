import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { getRandomPangram } from '@zonia-ui/core';
import { TextFieldConcise } from '../textFieldConcise';
import { DiamondIcon } from '../../../icons';
import { IconButton } from '../iconButton';
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

const ControlledRenderer: Story['render'] = (props) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return <TextFieldConcise {...props} value={value} onChange={(e) => setValue(e.currentTarget.value)} />;
};

export const TextFieldDesignStory: Story = {
  name: 'Design',
  args: {
    left: icon,
    right: iconButton,
    disabled: false,
    label: 'Lorem ipsum',
    readOnly: false,
    helperText: getRandomPangram(),
    borderColor: 'black',
    borderType: 'small',
    verticalBorders: true,
    outlineColor: 'primary',
    shape: 'medium',
  },
  render: ControlledRenderer,
};

export const TextFieldCUncontrolledStory: Story = {
  name: 'Uncontrolled',
  args: {
    placeholder: undefined,
    shape: undefined,
    label: 'Lorem ipsum',
    defaultValue: 'changeMe',
  },
  argTypes: {
    left: { table: { disable: true } },
    right: { table: { disable: true } },
    helperText: { table: { disable: true } },
    verticalBorders: { table: { disable: true } },
  },
};

export const TextFieldCControlledStory: Story = {
  name: 'Controlled',
  args: {
    placeholder: undefined,
    shape: undefined,
    label: 'Lorem ipsum',
    value: 'changeMe',
  },
  argTypes: {
    left: { table: { disable: true } },
    right: { table: { disable: true } },
    helperText: { table: { disable: true } },
    verticalBorders: { table: { disable: true } },
  },
  render: ControlledRenderer,
};
