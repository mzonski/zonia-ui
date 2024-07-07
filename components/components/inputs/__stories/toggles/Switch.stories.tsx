import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { themeShapeKey } from '@zonia-ui/theme/constants/shape';
import { Button } from '../../button';
import { Stack } from '../../../containers';
import Switch from '../../toggles/switch/Switch';
import { ToggleStoryUtil } from './Toggle.storyutil';

const meta = {
  ...ToggleStoryUtil.meta,
  title: '2. Components/Input/Toggle/Switch',
  component: Switch,
  argTypes: {
    ...ToggleStoryUtil.meta.argTypes,
    checked: {
      control: 'boolean',
    },
    pillShape: {
      control: 'select',
      options: themeShapeKey,
    },
    disabled: {
      control: 'boolean',
      false: true,
    },
    onChange: { action: 'onChange' },
    onFocus: { action: 'onFocus' },
  },
  args: {
    ...ToggleStoryUtil.meta.args,
    pillShape: 'oval',
    shape: 'large',
    disabled: false,
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Design: Story = {
  argTypes: {
    checked: { table: { disable: true } },
    defaultChecked: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
  args: {
    defaultChecked: false,
  },
};

const InputRenderer: typeof SwitchControlledStory.render = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack $gap="4" $center>
      <Button size="2xs" onClick={() => console.log('Current ref', inputRef)}>
        Debug
      </Button>
      <Button size="2xs" onClick={() => inputRef.current?.focus()}>
        Focus
      </Button>
      <Switch {...props} ref={inputRef} size="lg" />
    </Stack>
  );
};

export const SwitchUncontrolledStory: Story = {
  argTypes: {
    ...ToggleStoryUtil.disabledArgTypes,
    pillShape: { table: { disable: true } },
    checked: { table: { disable: true } },
    defaultChecked: {
      control: 'boolean',
      defaultValue: true,
    },
  },
  args: {
    defaultChecked: false,
  },
  render: (props, ctx) => InputRenderer(props, ctx),
};
export const SwitchControlledStory: Story = {
  argTypes: {
    ...ToggleStoryUtil.disabledArgTypes,
    defaultChecked: { table: { disable: true } },
    pillShape: { table: { disable: true } },
    checked: {
      control: 'boolean',
      defaultValue: true,
    },
  },
  args: {
    checked: true,
  },
  render: (props, ctx) => InputRenderer(props, ctx),
};
