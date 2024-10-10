import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import Text from '../../Text';
import Icon from '../../media-icons/Icon';
import stylesheet from './styles';

type CheckboxProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label?: string;
  description?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ value, onValueChange, label, description }) => {
  const { styles } = useStyles(stylesheet);

  const handlePress = () => {
    onValueChange(!value);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <View style={value ? styles.checkedBox : styles.uncheckedBox}>
          {value && <Icon variant="vector" icon="check" color="background" />}
        </View>
        {label && (
          <View>
            <Text color="textPrimary" variant="bodyLarge" style={styles.label}>
              {label}
            </Text>
            {description && (
              <Text color="textPrimary" variant="bodySmall" style={styles.label}>
                {description}
              </Text>
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Checkbox;
