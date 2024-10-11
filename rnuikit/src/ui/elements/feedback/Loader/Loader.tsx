import React from 'react';
import { type ActivityIndicatorProps, StyleSheet, View } from 'react-native';

import { useStyles } from 'react-native-unistyles';
import LottieElement from '../LottieElement';
import stylesheet from './styles';

type LoaderProps = ActivityIndicatorProps;

export const Loader: React.FC<LoaderProps> = ({ ...rest }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={[StyleSheet.absoluteFill, styles.container]} {...rest}>
      <LottieElement animation="mobileConnecting" description="Connecting you to the world..." />
    </View>
  );
};

export default Loader;
