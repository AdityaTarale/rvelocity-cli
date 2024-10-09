import {View} from 'react-native';
import React from 'react';

export const decorators = [
  Story => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Story />
    </View>
  ),
];
