import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.ts";

type ListProps = {
  // Define props here
};

const List: React.FC<ListProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>List Component</Text>
    </View>
  );
};

export default List;
