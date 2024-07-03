import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../../../containers';
import { Button } from '../../button';
import { ToggleStoryUtil } from '../_shared/toggle.storyutil';
import { Checkbox } from './Checkbox';
import { checkboxSizes } from './types';

const meta = {
  ...ToggleStoryUtil.meta,
  title: '2. Components/Input/Checkbox',
  component: Checkbox,
  argTypes: {
    ...ToggleStoryUtil.meta.argTypes,
    size: {
      control: 'radio',
      options: checkboxSizes,
    },
    onChange: { action: 'onChange' },
  },
  args: {
    ...ToggleStoryUtil.meta.args,
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
    disabled: false,
  },
  argTypes: {
    checked: {
      checked: 'boolean',
    },
    disabled: {
      checked: 'boolean',
    },
    ...ToggleStoryUtil.disabledArgTypes,
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
