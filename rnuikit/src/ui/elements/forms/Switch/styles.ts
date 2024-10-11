import { createStyleSheet } from 'react-native-unistyles';

export default createStyleSheet(theme => ({
  container: {
    width: theme.spacing['50'],
    height: theme.spacing['28'],
    borderRadius: theme.spacing['14'],
    justifyContent: 'center',
    padding: theme.spacing['2'],
  },
  circle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.background,
  },
}));
