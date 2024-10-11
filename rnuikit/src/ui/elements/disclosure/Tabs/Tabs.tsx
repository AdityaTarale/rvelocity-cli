import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.ts';

type TabsProps = {
  // Define props here
};

const Tabs: React.FC<TabsProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Tabs Component</Text>
    </View>
  );
};

export default Tabs;
