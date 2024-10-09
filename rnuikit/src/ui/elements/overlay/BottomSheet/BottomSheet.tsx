import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.ts";

type BottomSheetProps = {
  // Define props here
};

const BottomSheet: React.FC<BottomSheetProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>BottomSheet Component</Text>
    </View>
  );
};

export default BottomSheet;
