import type { Meta, StoryObj } from '@storybook/react';
import { DUMMY_MESSAGE } from '@zonia-ui/core';

import { primaryColors, secondaryColors, ValidSizeFormat } from '@zonia-ui/theme';

import { keys } from 'fp-ts/Record';
import { SpacingBox, Stack } from '../../layout';
import { Badge } from './Badge';

const meta = {
  title: '2. Components/Data display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    shape: {
      control: 'radio',
      options: ['rounded', 'square'],
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    text: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

const Icon = ({ size }: { size: ValidSizeFormat }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.08305 0.00344878C7.63342 0.0493135 8.04241 0.532663 7.99655 1.08304L7.67013 4.99999H13.6632L14.0035 0.916949C14.0493 0.366572 14.5327 -0.042416 15.083 0.00344878C15.6334 0.0493135 16.0424 0.532663 15.9965 1.08304L15.6701 4.99999H19C19.5523 4.99999 20 5.44771 20 5.99999C20 6.55228 19.5523 6.99999 19 6.99999H15.5035L15.0035 13H18C18.5523 13 19 13.4477 19 14C19 14.5523 18.5523 15 18 15H14.8368L14.4965 19.083C14.4507 19.6334 13.9673 20.0424 13.417 19.9965C12.8666 19.9507 12.4576 19.4673 12.5035 18.9169L12.8299 15H6.8368L6.49655 19.083C6.45068 19.6334 5.96733 20.0424 5.41695 19.9965C4.86658 19.9507 4.45759 19.4673 4.50345 18.9169L4.82987 15H1C0.447715 15 0 14.5523 0 14C0 13.4477 0.447715 13 1 13H4.99653L5.49653 6.99999H2C1.44772 6.99999 1 6.55228 1 5.99999C1 5.44771 1.44772 4.99999 2 4.99999H5.6632L6.00345 0.916949C6.04932 0.366572 6.53267 -0.042416 7.08305 0.00344878ZM7.50347 6.99999L7.00347 13H12.9965L13.4965 6.99999H7.50347Z"
        fill="black"
      />
    </svg>
  );
};

export const Component: Story = {
  args: {
    size: 'md',
    color: 'primary',
    iconPosition: 'right',
    icon: Icon,
    text: DUMMY_MESSAGE,
  },
};

export const Display = () => {
  return (
    <div style={{ width: 400, height: 400, backgroundColor: secondaryColors.jadeGreenLight, overflow: 'scroll' }}>
      <SpacingBox $mh="2" $mt="5" $mb="2">
        <Stack $wrap="wrap" $direction="row" $gap="4px">
          <Badge color="primary" text={DUMMY_MESSAGE} icon={Icon} iconPosition="left" />
          <Badge color="error" text={DUMMY_MESSAGE} icon={Icon} iconPosition="right" />
          {keys(primaryColors).map((key) => (
            <Badge key={key} color={key} text={key} />
          ))}
        </Stack>
      </SpacingBox>
    </div>
  );
};
