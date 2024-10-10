import { View } from 'react-native';
import React from 'react';

export const decorators = [
  Story => (
    <View
      style={{
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Story />
    </View>
  ),
];
