import type { Meta, StoryObj } from '@storybook/react';
import { primaryColors, SvgProps } from '@zonia-ui/theme';
import { ColorfulProgress, ColorfulProgressProps, colorfulLoaderVariants } from '../colorfulLoader';
import { Button, ButtonVariants } from '../../inputs';
import { ButtonComponentProps } from '../../inputs/button/Button';
import { ColorfulSpinner } from '../colorfulSpinner';
import { ColorfulSpinnerProps } from '../colorfulSpinner/ColorfulSpinner';

const meta = {
  title: '2. Components/Feedback/Spinners',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 16, max: 96, step: 4 },
    },
  },
} satisfies Meta<SvgProps>;

export default meta;

type Story = StoryObj<object>;

export const ColorfulProgressStory: Story = {
  argTypes: {
    variant: {
      control: 'radio',
      options: colorfulLoaderVariants,
    },
  },
  args: {
    size: 80,
  },
  name: 'Big progress',
  render: (props) => <ColorfulProgress {...props} />,
};

export const ProgressLoadingButton: StoryObj<
  { buttonVariant: ButtonComponentProps['variant'] } & Pick<ButtonComponentProps, 'disabled' | 'color'> &
    ColorfulProgressProps
> = {
  name: 'Progress in Button',
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: ButtonVariants,
    },
    color: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    variant: {
      control: 'radio',
      options: colorfulLoaderVariants,
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    disabled: true,
    buttonVariant: 'secondary',
    size: 24,
    color: 'primary',
  },
  render: (props) => (
    <Button variant={props.buttonVariant} disabled={props.disabled} color={props.color}>
      Loading
      <ColorfulProgress size={props.size} variant={props.variant} />
    </Button>
  ),
};

export const ColorfulSpinnerStory: StoryObj<ColorfulSpinnerProps> = {
  args: {
    size: 80,
    disableOuterCircle: false,
  },
  argTypes: {
    disableOuterCircle: {
      control: 'boolean',
    },
  },
  name: 'Big spinner',
  render: (props) => <ColorfulSpinner {...props} />,
};

export const ColorfulSpinnerButtonStory: StoryObj<
  { buttonVariant: ButtonComponentProps['variant'] } & Pick<ButtonComponentProps, 'disabled' | 'color'> &
    ColorfulSpinnerProps
> = {
  args: {
    disabled: true,
    buttonVariant: 'secondary',
    size: 80,
    color: 'primary',
  },
  argTypes: {
    color: {
      control: 'select',
      options: Object.keys(primaryColors),
    },
    disableOuterCircle: {
      control: 'boolean',
    },
    buttonVariant: {
      control: 'select',
      options: ButtonVariants,
    },
  },
  name: 'Spinner in button',
  render: (props) => (
    <Button variant={props.buttonVariant} disabled={props.disabled} color={props.color}>
      Loading
      <ColorfulSpinner size={props.size} disableOuterCircle={props.disableOuterCircle} />
    </Button>
  ),
};
