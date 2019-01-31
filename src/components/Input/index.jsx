import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 55,
    backgroundColor: colors.input,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    color: colors.black,
  },
});

export const Input = ({
  placeholder, secureTextEntry, keyboardType, onChangeText, value,
}) => (
  <TextInput
    placeholder={placeholder}
    onChangeText={text => onChangeText(text)}
    value={value}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    style={styles.input}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: 'Entry Text',
  secureTextEntry: false,
  keyboardType: 'numeric',
};

export default Input;
