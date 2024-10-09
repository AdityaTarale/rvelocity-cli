import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.ts";

type ModalProps = {
  // Define props here
};

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Modal Component</Text>
    </View>
  );
};

export default Modal;
