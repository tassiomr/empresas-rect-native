import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from '../Image';
import { profile } from '../../utils/strings';
import colors from '../../utils/colors';
import { Button } from '../Button';

const styles = StyleSheet.create({
  view: {
    elevation: 4,
    zIndex: 20,
    backgroundColor: colors.primary,
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

export const ProfileBar = ({ uri, onPress }) => (
  <View style={styles.view}>
    <View style={styles.profileContainer}>
      <TouchableOpacity onPress={onPress} activeOpacity={1}>
        <Image uri={uri || { uri: profile }} size={50} style={styles.image} />
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <Button label="LOGOUT" />
    </View>
  </View>
);

ProfileBar.propTypes = {
  uri: PropTypes.string,
  onPress: PropTypes.func,
};

ProfileBar.defaultProps = {
  uri: require('../../assets/man.png'),
  onPress: () => {},
};

export default ProfileBar;
