import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

// import icon from '../icons/icon.svg';

export const icons = {
  //   icon,
};

export type Icon = keyof typeof icons;

export const getIcon = (iconKey: Icon): FC<SvgProps> => {
  return icons[iconKey];
};
