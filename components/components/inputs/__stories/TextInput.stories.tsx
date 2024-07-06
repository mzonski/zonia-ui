import type { Meta, StoryObj } from '@storybook/react';
import { getRandomPangram } from '@zonia-ui/core';
import { primaryColors, themeBorderSizeKey, themeShapeKey } from '@zonia-ui/theme';
import { StyledTextFieldProps, TextField, TextInputComponentProps } from '../textField';
import { DiamondIcon } from '../../../icons';
import { IconButton } from '../iconButton';

const meta = {
  title: '2. Components/Input/TextInput',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: 'text',
    },
    helperText: {
      control: 'text',
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
    onChange: { action: 'onChange' },
    left: { table: { disable: true } },
    right: { table: { disable: true } },
  },
  args: {},
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<Partial<StyledTextFieldProps> & TextInputComponentProps>;

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
    required: false,
    readOnly: false,
    helperText: getRandomPangram(),
    borderColor: 'black',
    borderType: 'small',
    verticalBorders: false,
    outlineColor: 'primary',
    shape: 'medium',
  },
};

export const TextFieldEmptyStory: Story = {
  name: 'No icons',
  args: {
    disabled: false,
    required: false,
    readOnly: false,
  },
};
