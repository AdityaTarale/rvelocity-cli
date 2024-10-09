import {Theme} from '@/theme';
import React from 'react';
import {Text as RnText, TextProps as RnTextProps, StyleProp, TextStyle, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

interface TextProps extends RnTextProps {
  variant?: keyof Theme['typeFaces'];
  color?: keyof Theme['colors'];
  align?: 'left' | 'center' | 'right';
  spacing?: keyof Theme['spacing'];
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'bodyMedium',
  color = 'textPrimary',
  align = 'left',
  spacing = 'none',
  style,
  ...rest
}) => {
  const {theme} = useStyles();

  const textStyle: StyleProp<TextStyle> = {
    color: theme.colors[color],
    textAlign: align,
    letterSpacing: theme.spacing['0'] || 0,
  };

  return (
    <View>
      <RnText
        style={[theme.typeFaces[variant] as StyleProp<TextStyle>, textStyle, style]}
        {...rest}>
        {children}
      </RnText>
    </View>
  );
};

export default Text;

/**
 * Usage
 * <Text variant="displayLarge">Display Large</Text>
 * <Text variant="displayMedium">Display Medium</Text>
 * <Text variant="displaySmall">Display Small</Text>
 * <Text variant="headlineLarge">Headline Large</Text>
 * <Text variant="headlineMedium">Headline Medium</Text>
 * <Text variant="headlineSmall">Headline Small</Text>
 * <Text variant="titleLarge">Title Large</Text>
 * <Text variant="titleMedium">Title Medium</Text>
 * <Text variant="titleSmall">Title Small</Text>
 * <Text variant="bodyLarge">Body Large</Text>
 * <Text variant="bodyMedium">Body Medium</Text>
 * <Text variant="bodySmall">Body Small</Text>
 * <Text variant="labelLarge">Label Large</Text>
 * <Text variant="labelLargeProminent">Label Large Prominent</Text>
 * <Text variant="labelMedium">Label Medium</Text>
 * <Text variant="labelMediumProminent">Label Medium Prominent</Text>
 * <Text variant="labelSmall">Label Small</Text>
 */
