import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.ts';

type SearchbarProps = {
  // Define props here
};

const Searchbar: React.FC<SearchbarProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Searchbar Component</Text>
    </View>
  );
};

export default Searchbar;
