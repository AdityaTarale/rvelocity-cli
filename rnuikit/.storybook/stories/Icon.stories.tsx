import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Icon from '../../src/ui/elements/media-icons/Icon';

import { decorators } from '../decorators';
const options = [
  0, 1, 2, 4, 6, 7, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 42, 48, 50, 52, 56, 64, 68, 70,
  72, 80, 88, 96, 156,
];

const meta = {
  title: 'Elements/Media Icons/Icon',
  component: Icon,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['vector', 'image', 'svg'],
    },
    icon: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'select' },
      options,
    },
  },
  args: {
    color: 'primary',
    size: 24,
  },
  decorators: decorators,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const IconTemplate: Story = {
  render: ({ ...args }) => {
    return <Icon {...args} />;
  },
};

export const Image: Story = {
  ...IconTemplate,
  args: {
    variant: 'image',
    icon: 'avatar',
  },
};

export const Vector: Story = {
  ...IconTemplate,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'ant',
        'entypo',
        'evil',
        'fa',
        'fa5',
        'feather',
        'fontisto',
        'foundation',
        'ionicon',
        'material',
        'materialCommunity',
        'octicon',
        'simpleLine',
        'zocial',
      ],
    },
  },
  args: {
    variant: 'vector',
    icon: 'apps',
    type: 'material',
  },
};

export const Svg: Story = {
  ...IconTemplate,
  args: {
    variant: 'svg',
    icon: 'menu',
  },
};

export const Animation: Story = {
  ...IconTemplate,
  args: {
    variant: 'image',
    icon: 'avatar',
  },
};
