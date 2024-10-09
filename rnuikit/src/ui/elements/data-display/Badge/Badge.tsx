import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.ts";

type BadgeProps = {
  // Define props here
};

const Badge: React.FC<BadgeProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Badge Component</Text>
    </View>
  );
};

export default Badge;
