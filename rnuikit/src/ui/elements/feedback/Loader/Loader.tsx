import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.ts';

type LoaderProps = {
  // Define props here
};

const Loader: React.FC<LoaderProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Loader Component</Text>
    </View>
  );
};

export default Loader;
