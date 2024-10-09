import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.ts';

type ScreenProps = {
  // Define props here
};

const Screen: React.FC<ScreenProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Screen Component</Text>
    </View>
  );
};

export default Screen;
