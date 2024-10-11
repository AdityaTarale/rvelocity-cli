import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Avatar from '../../src/ui/elements/media-icons/Avatar';
import { decorators } from '../decorators';
import { getImage } from '../../assets/constants/images';
import { ImageSource } from 'react-native-vector-icons/Icon';

const meta: Meta<typeof Avatar> = {
  title: 'Elements/Data Display/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
  args: {
    variant: 'md',
  },
  decorators: decorators,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  render: args => (
    <Avatar variant={args.variant}>
      <Avatar.Image source={getImage('avatar') as ImageSource} />
      <Avatar.Fallback>John Doe</Avatar.Fallback>
    </Avatar>
  ),
};

export const Group: Story = {
  render: () => (
    <Avatar.Group max={2} variant="md">
      <Avatar>
        <Avatar.Image source={getImage('avatar') as ImageSource} />
        <Avatar.Fallback>John Doe</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image source={getImage('avatar') as ImageSource} />
        <Avatar.Fallback>Jane Smith</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image source={getImage('avatar') as ImageSource} />
        <Avatar.Fallback>Jim Brown</Avatar.Fallback>
      </Avatar>
    </Avatar.Group>
  ),
};
