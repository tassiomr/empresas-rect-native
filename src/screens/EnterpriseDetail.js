import React from 'react';
import { Animated, StyleSheet, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

import {
  Title, SubTitle, IconBar, Wrapper,
} from '../components';

import colors from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: '60%',
    elevation: 8,
    width: '90%',
  },
  title: {
    backgroundColor: colors.primary,
    height: 80,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class EnterpriseDetail extends React.Component {
    state = {
      animateOpacity: new Animated.Value(0),
      user: {},
    }

    async componentDidMount() {
      const { animateOpacity } = this.state;
      const user = await AsyncStorage.getItem('user');
      this.setState({ user: JSON.parse(user) });
      Animated.timing(
        animateOpacity,
        {
          toValue: 1,
          duration: 300,
        },
      ).start();
    }

    render() {
      const { animateOpacity } = this.state;
      const { enterprise } = this.props;
      return (
        <Animated.View style={[styles.container, { opacity: animateOpacity }]}>
          <Animated.View style={[styles.modal, { opacity: animateOpacity }]}>
            <Animated.View style={[styles.title, { opacity: animateOpacity }]}>
              <Title color={colors.white}>
                {enterprise.enterprise_name}
              </Title>
            </Animated.View>
            <Wrapper style={{ flex: 1, padding: 5 }}>
              <SubTitle>
                Location: {enterprise.city} - {enterprise.country}
              </SubTitle>
              <SubTitle>
                    Type: {enterprise.enterprise_type.enterprise_type_name}
              </SubTitle>
              { enterprise.email
                ? <SubTitle>{enterprise.email}</SubTitle>
                : null
                }
            </Wrapper>
            <Wrapper style={{ flex: 4, padding: 5 }}>
              <SubTitle>
                {enterprise.description}
              </SubTitle>
            </Wrapper>

            <IconBar
              facebook={enterprise.facebook}
              twitter={enterprise.twitter}
              linkedin={enterprise.linkedin}
            />
          </Animated.View>
        </Animated.View>
      );
    }
}

EnterpriseDetail.propTypes = {
  enterprise: PropTypes.object.isRequired,
};