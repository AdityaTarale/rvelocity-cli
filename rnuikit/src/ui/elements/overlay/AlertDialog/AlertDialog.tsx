import React, { type FC, type ReactElement } from 'react';
import Modal from '../Modal';
import Text from '../../Text';
import Button from '../../forms/Button';
import { View } from 'react-native';
import stylesheet from './styles';
import { useStyles } from 'react-native-unistyles';

interface AlertDialogProps {
  visible: boolean;
  heading: string;
  description: string;
  primaryText: string;
  secondaryText: string;
  primaryAction: () => void;
  secondaryAction: () => void;
}

const AlertDialog: FC<AlertDialogProps> = ({
  visible,
  heading,
  description,
  primaryText,
  secondaryText,
  primaryAction,
  secondaryAction,
}): ReactElement => {
  const { styles } = useStyles(stylesheet);

  return (
    <Modal visible={visible}>
      <Modal.Container>
        {/* Add Icon in future */}
        <Modal.Header title={heading} />
        <Modal.Body>
          <Text color="primary">{description}</Text>
        </Modal.Body>
        <Modal.Footer>
          <View style={styles.footerContent}>
            <Button variant="secondary" type="outlined" onPress={secondaryAction}>
              <Button.Text title={secondaryText} />
            </Button>
            <Button variant="primary" type="contained" onPress={primaryAction}>
              <Button.Text title={primaryText} />
            </Button>
          </View>
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};

export default AlertDialog;

/** How to use
 *
 *<AlertDialog
 *  visible={visible}
 *  heading="Welcome"
 *  description="Your favorite email has a fresh new look and how it works check you may like it. cool"
 *  primaryText="Primary"
 *  primaryAction={() => {
 *    setVisible(false);
 *  }}
 *  secondaryText="Secondary"
 *  secondaryAction={() => {
 *    setVisible(false);
 *  }}
 * />
 */
