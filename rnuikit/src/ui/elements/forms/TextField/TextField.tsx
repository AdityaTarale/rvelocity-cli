import { Theme } from '@/theme';
import React, { type FC, type PropsWithChildren, type ReactElement, type ReactNode } from 'react';
import { TextInput as RNTextInput, View, type TextInputProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

type InputVariantType = 'default' | 'outlined' | 'underlined';
type InputSizeType = 'md' | 'sm' | 'lg';

type InputProps = {
  variant: InputVariantType;
  size: InputSizeType;
  color?: keyof Theme['colors'];
} & PropsWithChildren &
  TextInputProps & {
    left?: () => ReactNode;
    right?: () => ReactNode;
  };

const TextField: FC<InputProps> = ({
  left,
  right,
  variant = 'default',
  size = 'md',
  placeholder = 'Placeholder',
  color = 'secondary',
  ...rest
}): ReactElement => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={[styles.default, styles[variant], styles[size]]}>
      {left ? <View>{left()}</View> : null}
      <RNTextInput
        {...rest}
        placeholder={placeholder}
        placeholderTextColor={theme.colors[color]}
        style={{ flex: 1 }}
      />
      {right ? <View>{right()}</View> : null}
    </View>
  );
};

export default TextField;
