import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.ts";

type CheckboxProps = {
  // Define props here
};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Checkbox Component</Text>
    </View>
  );
};

export default Checkbox;
