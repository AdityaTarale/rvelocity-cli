import useDimensions from '@/hooks/useDimensions';
import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

type ContentSafeViewProps = PropsWithChildren & {
  // Define props here
};

const ContentSafeView: React.FC<ContentSafeViewProps> = ({ children, ...rest }) => {
  const { theme } = useStyles();
  const dimensions = useDimensions('window');

  return (
    <View
      style={{
        marginHorizontal: theme.spacing[20],
        width: dimensions.width - theme.spacing[20],
      }}
      {...rest}>
      {children}
    </View>
  );
};

export default ContentSafeView;
