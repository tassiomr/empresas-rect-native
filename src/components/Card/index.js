import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Title, SubTitle } from '../Titles';
import { Image } from '../Image';
import { url } from '../../utils/strings';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 1.5,
    marginTop: 10,
    marginBottom: 5,
    height: 100,
    borderRadius: 5,
  },
  enterprise: {
    paddingLeft: 8,
    height: 100,
    justifyContent: 'flex-start',
  },
});

export const Card = ({ enterprise, onPress }) => (
  <TouchableOpacity onPress={() => onPress(enterprise)}>
    <View style={styles.container}>
      <Image
        size={enterprise.photo ? 100 : 50}
        uri={enterprise.photo
          ? { uri: `${url}/${enterprise.photo}` }
          : require('../../assets/profiles.png')}
        style={{
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
        styleContainer={{
          height: 100,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <View style={styles.enterprise}>
        <Title>
          { enterprise.enterprise_name }
        </Title>
        <SubTitle>
          { enterprise.country }
        </SubTitle>
      </View>
    </View>
  </TouchableOpacity>
);

Card.propTypes = {
  enterprise: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

Card.defaultProps = {
  onPress: () => {},
};

export default Card;
