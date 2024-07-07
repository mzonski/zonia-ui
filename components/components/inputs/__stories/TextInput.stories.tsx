import type { Meta, StoryObj } from '@storybook/react';
import { getPangram, getRandomPangram } from '@zonia-ui/core';
import { primaryColors, themeBorderSizeKey, themeShapeKey } from '@zonia-ui/theme';
import useNextFromArray from '@zonia-ui/core/hooks/useNextFromArray';
import { StyledTextFieldProps, TextField, TextInputComponentProps } from '../textField';
import { DiamondIcon } from '../../../icons';
import { IconButton } from '../iconButton';
import { Stack } from '../../containers';
import { Button } from '../button';

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
  args: {
    // Form control
    error: false,
    disabled: false,
    label: getPangram('pl'),
    placeholder: getRandomPangram(),
    helperText: getRandomPangram(),
    readOnly: false,
    // Styling
    borderColor: 'black',
    borderType: 'small',
    verticalBorders: false,
    outlineColor: 'primary',
    shape: 'medium',
  },
} satisfies Meta<StyledTextFieldProps & TextInputComponentProps>;

export default meta;

type Story = StoryObj<StyledTextFieldProps & TextInputComponentProps>;

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
    error: false,
    outlineColor: 'primary',
    shape: 'medium',
  },
  argTypes: {
    value: { table: { disable: true } },
  },
};

export const ControlledTextInput: Story = {
  name: 'Controlled TextInput',
  args: {
    value: 'Controlled value',
  },
  argTypes: {
    left: { table: { disable: true } },
    right: { table: { disable: true } },
    helperText: { table: { disable: true } },
    verticalBorders: { table: { disable: true } },
    borderColor: { table: { disable: true } },
    borderType: { table: { disable: true } },
    outlineColor: { table: { disable: true } },
    shape: { table: { disable: true } },
  },
};

const IconSwitcher = (props: StyledTextFieldProps & TextInputComponentProps) => {
  const [current, next] = useNextFromArray<'left' | 'right' | 'both' | 'none'>(['left', 'right', 'both', 'none']);

  let iconProps = {};
  switch (current) {
    case 'left':
      iconProps = {
        left: <DiamondIcon />,
      };
      break;
    case 'right':
      iconProps = {
        right: <DiamondIcon />,
      };
      break;
    case 'both':
      iconProps = {
        left: <DiamondIcon />,
        right: <DiamondIcon />,
      };
      break;
    case 'none':
    default:
      iconProps = {};
      break;
  }

  return (
    <Stack $gap="4" $center>
      <Button size="2xs" onClick={next}>
        Next icon position
      </Button>
      <TextField {...props} {...iconProps} />
    </Stack>
  );
};

export const TextFieldIconSwitcherStory: Story = {
  name: 'Icon switcher',
  args: {
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    left: { table: { disable: true } },
    right: { table: { disable: true } },
    helperText: { table: { disable: true } },
    borderColor: { table: { disable: true } },
    borderType: { table: { disable: true } },
    outlineColor: { table: { disable: true } },
    shape: { table: { disable: true } },
  },
  render: IconSwitcher,
};
