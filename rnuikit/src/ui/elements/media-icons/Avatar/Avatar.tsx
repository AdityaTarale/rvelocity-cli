import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.ts';

type AvatarProps = {
  // Define props here
};

const Avatar: React.FC<AvatarProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Avatar Component</Text>
    </View>
  );
};

export default Avatar;
