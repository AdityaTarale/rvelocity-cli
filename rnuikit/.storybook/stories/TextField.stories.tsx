import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TextField from '../../src/ui/elements/forms/TextField';

import { decorators } from '../decorators';

const TextFieldMeta = {
  title: 'Elements/Forms/Text Field',
  component: TextField,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'outlined', 'underlined'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    placeholder: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'warning'],
    },
    onChange: { action: 'change' },
    onBlur: { action: 'blur' },
  },
  args: {
    variant: 'default',
    size: 'md',
    color: 'secondary',
    placeholder: 'Placeholder',
  },
  decorators: decorators,
} satisfies Meta<typeof TextField>;

export default TextFieldMeta;
type TextFieldStory = StoryObj<typeof TextField>;

const TextFieldTemplate: TextFieldStory = {
  render: ({ ...args }) => {
    return <TextField {...args}>{args.children}</TextField>;
  },
};

export const Default: TextFieldStory = {
  ...TextFieldTemplate,
};
