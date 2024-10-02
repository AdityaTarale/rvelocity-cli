import NetInfo from '@react-native-community/netinfo';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, StatusBar, StyleSheet} from 'react-native';

export const NetworkStatusBar = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [statusMessage, setStatusMessage] = useState('No Internet Connection');

  const heightAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected!);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!isConnected) {
      setStatusMessage('No Internet Connection');

      Animated.sequence([
        Animated.timing(heightAnim, {
          toValue: 24,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.delay(100),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      Animated.timing(colorAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start();
    } else {
      setStatusMessage('Online');

      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();

      Animated.sequence([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.delay(1000),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(heightAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [isConnected, heightAnim, opacityAnim, colorAnim]);

  const barColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#b71c1c', '#4caf50'],
  });

  return (
    <>
      <StatusBar
        barStyle={isConnected ? 'dark-content' : 'light-content'}
        backgroundColor={isConnected ? '#fff' : '#b71c1c'}
      />
      <Animated.View
        style={[
          styles.offlineContainer,
          {height: heightAnim, backgroundColor: barColor},
        ]}>
        <Animated.Text style={[styles.offlineText, {opacity: opacityAnim}]}>
          {statusMessage}
        </Animated.Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  offlineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: 1,
  },
  offlineText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default NetworkStatusBar;
