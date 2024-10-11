import React, {
  createContext,
  type PropsWithChildren,
  type ReactElement,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { Animated, ViewStyle } from 'react-native';

import { type Theme } from '@/theme';
import { useStyles } from 'react-native-unistyles';
import Clickable from '../../Clickable';

type RadioContextType = {
  value: string;
  onValueChange: (item: string) => void;
};

type RadioProps = RadioContextType & PropsWithChildren;

enum StatusType {
  CHECKED = 'checked',
  UNCHECKED = 'unchecked',
}

type RadioButtonProps = {
  value: string;
  status?: StatusType;
  disabled?: boolean;
  onPress?: (param?: string) => void;
  uncheckedColor?: string;
  color?: string;
};

const RadioContext = createContext<RadioContextType>({
  value: '',
  onValueChange: () => {},
});

export const Radio = ({ value, onValueChange, children }: RadioProps): ReactElement => {
  return <RadioContext.Provider value={{ value, onValueChange }}>{children}</RadioContext.Provider>;
};

const RadioButton = ({
  disabled,
  onPress,
  value,
  status = StatusType.UNCHECKED,
  ...rest
}: RadioButtonProps): ReactElement => {
  const { theme } = useStyles();
  const borderWidth = theme.spacing[2];

  const context = useContext<RadioContextType>(RadioContext);
  const borderAnim = useRef<Animated.Value>(new Animated.Value(borderWidth)).current;
  const isFirstRendering = useRef<boolean>(true);

  const getBorderColor = (
    isChecked: boolean,
    isDisabled: boolean = false,
  ): keyof Theme['colors'] => {
    return isDisabled && isChecked ? 'secondary' : isChecked ? 'primary' : 'secondary';
  };

  useEffect(() => {
    if (isFirstRendering.current) {
      isFirstRendering.current = false;
      return;
    }

    const toValue = status === StatusType.CHECKED ? 1 : borderWidth;

    Animated.timing(borderAnim, {
      toValue,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [status, borderAnim, borderWidth]);

  const handlePress = (eventValue: string): void => {
    context.onValueChange ? context.onValueChange(eventValue) : onPress?.(eventValue);
  };

  const isChecked = (): StatusType => {
    return context.value === value ? StatusType.CHECKED : StatusType.UNCHECKED;
  };

  const checked = isChecked() === StatusType.CHECKED;

  const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
    borderRadius: theme.spacing[32],
    height: theme.spacing[8],
    width: theme.spacing[8],
    margin: theme.spacing[4],
    backgroundColor: disabled ? theme.colors.secondary : theme.colors.white,
    borderColor: theme.colors[getBorderColor(checked, disabled)],
    opacity: disabled ? 0.5 : 1,
    borderWidth: checked ? 7 : borderAnim,
  };

  return (
    <Clickable
      {...(!(disabled ?? false) && {
        onPress: () => handlePress(value),
      })}
      accessibilityRole="radio"
      accessibilityState={{ disabled, checked }}
      accessibilityLiveRegion="polite"
      {...rest}>
      <Animated.View style={animatedStyle} />
    </Clickable>
  );
};

Radio.RadioButton = RadioButton;
export default Radio;

// Usage Example:
/*
<Radio
  value={value}
  onValueChange={(value: string) => {
    setValue(value);
  }}>
  <List>
    <List.Item
      title="Card"
      description="Your payment details"
      left={() => <Radio.RadioButton value="card" />}
    />
    <List.Item
      title="UPI"
      description="Your payment details"
      left={() => <Radio.RadioButton value="upi" />}
    />
  </List>
</Radio>
*/
