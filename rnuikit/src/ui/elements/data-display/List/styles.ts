import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  listContainer: {
    paddingHorizontal: 16,
  },
  accordionContainer: {
    marginBottom: 16,
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accordionContent: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  accordionSubtitle: {
    fontSize: 14,
    color: theme.colors.darkGray,
  },
  accordionBody: {
    marginTop: 10,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  listItemContent: {
    flex: 1,
    marginLeft: 12,
  },
  listItemTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  listItemDescription: {
    fontSize: 14,
    color: theme.colors.darkGray,
  },
  divider: {
    marginTop: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.secondary,
  },
  listSection: {
    marginVertical: 8,
  },
  listSubHeader: {
    paddingVertical: 8,
  },
}));

export default stylesheet;
