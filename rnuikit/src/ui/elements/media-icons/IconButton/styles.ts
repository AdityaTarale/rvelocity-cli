import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // Add some border radius for a button-like appearance
  },
}));

export default stylesheet;
