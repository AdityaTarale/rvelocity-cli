import React, { type FC, useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient

import { type Theme } from '@/theme';

import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

type ShimmerProps = {
  width: keyof Theme['spacing'];
  height: keyof Theme['spacing'];
  borderRadius: keyof Theme['spacing'];
};

export const Shimmer: FC<ShimmerProps> = ({ width, height, borderRadius = 10 }) => {
  const { styles, theme } = useStyles(stylesheet);

  const shimmerValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(shimmerValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ).start();
  }, [shimmerValue]);

  const translateX = shimmerValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View
      style={[
        styles.container,
        {
          width: width,
          height: height,
          borderRadius: borderRadius,
        },
      ]}>
      <Animated.View
        style={[
          styles.shimmer,
          {
            width: width * 2, // Ensure the shimmer effect covers the entire container
            transform: [{ translateX }],
          },
        ]}>
        <LinearGradient
          colors={['transparent', theme.colors.secondary, 'transparent']} // Create a vertical gradient
          style={StyleSheet.absoluteFill}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        />
      </Animated.View>
    </View>
  );
};

export default Shimmer;
