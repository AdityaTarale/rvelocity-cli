import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

import menu from '../icons/menu.svg';

export const icons = {
  menu,
};

export type Icon = keyof typeof icons;

export const getIcon = (iconKey: Icon): FC<SvgProps> => {
  return icons[iconKey];
};
