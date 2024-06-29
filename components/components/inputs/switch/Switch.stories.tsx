import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { primaryColors, secondaryColors } from '@zonia-ui/theme';
import { SpacingBox, Stack } from '../../layout';
import { Button } from '../button/Button';
import { Switch, SwitchProps } from './Switch';

const meta = {
  title: '2. Components/Data display/Switch',
  component: Switch,
  parameters: {
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
    },
    size: {
      control: 'radio',
      options: ['sm', 'md'],
      defaultValue: 'sm',
    },
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

export const Controlled = ({ checked: checkedArg, ...props }: Required<SwitchProps>) => {
  const [isChecked, setChecked] = useState(checkedArg);

  useEffect(() => {
    setChecked(checkedArg);
  }, [checkedArg]);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('Checked change', e.currentTarget.checked);
    setChecked(e.currentTarget.checked);
  };

  return (
    <div style={{ padding: 80, backgroundColor: secondaryColors.jadeGreenLight, overflow: 'auto' }}>
      <SpacingBox $mh="8" $mv="8">
        <Switch {...props} checked={isChecked} onChange={onChangeHandler} />
      </SpacingBox>
    </div>
  );
};

export const Uncontrolled = ({ defaultChecked }: Required<SwitchProps>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.checked = defaultChecked;
    }
  }, [defaultChecked]);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log('Uncontrolled change', e.currentTarget.checked, e);
  };

  return (
    <div style={{ padding: 80, backgroundColor: secondaryColors.jadeGreenLight, overflow: 'auto' }}>
      <Stack $gap="16px" $center>
        <Button onClick={() => inputRef.current?.focus()}>Focus</Button>
        <Button onClick={() => inputRef.current?.focus()}>Toggle</Button>
        <Switch ref={inputRef} defaultChecked={defaultChecked} onChange={onChangeHandler} />
      </Stack>
    </div>
  );
};
