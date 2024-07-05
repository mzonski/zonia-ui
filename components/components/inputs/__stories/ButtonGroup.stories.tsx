import type { Meta, StoryObj } from '@storybook/react';
import { primaryColors } from '@zonia-ui/theme';
import { defaultThemeTextTypography } from '@zonia-ui/theme/themes/typography';
import { Button, ButtonSizes, ButtonVariants } from '../button';
import { directionMap } from '../../containers';
import { DiamondIcon } from '../../../icons';
import ButtonGroup from '../buttonGroup/ButtonGroup';

const meta = {
  title: '2. Components/Input/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'onClick' },
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
    fullWidth: {
      control: 'boolean',
      defaultValue: 'false',
    },
    direction: {
      control: 'select',
      options: Object.keys(directionMap),
    },
    children: { table: { disable: true } },
    variant: {
      control: 'radio',
      options: ButtonVariants,
      defaultValue: 'primary',
    },
  },
  args: {},
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const Buttons = [
  <Button key="b1" color="success">
    First
  </Button>,
  <Button key="b2" color="error">
    Second
  </Button>,
  <Button key="b3" color="info">
    Third
  </Button>,
  <Button key="b4" color="black">
    Fourth
  </Button>,
  <Button key="b5" color="white">
    Fifth
  </Button>,
];

export const Array: Story = {
  args: {
    children: Buttons,
    'data-testid': 'TEST_BUTTON',
  },
};

export const NestedChildren: Story = {
  args: {
    children: (
      <>
        <Button key="b1" color="success">
          First
        </Button>
        <Button key="b2" color="error">
          Second
        </Button>
        <Button key="b3">Third</Button>
        <Button key="b4" color="black">
          Fourth
        </Button>
        <Button key="b5">Fifth</Button>
        <Button key="b6">Sixth</Button>
      </>
    ),
    'data-testid': 'TEST_BUTTON',
  },
};

export const IconButton: Story = {
  args: {
    children: (
      <>
        <Button key="b1" color="success">
          <DiamondIcon size={8} />
          First
        </Button>
        <Button key="b2" color="error">
          <DiamondIcon size={12} />
          Second
        </Button>
        <Button key="b3">
          <DiamondIcon size={16} />
          Third
        </Button>
        <Button key="b4" color="black">
          <DiamondIcon size={20} />
        </Button>
        <Button key="b5">
          <DiamondIcon size={24} />
        </Button>
        <Button key="b6">
          <DiamondIcon size={46} />
        </Button>
      </>
    ),
  },
};
