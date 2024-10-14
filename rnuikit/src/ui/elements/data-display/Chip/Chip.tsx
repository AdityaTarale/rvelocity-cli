import { stringHelper } from '@/utils';
import { type Icon as IconType } from '@assets/constants/icons';
import React, { type FC, type PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import Icon from '../../media-icons/Icon';
import stylesheet from './styles';
import Clickable from '../../Clickable';

interface BadgeProps extends PropsWithChildren {
  content: string;
  icon?: IconType;
  variant?: 'primary' | 'secondary';
  type?: 'outlined' | 'contained';
  onPress: () => void;
}

const Badge: FC<BadgeProps> = ({
  content,
  icon,
  onPress,
  variant = 'primary',
  type = 'contained',
}) => {
  const { styles } = useStyles(stylesheet);
  const { capitalFirstLetter } = stringHelper;
  const color = type === 'outlined' ? variant : 'white';

  const badgeStyle = [styles.container, styles[variant], type === 'outlined' && styles.outlined];

  return (
    <Clickable onPress={onPress}>
      <View style={badgeStyle}>
        <View style={styles.hStack}>
          {icon && <Icon icon="menu" variant="svg" color={color} size={16} />}
          <Text style={[styles.text, { color }]}>{capitalFirstLetter(content)}</Text>
        </View>
      </View>
    </Clickable>
  );
};

export default Badge;
