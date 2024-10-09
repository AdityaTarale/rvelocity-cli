import React from "react";
import { View, Text } from "react-native";
import styles from "./styles.ts";

type OtpFieldProps = {
  // Define props here
};

const OtpField: React.FC<OtpFieldProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>OtpField Component</Text>
    </View>
  );
};

export default OtpField;
