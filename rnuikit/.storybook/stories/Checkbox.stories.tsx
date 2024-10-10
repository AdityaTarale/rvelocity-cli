import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Checkbox from '../../src/ui/elements/forms/Checkbox';
import { decorators } from '../decorators';

const CheckboxMeta = {
  title: 'Elements/Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    value: {
      control: { type: 'boolean' },
    },
    onValueChange: {
      action: 'changed',
    },
    label: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    value: false,
    label: '',
  },
  decorators: decorators,
} satisfies Meta<typeof Checkbox>;

export default CheckboxMeta;

type CheckboxStory = StoryObj<typeof Checkbox>;

const CheckboxTemplate: CheckboxStory = {
  render: args => {
    const [isEnabled, setIsEnabled] = useState(args.value);

    const handleValueChange = (newValue: boolean) => {
      setIsEnabled(newValue);
      args.onValueChange?.(newValue);
    };

    return (
      <Checkbox
        label={args.label}
        description={args.description}
        value={isEnabled}
        onValueChange={handleValueChange}
      />
    );
  },
};

export const Default = {
  ...CheckboxTemplate,
};

export const Enabled: CheckboxStory = {
  ...CheckboxTemplate,
  args: {
    value: true,
  },
};

export const WithLabel: CheckboxStory = {
  ...CheckboxTemplate,
  args: {
    label: 'Check me',
  },
};

export const WithLabelDescription: CheckboxStory = {
  ...CheckboxTemplate,
  args: {
    label: 'Check me',
    description: 'This is a description',
  },
};
