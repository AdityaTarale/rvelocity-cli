import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  flex: {
    flexDirection: 'column',
    gap: 8,
    width: '100%',
    height: 'auto',
    borderRadius: 7,
    padding: theme.spacing[16],
  },

  // Card type
  contained: {
    backgroundColor: theme.colors.textPrimary,
    borderColor: theme.colors.textPrimary,
  },
  outlined: {
    borderWidth: 0.2,
    backgroundColor: 'transparent',
    borderColor: theme.colors.textSecondary,
  },
  elevated: {
    backgroundColor: theme.colors.cardBackground,
    shadowColor: theme.colors.textPrimary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  // Alignment
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },

  // Header variants
  OutlinedHeader: {
    fontSize: 20,
    fontWeight: 900,
    color: theme.colors.textPrimary,
  },
  ContainedHeader: {
    fontSize: 20,
    fontWeight: 900,
    color: theme.colors.cardBackground,
  },
  ElevatedHeader: {
    fontSize: 20,
    fontWeight: 900,
    color: theme.colors.textPrimary,
  },

  // Content variants
  OutlinedContent: {
    color: theme.colors.textPrimary,
  },
  ContainedContent: {
    color: theme.colors.textSecondary,
  },
  ElevatedContent: {
    color: theme.colors.textSecondary,
  },

  // Header fonts
  smHeader: {
    fontSize: 20,
    fontWeight: '500',
  },
  mdHeader: {
    fontSize: 25,
    fontWeight: '700',
  },
  lgHeader: {
    fontSize: 30,
    fontWeight: '900',
  },

  // Content fonts
  smContent: {
    fontSize: 15,
  },
  mdContent: {
    fontSize: 20,
  },
  lgContent: {
    fontSize: 23,
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

  OutlinedFooter: {
    padding: theme.spacing[8],
    backgroundColor: theme.colors.warning,
    borderRadius: 7,
    fontWeight: '700',
  },
  ContainedFooter: {
    padding: theme.spacing[8],
    borderRadius: 7,
    fontWeight: '700',
  },
  ElevatedFooter: {
    padding: theme.spacing[8],
    backgroundColor: theme.colors.textPrimary,
    borderRadius: 7,
    fontWeight: '700',
  },
}));

export default stylesheet;
