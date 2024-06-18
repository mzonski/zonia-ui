import type { Meta } from '@storybook/react';
import styled from 'styled-components';
import { DUMMY_MESSAGE } from '@zonia-ui/core';
import { baseTheme } from '@zonia-ui/theme/themes/baseTheme';
import { HeadingVariant } from '../../dataDisplay';
import type { SpacingBoxProps } from './SpacingBox';
import { SpacingBox as component } from './SpacingBox';

const meta = {
  title: '2. Components/Layout',
  component,
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
} satisfies Meta<typeof component>;
export default meta;

const DisplayElement = styled(component)`
  background-image: linear-gradient(to bottom, #4adc7f 0%, #4adc7f 100%),
    linear-gradient(to bottom, #f56565 0%, #f56565 100%);
  background-clip: content-box, padding-box;
`;

export const SpacingBox = (props: SpacingBoxProps) => {
  return <DisplayElement {...props} />;
};

SpacingBox.args = {
  as: 'div',
  $mh: 0.5,
  $mt: 'px',
  $mb: 56,
  $ph: 44,
  $pt: 10,
  $pb: 24,
  children: <HeadingVariant variant="h3">{DUMMY_MESSAGE}</HeadingVariant>,
};

// TODO: ogarnij jak przekazywać parametry
