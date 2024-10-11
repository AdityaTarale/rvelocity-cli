import { Theme } from '@/theme';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

type DividerProps = {
  variant?: 'line' | 'dotted' | 'dashed';
  height?: keyof Theme['spacing'];
  style: StyleProp<ViewStyle>;
};

const Divider: React.FC<DividerProps> = ({ variant = 'line', height = 1, style, ...rest }) => {
  const { styles } = useStyles(stylesheet);

  return <View style={[styles.container, styles[variant], { height: height }, style]} {...rest} />;
};

export default Divider;
