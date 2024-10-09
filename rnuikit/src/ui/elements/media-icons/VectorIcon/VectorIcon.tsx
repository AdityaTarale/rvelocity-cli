import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.ts";

type VectorIconProps = {
  // Define props here
};

const VectorIcon: React.FC<VectorIconProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>VectorIcon Component</Text>
    </View>
  );
};

export default VectorIcon;
