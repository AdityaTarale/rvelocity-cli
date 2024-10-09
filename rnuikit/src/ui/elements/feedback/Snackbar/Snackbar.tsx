import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.ts';

type SnackbarProps = {
  // Define props here
};

const Snackbar: React.FC<SnackbarProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Snackbar Component</Text>
    </View>
  );
};

export default Snackbar;
