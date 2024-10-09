import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.ts";

type RadioProps = {
  // Define props here
};

const Radio: React.FC<RadioProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Radio Component</Text>
    </View>
  );
};

export default Radio;
