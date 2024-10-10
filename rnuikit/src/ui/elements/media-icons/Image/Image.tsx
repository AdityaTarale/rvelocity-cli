import { getImage, type Image as ImageType } from '@assets/constants/images';
import React, { type FC, type ReactElement } from 'react';
import {
  type ImageSourcePropType,
  Image as RNImage,
  type ImageProps as RNImageProps,
} from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { IconProps } from '../Icon/Icon';
import stylesheet from './styles';

export type ImageProps = Omit<RNImageProps, 'source'> &
  Omit<IconProps, 'variant' | 'icon'> & {
    image: ImageType | string;
    remote?: boolean;
  };

export const Image: FC<ImageProps> = ({ image, remote = false, ...rest }): ReactElement => {
  const { styles } = useStyles(stylesheet);

  return (
    <RNImage
      source={remote ? { uri: image } : (getImage(image as ImageType) as ImageSourcePropType)}
      resizeMode="cover"
      style={styles.image}
      {...rest}
    />
  );
};

export default Image;
