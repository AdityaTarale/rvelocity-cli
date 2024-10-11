import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    overflow: 'hidden',
  },
  shimmer: {
    flex: 1,
    opacity: 0.3,
  },
}));

export default stylesheet;
