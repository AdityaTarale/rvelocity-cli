import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  flex: {
    flexDirection: 'column',
    gap: 8,
    width: '100%',
    height: 'auto',
    borderRadius: 7,
    padding: theme.spacing[16],
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: theme.colors.darkGray,
  },

  // Card type
  contained: {
    backgroundColor: theme.colors.secondary,
  },
  outlined: {
    borderWidth: 0.4,
    backgroundColor: 'transparent',
    borderColor: theme.colors.secondary,
  },
  elevated: {
    backgroundColor: theme.colors.background,
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  header: {
    fontSize: 20,
    fontWeight: 900,
  },

  content: {
    fontSize: 15,
  },

  // Image
  image: {
    width: '100%',
    height: 200,
    borderRadius: 7,
  },

  // Footer
  footerParent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  footerRight: {
    width: '40%',
    alignItems: 'center',
  },

  footer: {
    fontWeight: '700',
    borderRadius: 7,
    fontSize: 15,
    padding: theme.spacing[8],
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
  },
}));

export default stylesheet;
