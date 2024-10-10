import { Theme } from '@/theme';
import React from 'react';
import { StatusBar as RNStatusBar, type StatusBarProps as RNStatusBarProps } from 'react-native';

interface StatusBarProps extends Omit<RNStatusBarProps, 'backgroundColor'> {
  backgroundColor?: keyof Theme['colors'];
}

const StatusBar: React.FC<StatusBarProps> = props => {
  return <RNStatusBar {...props} />;
};

export default StatusBar;
