import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { primaryColors } from '@zonia-ui/theme';
import { Stack } from '../../layout';
import { Button } from '../button/Button';
import { Checkbox } from './Checkbox';
import { checkboxSizes } from './types';

const meta = {
  title: '2. Components/Input/Checkbox',
  component: Checkbox,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
  argTypes: {
    color: {
      table: { diable: false },
      control: 'select',
      options: Object.keys(primaryColors),
    },
    outlineColor: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    borderColor: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    size: {
      control: 'radio',
      options: checkboxSizes,
    },
    onChange: { action: 'onChange' },
  },
  args: {
    color: 'primary',
    outlineColor: 'primary',
    borderColor: 'black',
    size: 'md',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Design: Story = {};

const InputRenderer: typeof Controlled.render = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const setIntermediate = () => {
    if (!inputRef.current) return;

    inputRef.current.indeterminate = true;
  };

  return (
    <Stack $gap="16px" $center>
      <Button size="2xs" onClick={() => console.debug('Current ref', inputRef)}>
        Debug
      </Button>
      <Button size="2xs" onClick={setIntermediate}>
        Intermediate
      </Button>
      <Button size="2xs" onClick={() => inputRef.current?.focus()}>
        Focus
      </Button>
      <Checkbox ref={inputRef} {...props} size="lg" />
    </Stack>
  );
};

export const Controlled: Story = {
  args: {
    checked: true,
  },
  argTypes: {
    checked: {
      checked: 'boolean',
    },
    color: { table: { disable: true } },
    outlineColor: { table: { disable: true } },
    borderColor: { table: { disable: true } },
    size: { table: { disable: true } },
  },
  render: InputRenderer,
};

export const Uncontrolled: Story = {
  argTypes: {
    checked: { table: { disable: true } },
    color: { table: { disable: true } },
    outlineColor: { table: { disable: true } },
    borderColor: { table: { disable: true } },
    size: { table: { disable: true } },
    defaultChecked: {
      control: 'boolean',
    },
  },
  args: {
    defaultChecked: false,
  },
  render: InputRenderer,
};
