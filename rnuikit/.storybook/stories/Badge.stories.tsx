import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Badge from '../../src/ui/elements/data-display/Badge/Badge.tsx';
import { decorators } from '../decorators';

const meta = {
  title: 'Elements/Data Display/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    type: {
      control: 'select',
      options: ['outlined', 'contained'],
    },
    icon: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
  },
  args: {
    content: 'Badge Text',
    variant: 'primary',
    type: 'contained',
  },
  decorators: decorators,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const DefaultBadge: Story = {
  render: args => <Badge {...args} />,
};

export const WithIcon: Story = {
  render: args => <Badge {...args} icon="home" />,
  args: {
    content: 'With Icon',
    type: 'contained',
  },
};

export const OutlinedBadge: Story = {
  render: args => <Badge {...args} />,
  args: {
    content: 'Outlined Badge',
    type: 'outlined',
    placement: 'topRight',
  },
};
