import React from 'react';
import PropTypes from 'prop-types';
import {
  Animated, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Image } from '../Image';
import { Button } from '../Button';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  view: {
    zIndex: 2,
    width: '100%',
    height: 100,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profileContainer: {
    flex: 2,
  },
  buttonContainer: {
    flex: 1,
  },
  image: {
    borderRadius: 100,
  },
});

export const ProfileBar = ({
  uri, onPress, backgroundColor, elevation, color, logout,
}) => (
  <Animated.View style={[styles.view, { backgroundColor, elevation }]}>
    <View style={styles.profileContainer}>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <Image uri={uri} size={50} style={styles.image} />
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <Button onPress={logout} label="LOGOUT" txtColor={color} color={backgroundColor} />
    </View>
  </Animated.View>
);

ProfileBar.propTypes = {
  uri: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
  onPress: PropTypes.func,
  elevation: PropTypes.oneOfType([
    Animated.AnimatedInterpolation,
    PropTypes.number,
  ]),
  color: PropTypes.oneOfType([
    Animated.AnimatedInterpolation,
    PropTypes.string,
  ]),
  backgroundColor: PropTypes.oneOfType([
    Animated.AnimatedInterpolation,
    PropTypes.string,
  ]),
  logout: PropTypes.func.isRequired,
};

ProfileBar.defaultProps = {
  uri: require('../../assets/man.png'),
  onPress: () => {},
  backgroundColor: colors.white,
  color: colors.primary,
  elevation: 0,
};

export default ProfileBar;
