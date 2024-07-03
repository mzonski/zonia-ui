/*
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { primaryColors, secondaryColors } from '@zonia-ui/theme';
import { themeShape } from '@zonia-ui/theme/constants/shape';
import { SpacingBox, Stack } from '../../../containers';
import { Button } from '../../button';
import Radio from './Radio';
import { RadioProps, radioSizes } from './types';

const meta = {
  title: '2. Components/Input/Radio',
  component: Radio,
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
      options: radioSizes,
      defaultValue: 'sm',
    },
    border: {
      control: 'radio',
      options: ['tiny', 'small', 'medium'],
      defaultValue: 'sm',
    },
    outlineColor: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    borderColor: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    shape: {
      control: 'select',
      options: themeShape,
    },
    disabled: {
      control: 'boolean',
      false: true,
    },
  },
  args: {
    color: 'primary',
    size: 'sm',
    border: 'tiny',
    shape: 'oval',
    disabled: false,
  },
} satisfies Meta<typeof Radio>;

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

const UncontrolledExample = ({ defaultChecked, ...props }: Partial<RadioProps>) => {
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
        <Radio {...props} ref={inputRef} defaultChecked={defaultChecked} onChange={onChangeHandler} />
      </Stack>
    </div>
  );
};

const ControlledExample = ({ checked: checkedArg, ...props }: Partial<RadioProps>) => {
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
          <Radio {...props} checked={isChecked} onChange={onChangeHandler} />
        </Stack>
      </SpacingBox>
    </div>
  );
};
*/
import { useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '../../../containers';
import { Button } from '../../button';
import { ToggleStoryUtil } from '../_shared/toggle.storyutil';
import Radio from './Radio';
import { radioSizes } from './types';

const meta = {
  ...ToggleStoryUtil.meta,
  title: '2. Components/Input/Radio',
  component: Radio,
  argTypes: {
    ...ToggleStoryUtil.meta.argTypes,
    size: {
      control: 'radio',
      options: radioSizes,
    },
    border: {
      control: 'radio',
      options: ['tiny', 'small', 'medium'],
    },
    onChange: { action: 'onChange' },
  },
  args: {
    ...ToggleStoryUtil.meta.args,
    size: 'md',
    shape: 'oval',
    border: 'tiny',
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Design: Story = {
  argTypes: {
    border: { table: { disable: true } },
  },
};

const InputRenderer: typeof Controlled.render = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack $gap="16px" $center>
      <Button size="2xs" onClick={() => console.debug('Current ref', inputRef)}>
        Debug
      </Button>
      <Button size="2xs" onClick={() => inputRef.current?.focus()}>
        Focus
      </Button>
      <Radio ref={inputRef} {...props} size="lg" />
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
    border: { table: { disable: true } },
  },
  render: InputRenderer,
};

export const Uncontrolled: Story = {
  argTypes: {
    checked: { table: { disable: true } },
    ...ToggleStoryUtil.disabledArgTypes,
    size: { table: { disable: true } },
    border: { table: { disable: true } },
    defaultChecked: {
      control: 'boolean',
    },
  },
  args: {
    defaultChecked: false,
  },
  render: InputRenderer,
};
