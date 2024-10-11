import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Card from '../../src/ui/elements/Card/Card';
import { decorators } from '../decorators';

const meta = {
  title: 'Elements/Card',
  component: Card,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'elevated'],
    },
    align: {
      control: { type: 'radio' },
      options: ['center', 'left', 'right'],
    },
  },
  args: {},
  decorators: decorators,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

const CardTemplate: Story = {
  render: args => (
    <Card {...args}>
      <Card.Image
        source={{
          uri: 'https://i.ibb.co.com/p1hKNM6/stockvault-fast-internet-means-high-speed-and-accelerated224565.jpg',
        }}
      />
      <Card.Header title="Card Header" />
      <Card.Content content="Card Content" />
      <Card.Footer action="Action" />
    </Card>
  ),
};

export const Outlined: Story = {
  ...CardTemplate,
  args: {
    type: 'outlined',
    align: 'left',
  },
};

export const Contained: Story = {
  ...CardTemplate,
  args: {
    type: 'contained',
    align: 'left',
  },
};

export const Elevated: Story = {
  ...CardTemplate,
  args: {
    type: 'elevated',
    align: 'left',
  },
};
