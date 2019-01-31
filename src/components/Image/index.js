import React from 'react';
import PropTypes from 'prop-types';
import { Image as RNImage, View } from 'react-native';


export const Image = ({
  uri, size, style, styleContainer,
}) => (
  <View style={[{ width: size, height: size }, style, styleContainer]}>
    <RNImage style={[{ width: size, height: size }, style]} source={uri} />
  </View>
);

Image.propTypes = {
  uri: PropTypes.any.isRequired,
  size: PropTypes.number.isRequired,
  styleContainer: PropTypes.object,
  style: PropTypes.object,
};

Image.defaultProps = {
  styleContainer: {},
  style: {},
};

export default Image;
