import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.ts';

type StatusBarProps = {
  // Define props here
};

const StatusBar: React.FC<StatusBarProps> = props => {
  return (
    <View style={styles.container}>
      <Text>StatusBar Component</Text>
    </View>
  );
};

export default StatusBar;
