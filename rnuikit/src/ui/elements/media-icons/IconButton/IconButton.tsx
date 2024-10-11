import React, { type FC, type ReactElement } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import Clickable from '../../Clickable';
import Icon, { type IconProps } from '../Icon';
import stylesheet from './styles';

export type IconButtonProps = IconProps & {
  onPress?: () => void;
  disabled?: boolean;
  iconStyle?: 'outlined' | 'contained';
  padding?: number;
};

const IconButton: FC<IconButtonProps> = ({
  icon,
  onPress = null,
  variant = 'image',
  size = 7,
  color,
  iconStyle = 'image',
  disabled = false,
  padding,
  ...rest
}): ReactElement => {
  const { styles, theme } = useStyles(stylesheet);

  const render = (): ReactElement => {
    const containerStyles = [
      styles.container,
      {
        padding: padding || 10,
        backgroundColor: iconStyle === 'contained' ? theme.colors.secondary : 'transparent',
        opacity: disabled ? 0.3 : 1,
        borderColor: iconStyle === 'outlined' ? color : 'transparent',
        borderWidth: iconStyle === 'outlined' ? 1 : 0,
      },
    ];

    return (
      <View style={containerStyles}>
        <Icon icon={icon} variant={variant} size={size} color={color} {...rest} />
      </View>
    );
  };

  if (onPress !== null) {
    return (
      <Clickable onPress={onPress} disabled={disabled}>
        {render()}
      </Clickable>
    );
  }

  return render();
};

export default IconButton;
