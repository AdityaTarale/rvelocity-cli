import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.ts';

type IconButtonProps = {
  // Define props here
};

const IconButton: React.FC<IconButtonProps> = props => {
  return (
    <View style={styles.container}>
      <Text>IconButton Component</Text>
    </View>
  );
};

export default IconButton;
