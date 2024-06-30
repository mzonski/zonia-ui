import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { primaryColors, secondaryColors } from '@zonia-ui/theme';
import { SpacingBox, Stack } from '../../layout';
import { Button } from '../button/Button';
import { Switch } from './Switch';
import { SwitchProps, switchSizes } from './types';

const meta = {
  title: '2. Components/Input/Switch',
  component: Switch,
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      defaultValue: true,
    },
    color: {
      control: 'select',
      options: Object.keys(primaryColors),
      defaultValue: 'primary',
    },
    size: {
      control: 'radio',
      options: switchSizes,
      defaultValue: 'sm',
    },
    disabled: {
      control: 'boolean',
      false: true,
    },
  },
  args: {
    color: 'primary',
    size: 'sm',
    disabled: false,
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Component: Story = {
  argTypes: {
    checked: { table: { disable: true } },
    // defaultChecked: { table: { disable: true } },
  },
  args: {
    defaultChecked: false,
  },
};

export const Uncontrolled: Story = {
  argTypes: {
    checked: { table: { disable: true } },
    defaultChecked: {
      control: 'boolean',
      defaultValue: true,
    },
  },
  args: {
    defaultChecked: false,
  },
  render: (props) => <UncontrolledExample {...props} />,
};
export const Controlled: Story = {
  argTypes: {
    defaultChecked: { table: { disable: true } },
    checked: {
      control: 'boolean',
      defaultValue: true,
    },
  },
  args: {
    checked: true,
  },
  render: (props) => <ControlledExample {...props} />,
};

const UncontrolledExample = ({ defaultChecked, ...props }: Partial<SwitchProps>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (defaultChecked !== undefined && inputRef.current && inputRef.current.checked !== defaultChecked) {
      inputRef.current.click();
    }
  }, [defaultChecked]);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('Uncontrolled change', e.currentTarget.checked, e);
  };

  return (
    <div style={{ padding: 80, backgroundColor: secondaryColors.jadeGreenLight, overflow: 'auto' }}>
      <Stack $gap="16px" $center>
        <Button size="2xs" onClick={() => inputRef.current?.focus()}>
          Focus
        </Button>
        <Button size="2xs" onClick={() => inputRef.current?.click()}>
          Toggle
        </Button>
        <Switch {...props} ref={inputRef} defaultChecked={defaultChecked} onChange={onChangeHandler} />
      </Stack>
    </div>
  );
};

const ControlledExample = ({ checked: checkedArg, ...props }: Partial<SwitchProps>) => {
  const [isChecked, setChecked] = useState(checkedArg ?? true);

  useEffect(() => {
    if (!checkedArg) return;
    setChecked(checkedArg);
  }, [checkedArg]);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('Checked change', e.currentTarget.checked);
    setChecked(e.currentTarget.checked);
  };

  return (
    <div style={{ padding: 80, backgroundColor: secondaryColors.jadeGreenLight, overflow: 'auto' }}>
      <SpacingBox $mh="8" $mv="8">
        <Stack $gap="16px" $center>
          <Button size="2xs" onClick={() => setChecked(true)}>
            Check
          </Button>
          <Button size="2xs" onClick={() => setChecked(false)}>
            Uncheck
          </Button>
          <Switch {...props} checked={isChecked} onChange={onChangeHandler} />
        </Stack>
      </SpacingBox>
    </div>
  );
};
