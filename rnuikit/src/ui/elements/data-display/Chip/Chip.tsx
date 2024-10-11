import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.ts';

type ChipProps = {
  // Define props here
};

const Chip: React.FC<ChipProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Chip Component</Text>
    </View>
  );
};

export default Chip;
