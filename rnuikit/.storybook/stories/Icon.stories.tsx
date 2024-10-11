import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Icon from '../../src/ui/elements/media-icons/Icon';

import { decorators } from '../decorators';
const options = [
  0, 1, 2, 4, 6, 7, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 42, 48, 50, 52, 56, 64, 68, 70,
  72, 80, 88, 96, 156,
];

const IconMeta = {
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

export default IconMeta;

type IconStory = StoryObj<typeof Icon>;

const IconTemplate: IconStory = {
  render: ({ ...args }) => {
    return <Icon {...args} />;
  },
};

export const Image: StoryObj<typeof Icon> = {
  ...IconTemplate,
  args: {
    variant: 'image',
    icon: 'avatar',
  },
};

export const Vector: StoryObj<typeof Icon> = {
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
    icon: 'arrowleft',
    type: 'ant',
  },
};

export const Svg: StoryObj<typeof Icon> = {
  ...IconTemplate,
  args: {
    variant: 'svg',
    icon: 'menu',
  },
};

export const Animation: StoryObj<typeof Icon> = {
  ...IconTemplate,
  args: {
    variant: 'image',
    icon: 'avatar',
  },
};
