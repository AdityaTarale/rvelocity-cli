import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Shimmer from '../../src/ui/elements/feedback/Shimmer';

import { decorators } from '../decorators';

const options = [
  0, 1, 2, 4, 6, 7, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 40, 42, 48, 50, 52, 56, 64, 68, 70,
  72, 80, 88, 96, 156,
];

const ShimmerMeta = {
  title: 'Elements/Feedback/Shimmer',
  component: Shimmer,
  argTypes: {
    width: {
      control: 'select',
      options,
    },
    height: { control: 'select', options },
    borderRadius: { control: 'select', options },
  },
  args: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  decorators: decorators,
} satisfies Meta<typeof Shimmer>;

export default ShimmerMeta;
type ShimmerStory = StoryObj<typeof Shimmer>;

const ShimmerTemplate: ShimmerStory = {
  render: ({ ...args }) => {
    return <Shimmer {...args} />;
  },
};

export const Default: ShimmerStory = {
  ...ShimmerTemplate,
};
