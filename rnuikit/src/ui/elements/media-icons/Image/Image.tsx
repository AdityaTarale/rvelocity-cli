import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.ts";

type ImageProps = {
  // Define props here
};

const Image: React.FC<ImageProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Image Component</Text>
    </View>
  );
};

export default Image;
