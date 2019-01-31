import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Title, SubtTitle } from '../Titles';
import { Image } from '../Image';
import { url, profile } from '../../utils/strings';
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
        size={100}
        uri={enterprise.photo
          ? { uri: `${url}/${enterprise.photo}` }
          : { uri: profile }
                                }
        style={{
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      />
      <View style={styles.enterprise}>
        <Title>
          { enterprise.enterprise_name }
        </Title>
        <SubtTitle>
          { enterprise.country }
        </SubtTitle>
      </View>
    </View>
  </TouchableOpacity>
);


export default Card;
