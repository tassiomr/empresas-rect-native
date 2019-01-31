import React from 'react';
import { Image as RNImage, View } from 'react-native';

export const Image = ({ uri, size, style }) => (
  <View style={[{ width: size, height: size }, style]}>
    <RNImage style={[{ width: size, height: size }, style]} source={uri} />
  </View>
);

export default Image;
