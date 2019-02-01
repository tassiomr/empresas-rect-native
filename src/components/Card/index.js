import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { Title, SubTitle } from '../Titles';
import { Image } from '../Image';

import { url } from '../../utils/strings';
import colors from '../../utils/colors';
import dimensions from '../../utils/dimensions';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    elevation: 1.5,
    marginTop: dimensions.size(10),
    marginBottom: dimensions.size(5),
    height: dimensions.size(70),
    borderRadius: dimensions.size(5),
  },
  enterprise: {
    paddingLeft: dimensions.size(8),
    height: dimensions.size(70),
    justifyContent: 'flex-start',
  },
});

export const Card = ({ enterprise, onPress }) => (
  <TouchableOpacity onPress={() => onPress(enterprise)}>
    <View style={styles.container}>
      <Image
        size={enterprise.photo ? dimensions.size(70) : dimensions.size(35)}
        uri={enterprise.photo
          ? { uri: `${url}/${enterprise.photo}` }
          : require('../../assets/profiles.png')}
        style={{
          borderTopLeftRadius: dimensions.size(5),
          borderBottomLeftRadius: dimensions.size(5),
        }}
        styleContainer={{
          height: dimensions.size(70),
          width: dimensions.size(70),
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
