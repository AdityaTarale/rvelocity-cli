import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  plusAvatar: {
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.darkGray,
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: -10,
  },
  avatarImage: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: 10,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.colors.secondary,
  },
  // Avatar size
  xs: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  sm: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  md: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  lg: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  xl: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  '2xl': {
    width: 134,
    height: 134,
    borderRadius: 67,
  },
}));

export default stylesheet;
