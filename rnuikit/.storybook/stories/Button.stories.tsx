import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from '../../src/ui/elements/forms/Button';
import { decorators } from '../decorators';

const meta = {
  title: 'Elements/Forms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
    type: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'text'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button when true',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading spinner when true',
      defaultValue: false,
    },
    onPress: { action: 'pressed', description: 'Triggered when the button is pressed' },
  },
  args: {},
  decorators: decorators,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

const ButtonTemplate: Story = {
  render: ({ children, ...args }) => (
    <Button {...args}>
      <Button.Text title="Button" />
    </Button>
  ),
};

export const PrimaryContained: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'primary',
    type: 'contained',
    size: 'md',
    disabled: false,
    loading: false,
  },
};

export const SecondaryOutlined: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'secondary',
    type: 'outlined',
    size: 'lg',
    disabled: false,
    loading: false,
  },
};

export const Text: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'primary',
    type: 'text',
    size: 'lg',
    disabled: false,
    loading: false,
  },
};
