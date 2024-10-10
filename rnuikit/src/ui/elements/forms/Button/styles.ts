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
    backgroundColor: theme.colors.textSecondary,
    borderWidth: 0,
  },
  outlinedDisabled: {
    borderColor: theme.colors.textSecondary,
  },
  textDisabled: {},
  // Button variants
  primary: {
    backgroundColor: theme.colors.textPrimary,
    borderColor: theme.colors.textPrimary,
  },
  secondary: {
    backgroundColor: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
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
    color: 'white',
  },
  primaryOutlined: {
    color: theme.colors.textPrimary,
  },
  primaryText: {
    color: theme.colors.textPrimary,
  },
  secondaryContained: {
    color: 'white',
  },
  secondaryOutlined: {
    color: theme.colors.textSecondary,
  },
  secondaryText: {
    color: theme.colors.textSecondary,
  },
  // Button text sizes
  smText: {
    fontSize: 12,
  },
  mdText: {
    fontSize: 14,
  },
  lgText: {
    fontSize: 16,
  },
  disabledText: {
    color: theme.colors.textSecondary,
  },
}));

export default stylesheet;
