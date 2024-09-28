import React from 'react';
import {
  View,
  Text as RnText,
  TextProps as RnTextProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import {Theme} from '../../theme';

const fontWeightMap: Record<string, TextStyle['fontWeight']> = {
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
};

interface TextProps extends RnTextProps {
  variant?: keyof Theme['fontWeight'];
  size?: keyof Theme['fontSize'];
  lineHeight?: keyof Theme['lineHeight'];
  color?: keyof Theme['colors'];
  align?: 'left' | 'center' | 'right';
  spacing?: keyof Theme['margins'];
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'regular',
  size = 16,
  lineHeight = 0,
  color = 'primary',
  align = 'left',
  spacing = 'none',
  style,
  ...rest
}) => {
  const {theme} = useStyles();

  const textStyle: StyleProp<TextStyle> = {
    fontSize: theme.fontSize[size],
    fontWeight: fontWeightMap[variant] || '400',
    lineHeight: lineHeight ? theme.lineHeight[lineHeight] : undefined,
    color: theme.colors[color],
    textAlign: align,
    letterSpacing: theme.margins[spacing] || 0,
  };

  return (
    <View>
      <RnText style={[textStyle, style]} {...rest}>
        {children}
      </RnText>
    </View>
  );
};

export default Text;
