import { ChangeEventHandler, InputHTMLAttributes, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { getPangram, getRandomPangram, useToggle } from '@zonia-ui/core';
import { Stack } from '../../../containers';
import { StyledToggle, ToggleLabelProps } from '../../toggles/_shared';
import { Checkbox } from '../../toggles/checkbox';
import { Switch } from '../../toggles/switch';
import { Radio } from '../../toggles/radio';
import { ToggleStoryutil } from './Toggle.storyutil';

type StoryProps = StyledToggle & ToggleLabelProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>;

const meta = {
  ...ToggleStoryutil.meta,
  title: '2. Components/Input/Toggle',
  argTypes: {
    ...ToggleStoryutil.meta.argTypes,
    shape: { table: { disable: true } },
  },
  args: {
    ...ToggleStoryutil.meta.args,
    shape: undefined,
    label: getPangram('pl'),
    text: getRandomPangram(),
  },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const InputRenderer = (props: StoryProps) => {
  const [toggled, , set] = useToggle(props.checked);

  useEffect(() => {
    set(!!props.checked);
  }, [props.checked, set]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    set(event.currentTarget.checked);
  };

  return (
    <Stack $gap="4" $direction="bottom" $wrap="nowrap">
      <Stack $gap="4" $direction="right" $wrap="nowrap">
        <Switch {...props} shape="large" checked={toggled} onChange={onChange} label={undefined} text={undefined} />
        <Radio {...props} checked={toggled} onChange={onChange} label={undefined} text={undefined} />
        <Checkbox {...props} checked={toggled} onChange={onChange} label={undefined} text={undefined} />
      </Stack>
      <Stack $gap="4" $direction="bottom" $wrap="nowrap">
        <Switch {...props} shape="large" checked={toggled} onChange={onChange} />
        <Radio {...props} checked={toggled} onChange={onChange} />
        <Checkbox {...props} checked={toggled} onChange={onChange} />
      </Stack>
    </Stack>
  );
};

export const AllToggles: Story = {
  name: 'All toggles',
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
  render: (props) => InputRenderer(props),
};
