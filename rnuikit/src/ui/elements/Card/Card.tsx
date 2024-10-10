import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.ts';

type CardProps = {
  // Define props here
};

const Card: React.FC<CardProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Card Component</Text>
    </View>
  );
};

export default Card;
