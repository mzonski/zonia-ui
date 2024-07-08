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
    label: 'Lorem ipsum',
  },
  argTypes: {
    left: { table: { disable: true } },
    right: { table: { disable: true } },
    helperText: { table: { disable: true } },
    verticalBorders: { table: { disable: true } },
  },
};

const IconSwitcher: typeof TextFieldIconSwitcherStory.render = (props) => {
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
      <TextFieldConcise {...props} {...iconProps} />
    </Stack>
  );
};

export const TextFieldIconSwitcherStory: Story = {
  name: 'Icon switcher',
  args: {
    label: 'Lorem ipsum',
    disabled: false,
    readOnly: false,
  },
  render: (args, context) => IconSwitcher(args, context),
};
