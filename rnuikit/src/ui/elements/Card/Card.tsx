import React, { createContext, ReactElement, ReactNode, useContext, useMemo } from 'react';
import { View, Text, ImageSourcePropType, Image, ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';
import Button from '../forms/Button';

const CardTypes = {
  contained: 'Contained',
  outlined: 'Outlined',
  elevated: 'Elevated',
};

interface CardProps {
  children: ReactNode;
  type: keyof typeof CardTypes;
}

interface CardHeaderProps {
  title: string;
}

interface CardContentProps {
  content: string;
}

interface CardImageProps {
  source: ImageSourcePropType;
}

interface CardFooterProps {
  action: string;
}

type CardContextType = {
  type: keyof typeof CardTypes;
};

const CardContext = createContext<CardContextType>({
  type: 'contained',
});

const { Provider } = CardContext;

const Card = ({ children, type, ...rest }: CardProps): ReactElement => {
  const { styles } = useStyles(stylesheet);

  const memorizedValue = useMemo(
    () => ({
      type,

    }),
    [type],
  );

  return (
    <Provider value={memorizedValue}>
      <View style={[styles.flex, styles[type]]} {...rest}>
        {children}
      </View>
    </Provider>
  );
};

const CardHeader = ({ title }: CardHeaderProps) => {
  const { styles } = useStyles(stylesheet);

  return <Text style={[styles.header]}>{title}</Text>;
};

const CardContent = ({ content }: CardContentProps) => {
  const { styles } = useStyles(stylesheet);
  const { type } = useContext<CardContextType>(CardContext);
  const textVariant = (CardTypes[type] + 'Content') as keyof typeof styles;

  return <Text style={[styles[textVariant]]}>{content}</Text>;
};

const CardImage = ({ source }: CardImageProps) => {
  const { styles } = useStyles(stylesheet);

  return <Image source={source} style={[styles.image]} />;
};

const CardFooter = ({ action }: CardFooterProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={[styles.footerParent]}>
      <View style={[styles.footer as ViewStyle, styles.footerRight]}>
        <Button.Text title={action} />
      </View>
    </View>
  );
};

Card.Image = CardImage;
Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
