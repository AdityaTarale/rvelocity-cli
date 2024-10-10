import { createStyleSheet } from 'react-native-unistyles';

export default createStyleSheet(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkedBox: {
    width: theme.spacing['24'],
    height: theme.spacing['24'],
    borderRadius: theme.spacing['4'],
    backgroundColor: theme.colors.textPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uncheckedBox: {
    width: theme.spacing['24'],
    height: theme.spacing['24'],
    borderRadius: theme.spacing['4'],
    borderColor: theme.colors.textSecondary,
    borderWidth: theme.spacing['2'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginLeft: theme.spacing['6'],
  },
}));
