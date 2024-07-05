import type { Meta, StoryObj } from '@storybook/react';
import { omit } from 'lodash';
import { Button } from '../../button';
import { directionMap } from '../../../containers';
import { DiamondIcon } from '../../../../icons';
import ButtonGroup from '../../buttonGroup/ButtonGroup';
import { IconButton } from '../../iconButton';
import { ButtonStoryUtil } from './Button.storyutil';

const meta = {
  title: '2. Components/Input/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'onClick' },
    ...omit(ButtonStoryUtil.meta.argTypes, 'fill'),
    direction: {
      control: 'select',
      options: Object.keys(directionMap),
    },
    stick: {
      control: 'select',
      options: [...Object.keys(directionMap), 'undefined'],
    },
    children: { table: { disable: true } },
  },
  args: {
    ...omit(ButtonStoryUtil.meta.args, 'fill'),
    direction: 'right',
  },
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

export const ButtonGroupArray: Story = {
  name: 'Array',
  args: {
    children: Buttons,
    'data-testid': 'TEST_BUTTON',
  },
};

export const ButtonGroupNestedChildren: Story = {
  name: 'Nested children',
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

export const ButtonGroupIconStory: Story = {
  name: 'Mixed buttons',
  args: {
    children: (
      <>
        <Button key="b1" color="success">
          <DiamondIcon />
          First
        </Button>
        <Button key="b2" color="error">
          <DiamondIcon />
          Second
        </Button>
        <IconButton key="b3">
          <DiamondIcon />
        </IconButton>
        <Button key="b4" color="black">
          <DiamondIcon />
        </Button>
        <Button key="b5">
          <DiamondIcon />
        </Button>
        <Button key="b6">
          <DiamondIcon />
        </Button>
      </>
    ),
  },
};
