import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.ts";

type ButtonProps = {
  // Define props here
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Button Component</Text>
    </View>
  );
};

export default Button;
