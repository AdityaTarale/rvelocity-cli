import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.ts';

type IconProps = {
  // Define props here
};

const Icon: React.FC<IconProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Icon Component</Text>
    </View>
  );
};

export default Icon;
