import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Switch from '../../src/ui/elements/forms/Switch';
import { decorators } from '../decorators';

const meta = {
  title: 'Elements/Forms/Switch',
  component: Switch,
  argTypes: {
    value: {
      control: { type: 'boolean' },
    },
    onValueChange: {
      action: 'changed',
    },
  },
  args: {
    value: false,
  },
  decorators: decorators,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

const SwitchTemplate: Story = {
  render: args => {
    const [isEnabled, setIsEnabled] = useState(args.value);

    const handleValueChange = (newValue: boolean) => {
      setIsEnabled(newValue);
      args.onValueChange?.(newValue);
    };

    return <Switch value={isEnabled} onValueChange={handleValueChange} />;
  },
};

export const Default = {
  ...SwitchTemplate,
};

export const Enabled: Story = {
  ...SwitchTemplate,
  args: {
    value: true,
  },
};
