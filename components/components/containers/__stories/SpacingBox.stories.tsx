import { PropsWithChildren } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';
import { AsProp, DUMMY_MESSAGE, getRandomPangram } from '@zonia-ui/core';
import { baseTheme } from '@zonia-ui/theme/themes/baseTheme';
import { DolarPrefix } from '@zonia-ui/theme';
import { HeadingVariant } from '../../dataDisplay';
import { SpacingBox } from '../spacing';
import type { SpacingProps } from '../spacing';

const meta = {
  title: '2. Components/Containers',
  // @ts-expect-error Still haven't figured out props :/
  component: SpacingBox,
  parameters: {
    layout: 'none',
  },
  argTypes: {
    children: { table: { disable: true } },
    $mh: {
      control: 'select',
      options: Object.keys(baseTheme.spacing),
    },
    $mt: {
      control: 'select',
      options: Object.keys(baseTheme.spacing),
    },
    $mb: {
      control: 'select',
      options: Object.keys(baseTheme.spacing),
    },
    $ph: {
      control: 'select',
      options: Object.keys(baseTheme.spacing),
    },
    $pt: {
      control: 'select',
      options: Object.keys(baseTheme.spacing),
    },
    $pb: {
      control: 'select',
      options: Object.keys(baseTheme.spacing),
    },
  },
  args: {
    as: 'div',
    $mh: '0.5',
    $mt: 'px',
    $mb: '56',
    // @ts-expect-error Story
    $ph: '44',
    $pt: '10',
    $pb: '24',
    children: <HeadingVariant variant="h3">{DUMMY_MESSAGE}</HeadingVariant>,
  },
} satisfies Meta<DolarPrefix<SpacingProps> & AsProp<'div' | 'span' | 'p'> & PropsWithChildren>;
export default meta;

type Story = StoryObj<object>;

const DisplayElement = styled(SpacingBox)`
  background-image: linear-gradient(to bottom, #4adc7f 0%, #4adc7f 100%),
    linear-gradient(to bottom, #f56565 0%, #f56565 100%);
  background-clip: content-box, padding-box;
`;

export const SpacingBoxStory: Story = {
  name: 'SpacingBox',
  render: (props) => <DisplayElement {...props}>{getRandomPangram()}</DisplayElement>,
};

// TODO: ogarnij jak przekazywać parametry
