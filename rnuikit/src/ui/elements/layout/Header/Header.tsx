import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.ts";

type HeaderProps = {
  // Define props here
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Header Component</Text>
    </View>
  );
};

export default Header;
