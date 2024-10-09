import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.ts';

type AccordionProps = {
  // Define props here
};

const Accordion: React.FC<AccordionProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Accordion Component</Text>
    </View>
  );
};

export default Accordion;
