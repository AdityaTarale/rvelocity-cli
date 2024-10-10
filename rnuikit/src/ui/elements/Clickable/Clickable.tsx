import React, { type FC, type PropsWithChildren, type ReactElement } from 'react';
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';

type ClickableProps = PropsWithChildren & TouchableOpacityProps;

const Clickable: FC<ClickableProps> = ({ children, ...rest }): ReactElement => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      {children}
    </TouchableOpacity>
  );
};

export default Clickable;
