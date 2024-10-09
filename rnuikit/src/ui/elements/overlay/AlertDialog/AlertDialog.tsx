import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.ts";

type AlertDialogProps = {
  // Define props here
};

const AlertDialog: React.FC<AlertDialogProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>AlertDialog Component</Text>
    </View>
  );
};

export default AlertDialog;
