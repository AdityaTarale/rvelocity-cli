import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, Text, View } from 'react-native';
import Modal from '../../src/ui/elements/overlay/Modal';

const meta = {
  title: 'Elements/Overlay/Modal',
  component: Modal,
  argTypes: {
    visible: { control: 'boolean' },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: args => {
    const [modalVisible, setModalVisible] = React.useState<boolean>(args.visible);

    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Open Modal" onPress={toggleModal} />
        <Modal visible={modalVisible} onRequestClose={toggleModal}>
          <Modal.Container>
            <Modal.Header title="This is a Modal Header" />
            <Modal.Body>
              <Text>This is the body content of the modal.</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button title="Footer of the Modal" onPress={toggleModal} />
            </Modal.Footer>
          </Modal.Container>
        </Modal>
      </View>
    );
  },
  args: {
    visible: false,
  },
};
