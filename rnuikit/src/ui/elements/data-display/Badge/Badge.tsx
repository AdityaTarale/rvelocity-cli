import { stringHelper } from '@/utils';
import { type Icon as IconType } from '@assets/constants/icons';
import React, { type FC, type PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';
import Icon from '../../media-icons/Icon';

interface BadgeProps extends PropsWithChildren {
  content: string;
  icon?: IconType;
  variant?: 'primary' | 'secondary';
  type?: 'outlined' | 'contained';
}

const Badge: FC<BadgeProps> = ({
  content,
  icon,
  children,
  variant = 'primary',
  type = 'contained',
}) => {
  const { styles } = useStyles(stylesheet);
  const { capitalFirstLetter } = stringHelper;
  const color = type === 'outlined' ? variant : 'white';

  const badgeStyle = [styles.badgeBase, styles[variant], type === 'outlined' && styles.outlined];

  return (
    <View style={styles.container}>
      <View style={badgeStyle}>
        <View style={styles.hStack}>
          {icon && <Icon icon={icon} variant="svg" color={color} size={6} />}
          <Text style={[styles.text, { color }]}>{capitalFirstLetter(content)}</Text>
        </View>
      </View>
      {children}
    </View>
  );
};

export default Badge;
