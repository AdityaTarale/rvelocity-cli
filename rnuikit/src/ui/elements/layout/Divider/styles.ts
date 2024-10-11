import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    width: '100%',
    borderColor: theme.colors.secondary,
  },
  line: {
    borderTopWidth: 1,
  },
  dotted: {
    borderTopWidth: 1,
    borderStyle: 'dotted',
  },
  dashed: {
    borderTopWidth: 1,
    borderStyle: 'dashed',
  },
}));

export default stylesheet;
