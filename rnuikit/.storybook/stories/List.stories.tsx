import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import List from '../../src/ui/elements/data-display/List';
import IconButton from '../../src/ui/elements/media-icons/IconButton';

const meta: Meta<typeof List> = {
  title: 'Elements/Data display/List',
  component: List,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof List>;

export const DefaultList: Story = {
  render: () => (
    <List>
      <List.Accordion
        left={() => (
          <IconButton variant="svg" icon="menu" color="primary" iconStyle="contained" size={7} />
        )}
        title="Accordion 1"
        subTitle="This is an accordion subtitle">
        <List.Item
          title="List Item 1"
          description="This is a description for item 1"
          left={() => (
            <IconButton variant="svg" icon="menu" color="primary" iconStyle="contained" size={7} />
          )}
          right={() => (
            <IconButton variant="svg" icon="menu" color="primary" iconStyle="contained" size={7} />
          )}
        />
        <List.Item
          title="List Item 2"
          description="This is a description for item 2"
          left={() => (
            <IconButton
              variant="svg"
              icon="settings"
              color="primary"
              iconStyle="contained"
              size={7}
            />
          )}
          right={() => (
            <IconButton variant="svg" icon="menu" color="primary" iconStyle="contained" size={7} />
          )}
          divider={true}
        />
      </List.Accordion>
      <List.Accordion
        left={() => (
          <IconButton
            variant="svg"
            icon="settings"
            color="primary"
            iconStyle="contained"
            size={7}
          />
        )}
        title="Accordion 2"
        subTitle="This is another accordion subtitle">
        <List.Item
          title="List Item 3"
          description="This is a description for item 3"
          left={() => (
            <IconButton variant="svg" icon="menu" color="primary" iconStyle="contained" size={7} />
          )}
          right={() => (
            <IconButton variant="svg" icon="menu" color="primary" iconStyle="contained" size={7} />
          )}
          divider={true}
        />
      </List.Accordion>
    </List>
  ),
};

export const WithSubHeader: Story = {
  render: () => (
    <List>
      <List.SubHeader title="List SubHeader" />
      <List.Item
        title="List Item 1"
        description="This is a description for item 1"
        left={() => (
          <IconButton variant="svg" icon="menu" color="primary" iconStyle="contained" size={7} />
        )}
        right={() => (
          <IconButton variant="svg" icon="menu" color="primary" iconStyle="contained" size={7} />
        )}
        divider={true}
      />
    </List>
  ),
};
