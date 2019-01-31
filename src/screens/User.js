import React from 'react';
import { Animated, StyleSheet, AsyncStorage } from 'react-native';

import colors from '../utils/colors';
import { Title, SubTitle } from '../components';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '100%',
    alignItems: 'center',
    width: '100%',
  },
  modal: {
    top: '15%',
    paddingTop: 5,
    paddingLeft: 15,
    backgroundColor: colors.white,
    borderRadius: 5,
    height: '16%',
    elevation: 8,
    width: '97%',
  },
});

export default class User extends React.Component {
    state = {
      animateOpacity: new Animated.Value(0),
      user: {
        investor: {
          investor_name: '',
          email: '',
          country: '',
          city: '',
        },
      },
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
      const { user, animateOpacity } = this.state;
      return (
        <Animated.View style={[styles.container, { opacity: animateOpacity }]}>
          <Animated.View style={[styles.modal, { opacity: animateOpacity }]}>
            <Title>
              { user.investor.investor_name }
            </Title>
            <SubTitle>
                Email: { user.investor.email}
            </SubTitle>
            <SubTitle>
                City: { user.investor.city }
            </SubTitle>
            <SubTitle>
                Country: { user.investor.country }
            </SubTitle>
          </Animated.View>
        </Animated.View>
      );
    }
}
