import { type Animation, getAnimation } from '@assets/constants/animations';
import LottieView from 'lottie-react-native';
import React from 'react';
import { type StyleProp, View, type ViewStyle } from 'react-native';

import { useStyles } from 'react-native-unistyles';
import Text from '../../Text';
import stylesheet from './styles';

interface LottieElementProps {
  animation: Animation;
  title?: string;
  description?: string;
  style?: StyleProp<ViewStyle>;
  autoPlay?: boolean;
  loop?: boolean;
}

export const LottieElement: React.FC<LottieElementProps> = ({
  animation,
  title,
  description,
  style,
  autoPlay = true,
  loop = true,
}) => {
  const { styles } = useStyles(stylesheet);
  const animate = getAnimation(animation);

  return (
    <View style={[styles.container, style]}>
      <LottieView source={animate} style={styles.animation} autoPlay={autoPlay} loop={loop} />
      {title != null && (
        <Text variant="labelLarge" align="center">
          {title}
        </Text>
      )}
      {description != null && (
        <Text variant="bodySmall" color="secondary" align="center">
          {description}
        </Text>
      )}
    </View>
  );
};

export default LottieElement;
