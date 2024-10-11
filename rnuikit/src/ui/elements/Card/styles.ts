import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  cardBase: {
    padding: 12,
    borderRadius: 10,
  },
  transparent: {
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
  },
  contained: {
    backgroundColor: theme.colors.secondary,
  },
  outlined: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
  },
  elevated: {
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  titleContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  contentContainer: {
    padding: 16,
  },
  actionsContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}));

export default stylesheet;
