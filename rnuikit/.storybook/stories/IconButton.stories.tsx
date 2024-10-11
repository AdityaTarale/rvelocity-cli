import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { decorators } from '../decorators';
import IconMeta from './Icon.stories.tsx';
import IconButton from '../../src/ui/elements/media-icons/IconButton/IconButton.tsx';

const variants = ['contained', 'outlined', 'defaults'];

const IconButtonMeta: Meta<typeof IconButton> = {
  title: 'Elements/Media Icons/IconButton',
  component: IconButton,
  argTypes: {
    ...IconMeta.argTypes,
    iconStyle: {
      control: { type: 'radio' },
      options: variants,
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    ...IconMeta.args,
  },
  decorators: decorators,
};

export default IconButtonMeta;

type IconButtonStory = StoryObj<typeof IconButton>;

const IconButtonTemplate: IconButtonStory = {
  render: ({ ...args }) => {
    return <IconButton {...args} />;
  },
};

export const Image: StoryObj<typeof IconButton> = {
  ...IconButtonTemplate,
  args: {
    variant: 'image',
    icon: 'avatar',
  },
};

export const Vector: StoryObj<typeof IconButton> = {
  ...IconButtonTemplate,
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

export const Svg: StoryObj<typeof IconButton> = {
  ...IconButtonTemplate,
  args: {
    variant: 'svg',
    icon: 'menu',
  },
};
