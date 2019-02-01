import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
  button: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const CloseButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>
      X
    </Text>
  </TouchableOpacity>
);

CloseButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default CloseButton;