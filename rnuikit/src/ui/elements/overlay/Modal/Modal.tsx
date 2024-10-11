import React, { type PropsWithChildren, type ReactElement } from 'react';
import { Modal as RNModal, Text, View, type ModalBaseProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

interface ModalProps extends ModalBaseProps, PropsWithChildren {
  visible: boolean;
}

const Modal = ({ children, visible = false, ...rest }: ModalProps): ReactElement => {
  const { styles } = useStyles(stylesheet);

  return (
    <RNModal visible={visible} transparent={true} {...rest}>
      <View style={styles.modalOverlay}>{children}</View>
    </RNModal>
  );
};

// Modal Container
const ModalContainer = ({ children }: PropsWithChildren) => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.modalContainer}>{children}</View>;
};

type ModalHeaderProps = {
  title: string;
};

// Modal Header
const ModalHeader = ({ title }: ModalHeaderProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.modalHeader}>
      <Text style={styles.modalTitle}>{title}</Text>
    </View>
  );
};

// Modal Body
const ModalBody = ({ children }: PropsWithChildren) => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.modalBody}>{children}</View>;
};

// Modal Footer
const ModalFooter = ({ children }: PropsWithChildren) => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.modalFooter}>{children}</View>;
};

// Assign sub components to the main Modal component
Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
