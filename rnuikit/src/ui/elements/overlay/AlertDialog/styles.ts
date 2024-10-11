import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  footerContent: { flexDirection: 'row', alignItems: 'center', gap: 4 },
}));

export default stylesheet;
