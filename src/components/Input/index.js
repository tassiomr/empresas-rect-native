import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import dimensions from '../../utils/dimensions';
import colors from '../../utils/colors';


const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: dimensions.size(40),
    backgroundColor: colors.input,
    marginTop: dimensions.size(5),
    marginBottom: dimensions.size(5),
    borderRadius: dimensions.size(5),
    paddingLeft: dimensions.size(10),
    paddingRight: dimensions.size(10),
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
