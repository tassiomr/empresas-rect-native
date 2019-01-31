import React from 'react';
import PropTypes from 'prop-types';
import { Image as RNImage, View } from 'react-native';


export const Image = ({ uri, size, style }) => (
  <View style={[{ width: size, height: size }, style]}>
    <RNImage style={[{ width: size, height: size }, style]} source={uri} />
  </View>
);

Image.propTypes = {
  uri: PropTypes.oneOfType([
    PropTypes.objectOf,
    PropTypes.node,
  ]),
  size: PropTypes.number.isRequired,
  style: PropTypes.objectOf,
};

Image.defaultProps = {
  uri: require('../../assets/profiles.png'),
  style: {},
};

export default Image;
