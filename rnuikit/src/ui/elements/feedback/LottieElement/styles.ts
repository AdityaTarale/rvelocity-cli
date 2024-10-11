import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  animation: { height: theme.spacing[156], width: theme.spacing[156] },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing[20],
    zIndex: theme.spacing[50],
  },
}));

export default stylesheet;
