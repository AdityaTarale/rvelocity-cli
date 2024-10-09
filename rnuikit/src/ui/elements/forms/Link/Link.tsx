import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.ts';

type LinkProps = {
  // Define props here
};

const Link: React.FC<LinkProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Link Component</Text>
    </View>
  );
};

export default Link;
