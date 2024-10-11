import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Text from '../../src/ui/elements/Text';
import { decorators } from '../decorators';

const variants = [
  'displayLarge',
  'displayMedium',
  'displaySmall',
  'headlineLarge',
  'headlineMedium',
  'headlineSmall',
  'titleLarge',
  'titleMedium',
  'titleSmall',
  'bodyLarge',
  'bodyMedium',
  'bodySmall',
  'labelLarge',
  'labelLargeProminent',
  'labelMedium',
  'labelMediumProminent',
  'labelSmall',
];

const meta = {
  title: 'Elements/ Text',
  component: Text,
  argTypes: {},
  args: {},
  decorators: decorators,
  parameters: {
    notes: `
     # Here I can add some markdown
     
     Put a full new line between each element.
    `,
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

const TextTemplate: Story = {
  render: ({ children, ...args }) => {
    return (
      <>
        {variants.map((item: string, index: number) => {
          return (
            <Text key={index} variant={item} {...args}>
              {children || item}
            </Text>
          );
        })}
      </>
    );
  },
};

export const Default = {
  ...TextTemplate,
};

Default.args = {
  children: '',
};
