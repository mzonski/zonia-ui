import { PropsWithChildren } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AsProp } from '@zonia-ui/core';
import { DUMMY_MESSAGE } from '@zonia-ui/core/constants';
import { DolarPrefix } from '@zonia-ui/theme';

import { Flexbox as component, FlexProps } from '../flexbox/Flexbox.tsx';

const meta = {
  title: '2. Components/Containers',
  component,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'span', 'p'],
    },
  },
} satisfies Meta<PropsWithChildren<DolarPrefix<FlexProps> & AsProp<'div' | 'span' | 'p'>>>;

export default meta;

type Story = StoryObj<PropsWithChildren<DolarPrefix<FlexProps> & AsProp<'div' | 'span' | 'p'>>>;

export const FlexboxStory: Story = {
  name: 'Flexbox',
  args: {
    children: DUMMY_MESSAGE,
    as: 'div',
  },
};
