import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, Text, View } from 'react-native';
import AlertDialog from '../../src/ui/elements/overlay/AlertDialog';

const meta = {
  title: 'Elements/Overlay/AlertDialog',
  component: AlertDialog,
  argTypes: {
    visible: { control: 'boolean' },
  },
} satisfies Meta<typeof AlertDialog>;

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Basic: Story = {
  render: args => {
    const [modalVisible, setModalVisible] = React.useState<boolean>(args.visible);

    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Open Alert" onPress={toggleModal} />
        <AlertDialog
          visible={modalVisible}
          heading="Alert dialog heading"
          description="Alert dialog description"
          primaryText="Primary"
          secondaryText="Secondary"
          primaryAction={toggleModal}
          secondaryAction={toggleModal}
        />
      </View>
    );
  },
  args: {
    visible: false,
  },
};
