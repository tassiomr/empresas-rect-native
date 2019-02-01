import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export const Wrapper = ({ children, style }) => (
  <View style={style}>
    { children }
  </View>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Wrapper.defaultProps = {
  style: {},
};

export default Wrapper;
