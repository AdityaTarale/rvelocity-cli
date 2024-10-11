import { Theme } from '@/theme';
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
import { ImageProps, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import Text from '../../Text';
import { AutoImage } from '../Image';
import stylesheet from './styles';

const avatarText = {
  xs: 'bodySmall',
  sm: 'bodyMedium',
  md: 'bodyLarge',
  lg: 'bodyLarge',
  xl: 'bodyLarge',
  '2xl': 'bodyLarge',
};

type AvatarType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
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
  variant?: AvatarType;
  children: ReactNode;
};
// type AvatarBadgeProps = PropsWithChildren & {
//   title: string;
// };

const AvatarContext = createContext<AvatarContextType>({
  variant: 'md',
});

const { Provider } = AvatarContext;

const getAvatarGroupChildren = (
  children: ReactNode,
  max: number,
  variant: AvatarType,
  styles: any,
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
      <View key="plus-avatars" style={[styles.plusAvatar, styles[variant]]}>
        <Text color="background" variant={avatarText[variant] as keyof Theme['typeFaces']}>
          +{plusAvatars}
        </Text>
      </View>
    ) : null;

  return [avatars, plusAvatarComponent];
};

const AvatarGroup = ({ children, max, variant = 'md' }: AvatarGroupProps): ReactElement => {
  const memorizedValue = useMemo(() => ({ variant }), [variant]);
  const { styles } = useStyles(stylesheet);
  const [avatars, plusAvatarComponent] = getAvatarGroupChildren(children, max, variant, styles);

  return (
    <Provider value={memorizedValue}>
      <View style={styles.groupContainer}>
        <View style={styles.groupContainer}>{avatars}</View>
        {plusAvatarComponent}
      </View>
    </Provider>
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
        { width: styles[variant].width, height: styles[variant].height },
      ]}>
      {!imageError ? (
        <AutoImage
          source={source}
          onError={handleImageError}
          {...props}
          maxWidth={styles[variant].width}
          // maxHeight={styles[variant].height}
        />
      ) : null}
    </View>
  );
};

const AvatarFallback = ({ children }: AvatarFallbackProps): ReactElement => {
  const { variant } = useContext(AvatarContext);

  const fullName = children?.toString().split(' ') ?? [];
  const firstNameInitial = fullName[0]?.length > 0 ? fullName[0][0] : '';
  const lastNameInitial = fullName[1]?.length > 0 ? fullName[1][0] : '';

  const avatarTextVariant = avatarText[variant] as keyof Theme['typeFaces'];

  return (
    <Text variant={avatarTextVariant}>
      {firstNameInitial}
      {lastNameInitial}
    </Text>
  );
};

// const AvatarBadge = ({ children, title = '' }: AvatarBadgeProps): ReactElement => {
//   return <View/>;
// };

const Avatar = ({ children, variant = 'md' }: AvatarProps): ReactElement => {
  const { variant: groupVariant } = useContext(AvatarContext);

  const memorizedValue = useMemo(
    () => ({ variant: groupVariant || variant }),
    [groupVariant, variant],
  );
  const { styles } = useStyles(stylesheet);

  return (
    <Provider value={memorizedValue}>
      <View style={[styles.avatarContainer, styles[groupVariant || variant]]}>{children}</View>
    </Provider>
  );
};

Avatar.Image = AvatarImage;
Avatar.Group = AvatarGroup;
Avatar.Fallback = AvatarFallback;

export default Avatar;

/**
 * How to use
 * <Avatar.Group max={2}>
 *   <Avatar>
 *     <Avatar.Image
 *       source={{
 *         uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
 *       }}
 *     />
 *     <Avatar.Fallback>Avatar</Avatar.Fallback>
 *   </Avatar>
 *   <Avatar>
 *     <Avatar.Image
 *       source={{
 *         uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
 *       }}
 *     />
 *     <Avatar.Fallback>Avatar</Avatar.Fallback>
 *   </Avatar>
 *   <Avatar>
 *     <Avatar.Image
 *       source={{
 *         uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
 *       }}
 *     />
 *     <Avatar.Fallback>Avatar</Avatar.Fallback>
 *   </Avatar>
 * </Avatar.Group>
 */
