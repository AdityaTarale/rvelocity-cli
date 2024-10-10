import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Avatar from '../../src/ui/elements/media-icons/Avatar';
import { decorators } from '../decorators';

const meta: Meta<typeof Avatar> = {
  title: 'Elements/Data Display/Avatar',
  component: Avatar,
  argTypes: {
    bg: {
      control: 'color',
      description: 'Background color of the Avatar',
      defaultValue: 'blue',
    },
    size: {
      control: 'number',
      description: 'Size of the Avatar',
      defaultValue: 50,
    },
  },
  args: {},
  decorators: decorators,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  render: () => (
    <Avatar>
      <Avatar.Image source={{ uri: 'https://example.com/image1.jpg' }} />
      <Avatar.Fallback>John Doe</Avatar.Fallback>
    </Avatar>
  ),
};

export const Group: Story = {
  render: () => (
    <Avatar.Group max={2}>
      <Avatar>
        <Avatar.Image source={{ uri: 'https://example.com/image1.jpg' }} />
        <Avatar.Fallback>John Doe</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image source={{ uri: 'https://example.com/image2.jpg' }} />
        <Avatar.Fallback>Jane Smith</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image source={{ uri: 'https://example.com/image3.jpg' }} />
        <Avatar.Fallback>Jim Brown</Avatar.Fallback>
      </Avatar>
    </Avatar.Group>
  ),
};

export const WithBackgroundColor: Story = {
  render: () => (
    <Avatar bg="danger">
      <Avatar.Image source={{ uri: 'https://example.com/image1.jpg' }} />
      <Avatar.Fallback>Jill Doe</Avatar.Fallback>
    </Avatar>
  ),
};

export const CustomSize: Story = {
  render: () => (
    <Avatar size={100}>
      <Avatar.Image source={{ uri: 'https://example.com/image1.jpg' }} />
      <Avatar.Fallback>Chris Adams</Avatar.Fallback>
    </Avatar>
  ),
};
