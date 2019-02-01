import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const base_unit = 512;

export default {
  size: (size) => (height / base_unit) * size,
  height,
  width
}
