import { ChangeEventHandler, InputHTMLAttributes, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { getPangram, getRandomPangram, useToggle } from '@zonia-ui/core';
import { Stack } from '../../containers';
import { ToggleStoryUtil } from './_shared/toggle.storyutil';
import { StyledToggle, ToggleLabelProps } from './_shared';
import { Checkbox } from './checkbox';
import { Switch } from './switch';
import { Radio } from './radio';

type StoryProps = StyledToggle & ToggleLabelProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

const meta = {
  ...ToggleStoryUtil.meta,
  title: '2. Components/Input/Toggle',
  argTypes: {
    ...ToggleStoryUtil.meta.argTypes,
    shape: { table: { disable: true } },
  },
  args: {
    ...ToggleStoryUtil.meta.args,
    shape: undefined,
    label: getPangram('pl'),
    text: getRandomPangram(),
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

const InputRenderer = (props: StoryProps) => {
  const [toggled, , set] = useToggle(props.checked);

  useEffect(() => {
    set(!!props.checked);
  }, [props.checked, set]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    set(event.currentTarget.checked);
  };

  return (
    <Stack $gap="16px">
      <Stack $gap="16px" $direction="row">
        <Switch {...props} shape="large" checked={toggled} onChange={onChange} label={undefined} text={undefined} />
        <Radio {...props} checked={toggled} onChange={onChange} label={undefined} text={undefined} />
        <Checkbox {...props} checked={toggled} onChange={onChange} label={undefined} text={undefined} />
      </Stack>
      <Stack $gap="16px">
        <Switch {...props} shape="large" checked={toggled} onChange={onChange} />
        <Radio {...props} checked={toggled} onChange={onChange} />
        <Checkbox {...props} checked={toggled} onChange={onChange} />
      </Stack>
    </Stack>
  );
};

export const AllToggles: Story = {
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
  },
  render: InputRenderer,
};
