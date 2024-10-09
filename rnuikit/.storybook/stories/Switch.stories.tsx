import type {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';
import Switch from '../../src/ui/elements/forms/Switch';
import {decorators} from '../decorators';

const SwitchMeta: Meta<typeof Switch> = {
  title: 'Elements/Forms/Switch',
  component: Switch,
  argTypes: {
    value: {
      control: {type: 'boolean'},
    },
    onValueChange: {
      action: 'changed',
    },
  },
  args: {
    value: false,
  },
  decorators: decorators,
};

export default SwitchMeta;

type SwitchStory = StoryObj<typeof Switch>;

const SwitchTemplate: SwitchStory = {
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

export const Enabled: SwitchStory = {
  ...SwitchTemplate,
  args: {
    value: true,
  },
};
