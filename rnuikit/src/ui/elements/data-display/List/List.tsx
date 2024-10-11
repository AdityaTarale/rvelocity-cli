import React, { type PropsWithChildren, type ReactElement, type ReactNode, useState } from 'react';
import { LayoutAnimation, StyleProp, Text, TextStyle, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import Divider from '../../layout/Divider';
import Icon, { IconProps } from '../../media-icons/Icon';
import stylesheet from './styles';
import Clickable from '../../Clickable';

type ListProps = PropsWithChildren;

const List = ({ children }: ListProps): ReactElement => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.listContainer}>{children}</View>;
};

type ListAccordionProps = PropsWithChildren & {
  title: string;
  subTitle?: string;
  id?: string | number;
  left?: () => ReactNode;
};

const ListAccordion = ({ title, subTitle, children, left }: ListAccordionProps): ReactElement => {
  const { styles } = useStyles(stylesheet);
  const [opened, setOpened] = useState<boolean>(false);

  const toggleAccordion = (): void => {
    LayoutAnimation.configureNext({
      duration: 300,
      create: { type: 'easeIn', property: 'opacity' },
      update: { type: 'linear', springDamping: 0.3, duration: 250 },
    });
    setOpened(!opened);
  };

  return (
    <View style={styles.accordionContainer}>
      <Clickable onPress={toggleAccordion}>
        <View style={styles.accordionHeader}>
          {left ? left() : null}
          <View style={styles.accordionContent}>
            <View>
              <Text style={styles.accordionTitle}>{title}</Text>
              {subTitle ? <Text style={styles.accordionSubtitle}>{subTitle}</Text> : null}
            </View>
            <Icon
              variant="vector"
              type="material"
              icon={opened ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={8}
              color="secondary"
            />
          </View>
        </View>
      </Clickable>
      {opened && <View style={styles.accordionBody}>{children}</View>}
    </View>
  );
};

type ListItemProps = {
  title?: string;
  description?: string;
  titleVariant?: StyleProp<TextStyle>;
  descriptionVariant?: StyleProp<TextStyle>;
  titleColor?: string;
  descriptionColor?: string;
  divider?: boolean;
  left?: () => ReactNode;
  right?: () => ReactNode;
};

const ListItem = ({
  title,
  description,
  left,
  right,
  titleColor = 'black',
  descriptionColor = 'gray',
  divider = false,
}: ListItemProps): ReactElement => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.listItemContainer}>
      {left ? <View>{left()}</View> : null}
      <View style={styles.listItemContent}>
        <View style={styles.listItemTextContainer}>
          <View>
            {title ? (
              <Text style={[styles.listItemTitle, { color: titleColor }]}>{title}</Text>
            ) : null}
            {description ? (
              <Text style={[styles.listItemDescription, { color: descriptionColor }]}>
                {description}
              </Text>
            ) : null}
          </View>
          {right ? <View>{right()}</View> : null}
        </View>
        {divider && <Divider style={styles.divider} />}
      </View>
    </View>
  );
};

const ListIcon = ({ variant, icon, ...rest }: IconProps): ReactElement => {
  return <Icon icon={icon} variant={variant} {...rest} />;
};

type ListSectionProps = PropsWithChildren;

const ListSection = ({ children }: ListSectionProps): ReactElement => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.listSection}>{children}</View>;
};

type ListSubHeaderProps = {
  title: string | number;
};

const ListSubHeader = ({ title }: ListSubHeaderProps): ReactElement => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.listSubHeader}>
      <Text>{title}</Text>
    </View>
  );
};

List.Accordion = ListAccordion;
List.Icon = ListIcon;
List.Item = ListItem;
List.Section = ListSection;
List.SubHeader = ListSubHeader;

export default List;

/**
 * Usages:
 * <List>
 *   <List.Accordion
 *     left={() => (
 *       <IconButton variant="svg" icon="home" color="primary" iconStyle="contained" size={7} />
 *     )}
 *     title="accordion1"
 *     subTitle="accordion subtitle">
 *     <List.Item
 *       title="list item1"
 *       description="list item description here"
 *       left={() => (
 *         <IconButton variant="svg" icon="home" color="primary" iconStyle="contained" size={7} />
 *       )}
 *       right={() => <Icon variant="svg" icon="shop" color="primary" size={7} />}></List.Item>
 *   </List.Accordion>
 * </List>
 */
