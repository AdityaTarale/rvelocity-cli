import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Divider from '../../src/ui/elements/layout/Divider';
import { decorators } from '../decorators';

const meta = {
  title: 'Elements/Layout/Divider',
  component: Divider,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['line', 'dotted', 'dashed'] },
    height: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'line',
    height: 1,
  },
  decorators: decorators,
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof Divider>;

const DividerTemplate: Story = {
  render: args => {
    return <Divider variant={args.variant} height={args.height} />;
  },
};

export const Default = {
  ...DividerTemplate,
};
