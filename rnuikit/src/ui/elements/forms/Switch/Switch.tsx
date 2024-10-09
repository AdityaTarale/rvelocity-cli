import React, {useEffect, useRef} from 'react';
import {Animated, TouchableWithoutFeedback} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import stylesheet from './styles';

type SwitchProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

const Switch: React.FC<SwitchProps> = ({value, onValueChange}) => {
  const animation = useRef(new Animated.Value(value ? 1 : 0)).current;

  const {styles, theme} = useStyles(stylesheet);

  const toggleSwitch = () => {
    const newValue = !value;
    Animated.timing(animation, {
      toValue: newValue ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    onValueChange(newValue);
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [animation, value]);

  const switchInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 22],
  });

  const backgroundColorInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.borderColor, theme.colors.textPrimary],
  });

  return (
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <Animated.View
        style={[
          {
            backgroundColor: backgroundColorInterpolation,
          },
          styles.container,
        ]}>
        <Animated.View
          style={[
            {
              transform: [{translateX: switchInterpolation}],
            },
            styles.circle,
          ]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Switch;
