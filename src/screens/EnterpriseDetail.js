import React from 'react';
import { Animated, StyleSheet, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import dimensions from '../utils/dimensions';

import {
  Title, SubTitle, IconBar, Wrapper, CloseButton,
} from '../components';

import colors from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: dimensions.height,
    alignItems: 'center',
    justifyContent: 'center',
    width: dimensions.width,
  },
  containerTitle: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: dimensions.size(8),
    height: dimensions.height * 0.6,
    elevation: 8,
    width: dimensions.width * 0.9,
  },
  title: {
    backgroundColor: colors.primary,
    height: dimensions.size(60),
    flexDirection: 'row',
    borderTopLeftRadius: dimensions.size(8),
    borderTopRightRadius: dimensions.size(8),
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

    componentWillMount() {
      clearTimeout();
    }

    onHandleClose = () => {
      const { animateOpacity } = this.state;
      const { close } = this.props;
      Animated.timing(
        animateOpacity,
        {
          toValue: 0,
          duration: 600,
        },
      ).start();

      setTimeout(() => close(), 601);
    }


    render() {
      const { animateOpacity } = this.state;
      const { enterprise } = this.props;
      return (
        <Animated.View style={[styles.container, { opacity: animateOpacity }]}>
          <Animated.View style={[styles.modal, { opacity: animateOpacity }]}>
            <Animated.View style={[styles.title, { opacity: animateOpacity }]}>
              <Wrapper style={styles.containerTitle}>
                <Title color={colors.white}>
                  {enterprise.enterprise_name}
                </Title>
              </Wrapper>
              <CloseButton onPress={this.onHandleClose} />
            </Animated.View>
            <Wrapper style={{ flex: 1, padding: dimensions.size(10) }}>
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
            <Wrapper style={{ flex: 4, padding: dimensions.size(10) }}>
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
  close: PropTypes.func.isRequired,
};
