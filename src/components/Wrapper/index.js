import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

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
