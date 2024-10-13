import { Theme } from '@/theme';
import React, { type FC, type ReactElement } from 'react';
import { useStyles } from 'react-native-unistyles';

import { getVectorIcon, type IconKeys } from '@/utils';

export interface VectorIconProps {
  type?: IconKeys;
  name: string;
  size?: keyof Theme['spacing'];
  color?: keyof Theme['colors'];
}

const VectorIcon: FC<VectorIconProps> = ({
  type = 'material',
  size = 6,
  ...rest
}): ReactElement => {
  const { theme } = useStyles();

  const FontIcon = getVectorIcon(type);
  return <FontIcon {...rest} size={theme.spacing[size]} />;
};

export default VectorIcon;
