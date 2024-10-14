import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Chip from '../../src/ui/elements/data-display/Chip/Chip.tsx';
import { decorators } from '../decorators.tsx';

const meta = {
  title: 'Elements/Data Display/Chip',
  component: Chip,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    type: {
      control: 'select',
      options: ['contained', 'outlined'],
    },
    icon: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
  },
  args: {
    content: 'Chip Text',
    variant: 'primary',
    type: 'contained',
  },
  decorators: decorators,
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  render: args => <Chip {...args} />,
};

export const WithIcon: Story = {
  render: args => <Chip {...args} icon="home" />,
  args: {
    icon: 'menu',
    content: 'With Icon',
    type: 'contained',
  },
};
