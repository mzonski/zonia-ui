import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../../../containers';
import { Button } from '../../button';
import Radio from '../../toggles/radio/Radio';
import { ToggleStoryUtil } from './Toggle.storyutil';

const meta = {
  ...ToggleStoryUtil.meta,
  title: '2. Components/Input/Toggle/Radio',
  component: Radio,
  argTypes: {
    ...ToggleStoryUtil.meta.argTypes,
    onChange: { action: 'onChange', table: { disable: true } },
    onFocus: { action: 'onFocus', table: { disable: true } },
  },
  args: {
    ...ToggleStoryUtil.meta.args,
    shape: 'oval',
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Design: Story = {};

const InputRenderer: typeof RadioControlledStory.render = (props) => {
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

export const RadioControlledStory: Story = {
  name: 'Controlled',
  argTypes: {
    ...ToggleStoryUtil.disabledArgTypes,
    size: { table: { disable: true } },
    borderType: { table: { disable: true } },
    checked: {
      control: 'boolean',
    },
  },
  args: {
    checked: true,
  },
  render: (props, ctx) => InputRenderer(props, ctx),
};
