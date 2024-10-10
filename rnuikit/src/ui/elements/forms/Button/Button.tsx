import React, { createContext, ReactElement, useContext, useMemo } from 'react';
import { ActivityIndicator, Text, TouchableOpacityProps, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import Clickable from '../../Clickable';
import { IconProps } from '../../media-icons/Icon';
import stylesheet from './styles';

const ButtonTypes = {
  contained: 'Contained',
  outlined: 'Outlined',
  text: 'Text',
};

type ButtonProps = TouchableOpacityProps & {
  type: keyof typeof ButtonTypes;
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  loading?: boolean;
};

type ButtonTextProps = {
  title: string;
};

type ButtonIconProps = IconProps;

type ButtonContextType = {
  type: keyof typeof ButtonTypes;
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  disabled: boolean;
};

const ButtonContext = createContext<ButtonContextType>({
  variant: 'primary',
  type: 'contained',
  size: 'md',
  disabled: false,
});

const { Provider } = ButtonContext;

const ButtonText = ({ title }: ButtonTextProps): ReactElement => {
  const { styles } = useStyles(stylesheet);
  const { variant, type, disabled, size } = useContext<ButtonContextType>(ButtonContext);

  const textVariant = (variant + ButtonTypes[type]) as keyof typeof styles;
  const textSize = (size + 'Text') as keyof typeof styles;
  return (
    <Text style={[styles[disabled ? 'disabledText' : textVariant], styles[textSize]]}>{title}</Text>
  );
};

const ButtonIcon = ({}: ButtonIconProps): ReactElement => {
  return (
    <View>
      <Text>Button Icon</Text>
    </View>
  );
};

const Button = ({
  children,
  onPress,
  variant,
  type,
  size,
  disabled = false,
  loading = false,
  ...rest
}: ButtonProps): ReactElement => {
  const { styles } = useStyles(stylesheet);

  const memorizedValue = useMemo(
    () => ({
      variant,
      type,
      disabled,
      size,
    }),
    [variant, type, disabled, size],
  );

  return (
    <Provider value={memorizedValue}>
      <Clickable
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.flex,
          styles[variant],
          styles[type],
          styles[size],
          { ...(disabled && styles[`${type}Disabled`]) },
          rest.style,
        ]}>
        {/* Use custom activity indictor which can adopt styling of button variant */}
        {loading ? <ActivityIndicator /> : children}
      </Clickable>
    </Provider>
  );
};

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export default Button;
