import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.ts';

type ImageBannerProps = {
  // Define props here
};

const ImageBanner: React.FC<ImageBannerProps> = props => {
  return (
    <View style={styles.container}>
      <Text>ImageBanner Component</Text>
    </View>
  );
};

export default ImageBanner;
