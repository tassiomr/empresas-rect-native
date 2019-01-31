import React from 'react';
import PropTypes from 'prop-types';

import {
  ActivityIndicator, TouchableOpacity, Text, StyleSheet,
  Animated,
} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0,
  },
  txt: {
    fontWeight: 'bold',
    borderWidth: 0,
  },
});

export const Button = ({
  onPress, label, loading, color, txtColor,
}) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <Animated.View style={[styles.btn, { backgroundColor: color }]}>


      {
            loading
              ? <ActivityIndicator size="small" color={txtColor} />
              : <Animated.Text style={[styles.txt, { color: txtColor }]}>{label}</Animated.Text>
        }
    </Animated.View>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  loading: PropTypes.bool,
  color: PropTypes.string,
  txtColor: PropTypes.string,
};

Button.defaultProps = {
  onPress: () => {},
  label: 'Press',
  loading: false,
  color: colors.primary,
  txtColor: colors.white,
};

export default Button;
