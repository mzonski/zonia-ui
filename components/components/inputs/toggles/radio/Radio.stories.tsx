import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../../../containers';
import { Button } from '../../button';
import { ToggleStoryUtil } from '../_shared/toggle.storyutil';
import Radio from './Radio';

const meta = {
  ...ToggleStoryUtil.meta,
  title: '2. Components/Input/Toggle/Radio',
  component: Radio,
  argTypes: {
    ...ToggleStoryUtil.meta.argTypes,
    onChange: { action: 'onChange' },
    onFocus: { action: 'onFocus' },
  },
  args: {
    ...ToggleStoryUtil.meta.args,
    shape: 'oval',
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Design: Story = {};

const InputRenderer: typeof Controlled.render = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack $gap="4" $center>
      <Button size="2xs" onClick={() => console.log('Current ref', inputRef)}>
        Debug
      </Button>
      <Button size="2xs" onClick={() => inputRef.current?.focus()}>
        Focus
      </Button>
      <Radio {...props} ref={inputRef} size="lg" />
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
    borderType: { table: { disable: true } },
  },
  render: (props, ctx) => InputRenderer(props, ctx),
};

export const Uncontrolled: Story = {
  argTypes: {
    checked: { table: { disable: true } },
    ...ToggleStoryUtil.disabledArgTypes,
    size: { table: { disable: true } },
    borderType: { table: { disable: true } },
    defaultChecked: {
      control: 'boolean',
    },
  },
  args: {
    defaultChecked: false,
  },
  render: (props, ctx) => InputRenderer(props, ctx),
};
