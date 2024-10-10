import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.ts';

type DividerProps = {
  // Define props here
};

const Divider: React.FC<DividerProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Divider Component</Text>
    </View>
  );
};

export default Divider;
