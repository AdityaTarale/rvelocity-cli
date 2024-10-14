import { getAnimation, type Animation as animationType } from '@assets/constants/animations';
import { getIcon, type Icon as IconType } from '@assets/constants/icons';
import { getImage, type Image as ImageType } from '@assets/constants/images';
import LottieView from 'lottie-react-native';
import React, { type FC, type ReactNode } from 'react';
import { Image, type ImageSourcePropType } from 'react-native';

import { useStyles } from 'react-native-unistyles';
import VectorIcon, { type VectorIconProps } from '../VectorIcon';

export interface IconProps extends Omit<VectorIconProps, 'name'> {
  icon: IconType | ImageType | animationType | string;
  variant: 'vector' | 'svg' | 'image' | 'animation';
  autoPlay?: boolean;
  loop?: boolean;
}

const Icon: FC<IconProps> = ({
  icon,
  variant,
  size = 7,
  color = 'primary',
  autoPlay = true,
  loop = false,
  ...rest
}) => {
  const { theme } = useStyles();

  const iconSize = theme.spacing[size as keyof typeof theme.spacing];
  const iconColor = theme.colors[color as keyof typeof theme.colors];

  const SvgComponent = getIcon(icon as IconType);
  const imageSource = getImage(icon as ImageType);
  const animatedIconSource = getAnimation(icon as animationType);

  const renderIcon = (): ReactNode => {
    switch (variant) {
      case 'vector':
        return <VectorIcon name={icon} size={size} {...rest} />;
      case 'svg':
        return <SvgComponent color={iconColor} fontSize={size} width={size} height={size} />;
      case 'image':
        return (
          <Image
            source={imageSource as ImageSourcePropType}
            resizeMode="contain"
            style={{ width: size, height: size }}
            {...rest}
          />
        );
      case 'animation':
        return (
          <LottieView
            source={animatedIconSource}
            style={{ width: iconSize, height: iconSize }}
            autoPlay={autoPlay}
            loop={loop}
            {...rest}
          />
        );
      default:
        return <Image source={imageSource as ImageSourcePropType} {...rest} />;
    }
  };

  return renderIcon();
};

export default Icon;

/**
 *  How to use
 *  <Icon variant="vector" icon="arrow-back" />
 *  <Icon variant="svg" icon="menu" />
 *  <Icon variant="image" icon="slider" />
 *  <Icon variant="animation" icon="slider" />
 *  */
