import React from 'react';
import PropTypes from 'prop-types';
import {
  Animated, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Image } from '../Image';
import { Button } from '../Button';

const styles = StyleSheet.create({
  view: {
    zIndex: 20,
    width: '100%',
    height: 60,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
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
  uri, onPress, backgroundColor, elevation, color,
}) => (
  <Animated.View style={[styles.view, { backgroundColor, elevation }]}>
    <View style={styles.profileContainer}>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <Image uri={uri} size={50} style={styles.image} />
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <Button label="LOGOUT" txtColor={color} color={backgroundColor} />
    </View>
  </Animated.View>
);

ProfileBar.propTypes = {
  uri: PropTypes.string,
  onPress: PropTypes.func,
  elevation: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

ProfileBar.defaultProps = {
  uri: require('../../assets/man.png'),
  onPress: () => {},
};

export default ProfileBar;
