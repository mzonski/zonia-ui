import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../../../containers';
import { Button } from '../../button';
import Checkbox from '../../toggles/checkbox/Checkbox';
import { ToggleStoryutil } from './Toggle.storyutil';

const meta = {
  ...ToggleStoryutil.meta,
  title: '2. Components/Input/Toggle/Checkbox',
  component: Checkbox,
  argTypes: {
    ...ToggleStoryutil.meta.argTypes,
    disabled: {
      checked: 'boolean',
    },
    onChange: { action: 'onChange' },
  },
  args: {
    ...ToggleStoryutil.meta.args,
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Design: Story = {};

const InputRenderer: typeof CheckboxControlledStory.render = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const setIntermediate = () => {
    if (!inputRef.current) return;

    inputRef.current.indeterminate = true;
  };

  return (
    <Stack $gap="4" $center>
      <Button size="2xs" onClick={() => console.log('Current ref', inputRef)}>
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

export const CheckboxControlledStory: Story = {
  args: {
    checked: true,
    disabled: false,
  },
  argTypes: {
    checked: {
      checked: 'boolean',
    },
    ...ToggleStoryutil.disabledArgTypes,
    size: { table: { disable: true } },
  },
  render: (props, ctx) => InputRenderer(props, ctx),
};

export const CheckboxUncontrolledStory: Story = {
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
  render: (props, ctx) => InputRenderer(props, ctx),
};
