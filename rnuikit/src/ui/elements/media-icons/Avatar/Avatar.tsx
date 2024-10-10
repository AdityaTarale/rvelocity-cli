import React, {
  Children,
  cloneElement,
  createContext,
  PropsWithChildren,
  type ReactElement,
  type ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ImageProps, StyleProp, View, ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { AutoImage } from '../Image';
import stylesheet from './styles';
import Text from '../../Text';
import { Theme } from '@/theme';

const avatarVariants = {
  xs: {
    width: 24,
    height: 24,
  },
  sm: {
    width: 30,
    height: 30,
  },
  md: {
    width: 50,
    height: 50,
  },
  lg: {
    width: 64,
    height: 64,
  },
  xl: {
    width: 96,
    height: 96,
  },
  '2xl': {
    width: 134,
    height: 134,
  },
};

const avatarText = {
  xs: 'bodySmall',
  sm: 'bodyMedium',
  md: 'bodyLarge',
  lg: 'displaySmall',
  xl: 'displayMedium',
  '2xl': 'displayLarge',
};

type AvatarType = Exclude<keyof typeof avatarVariants, 'defaults'>;
type AvatarGroupProps = {
  children: ReactElement[];
  max: number;
  variant?: AvatarType;
};
type AutoImageProps = ImageProps;
type AvatarFallbackProps = PropsWithChildren;
type AvatarContextType = {
  variant: AvatarType;
};
type AvatarProps = {
  bg?: keyof Theme['colors'];
  variant?: AvatarType;
  children: ReactNode;
};
// type AvatarBadgeProps = PropsWithChildren & {
//   title: string;
// };

// Context
const AvatarContext = createContext<AvatarContextType>({
  variant: 'md',
});

const { Provider } = AvatarContext;

const getAvatarGroupChildren = (
  children: ReactNode,
  max: number,
  variant: AvatarType,
  styles: { plusAvatar: StyleProp<ViewStyle> },
): [ReactElement[], ReactElement | null] => {
  let childrenArray = Children.toArray(children) as ReactElement[];
  let plusAvatars = 0;

  if (max !== undefined && max < childrenArray.length && max > 0) {
    plusAvatars = childrenArray.length - max;
    childrenArray = childrenArray.slice(0, max);
  }

  const avatars = childrenArray.reverse().map((child, index) =>
    cloneElement(child, {
      key: `avatar-group-child-${index}`,
    }),
  );

  const plusAvatarComponent =
    plusAvatars > 0 ? (
      <View key="plus-avatars" style={[styles.plusAvatar, avatarVariants[variant]]}>
        <Text color="background" variant={avatarText[variant] as keyof Theme['typeFaces']}>
          +{plusAvatars}
        </Text>
      </View>
    ) : null;

  return [avatars, plusAvatarComponent];
};

const AvatarGroup = ({ children, max, variant = 'md' }: AvatarGroupProps): ReactElement => {
  const { styles } = useStyles(stylesheet);
  const [avatars, plusAvatarComponent] = getAvatarGroupChildren(children, max, variant, styles);

  return (
    <View style={styles.groupContainer}>
      <View style={styles.groupContainer}>{avatars}</View>
      {plusAvatarComponent}
    </View>
  );
};

const AvatarImage = ({ source, ...props }: AutoImageProps): ReactElement => {
  const { variant } = useContext(AvatarContext);
  const [imageError, setImageError] = useState(false);
  const { styles } = useStyles(stylesheet);

  const handleImageError = (): void => {
    setImageError(true);
  };

  return (
    <View
      style={[
        styles.avatarImage,
        { width: avatarVariants[variant].width, height: avatarVariants[variant].height },
      ]}>
      {!imageError ? (
        <AutoImage
          source={source}
          onError={handleImageError}
          {...props}
          maxWidth={avatarVariants[variant].width}
          // maxHeight={avatarVariants[variant].height}
        />
      ) : null}
    </View>
  );
};

const AvatarFallback = ({ children }: AvatarFallbackProps): ReactElement => {
  const { variant } = useContext(AvatarContext);
  const { styles } = useStyles(stylesheet);

  const fullName = children?.toString().split(' ') ?? [];
  const firstNameInitial = fullName[0]?.length > 0 ? fullName[0][0] : '';
  const lastNameInitial = fullName[1]?.length > 0 ? fullName[1][0] : '';

  const avatarTextVariant = avatarText[variant] as keyof Theme['typeFaces'];

  return (
    <View
      style={[
        styles.avatarFallback,
        {
          width: avatarVariants[variant].width,
          height: avatarVariants[variant].height,
        },
      ]}>
      <Text variant={avatarTextVariant}>
        {firstNameInitial}
        {lastNameInitial}
      </Text>
    </View>
  );
};

// const AvatarBadge = ({ children, title = '' }: AvatarBadgeProps): ReactElement => {
//   return <View/>;
// };

const Avatar = ({ children, bg = 'warning', variant = 'md' }: AvatarProps): ReactElement => {
  const memorizedValue = useMemo(() => ({ variant }), [variant]);
  const { styles } = useStyles(stylesheet);

  return (
    <Provider value={memorizedValue}>
      <View
        style={[
          styles.avatarContainer,
          {
            backgroundColor: bg,
            width: avatarVariants[variant].width,
            height: avatarVariants[variant].height,
            borderRadius: avatarVariants[variant].height / 2,
          },
        ]}>
        {children}
      </View>
    </Provider>
  );
};

Avatar.Image = AvatarImage;
Avatar.Group = AvatarGroup;
Avatar.Fallback = AvatarFallback;

export default Avatar;

/* Usage Example:
<Avatar.Group max={2}>
  <Avatar>
    <Avatar.Image source="https://example.com/image1.jpg" />
    <Avatar.Fallback>John Doe</Avatar.Fallback>
  </Avatar>
  <Avatar>
    <Avatar.Image source="https://example.com/image2.jpg" />
    <Avatar.Fallback>Jane Smith</Avatar.Fallback>
  </Avatar>
  <Avatar>
    <Avatar.Image source="https://example.com/image3.jpg" />
    <Avatar.Fallback>Jim Brown</Avatar.Fallback>
  </Avatar>
</Avatar.Group>
*/
