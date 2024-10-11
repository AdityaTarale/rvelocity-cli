import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  flex: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    width: '100%',
  },

  // Button type
  contained: {
    borderWidth: 1,
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  text: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },

  // Button type disabled state
  containedDisabled: {
    backgroundColor: theme.colors.darkGray,
    borderWidth: 0,
  },
  outlinedDisabled: {
    borderColor: theme.colors.darkGray,
  },
  textDisabled: {
    // color: theme.colors.darkGray,
  },

  // Button variants
  primary: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.secondary,
  },

  // Button Sizes
  sm: {
    height: 32,
    borderRadius: 4,
  },
  md: {
    height: 44,
    borderRadius: 4,
  },
  lg: {
    height: 56,
    borderRadius: 4,
  },

  // Button text variants type
  primaryContained: {
    color: theme.colors.white,
  },
  primaryOutlined: {
    color: theme.colors.primary,
  },
  primaryText: {
    color: theme.colors.primary,
  },

  secondaryContained: {
    color: theme.colors.primary,
  },
  secondaryOutlined: {
    color: theme.colors.darkGray,
  },
  secondaryText: {
    color: theme.colors.darkGray,
  },

  // Button text sizes
  smText: {
    fontSize: 12,
    fontWeight: '500',
  },
  mdText: {
    fontSize: 14,
    fontWeight: '500',
  },
  lgText: {
    fontSize: 16,
    fontWeight: '500',
  },
  disabledText: {
    color: theme.colors.secondary,
  },
}));

export default stylesheet;
