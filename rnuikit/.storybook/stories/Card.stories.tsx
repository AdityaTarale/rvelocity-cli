import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Card from '../../src/ui/elements/Card/Card';
import { decorators } from '../decorators';
import { Text } from 'react-native';

const meta = {
  title: 'Elements/Card',
  component: Card,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'elevated', 'transparent'],
    },
  },
  args: {
    variant: 'contained',
  },
  decorators: decorators,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

const CardTemplate: Story = {
  render: args => (
    <Card {...args}>
      <Card.Title title="Card Header" />
      <Card.Content>
        <Text>Card Content</Text>
      </Card.Content>
      <Card.Actions>
        <Text>Card Actions</Text>
      </Card.Actions>
    </Card>
  ),
};

export const Outlined: Story = {
  ...CardTemplate,
  args: {
    variant: 'outlined',
  },
};

export const Contained: Story = {
  ...CardTemplate,
  args: {
    variant: 'contained',
  },
};

export const Elevated: Story = {
  ...CardTemplate,
  args: {
    variant: 'elevated',
  },
};
