import React from 'react';
import {
  StyleSheet, Image, AsyncStorage, KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  ContainerView, Input, Button, Wrapper,
} from '../components';

import { tryLogin, setCredentials } from '../redux/actions/login';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 35,
  },
});

class Login extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    email: '',
    password: '',
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const token = await AsyncStorage.getItem('user');

    if (token) {
      navigation.navigate('Home');
    }
  }

  componentDidUpdate(prevState) {
    const {
      setCredentials, data, user, success,
      navigation,
    } = this.props;

    if (prevState.data !== data && data && user) {
      this.setState({ message: 'entrou' });
      setCredentials(data, user);
    }

    if (prevState.success !== success && success) {
      navigation.navigate('Home');
    }
  }

  onHandleLogin = () => {
    const { email, password } = this.state;

    const { tryLogin } = this.props;
    tryLogin(
      email,
      password,
    );
  }

  render() {
    const { loading, error } = this.props;
    const { email, password } = this.state;
    return (
      <ContainerView color={colors.primary} error={error}>
        <Wrapper style={styles.wrapper}>
          <KeyboardAvoidingView style={{ height: '100%', width: '100%', justifyContent: 'center' }}>
            <Image source={require('../assets/ioasys.png')} style={{ width: '50%', height: 80, alignSelf: 'center' }} />
            <Input
              keyboardType="email-address"
              placeholder="Email"
              value={email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              keyboardType="numeric"
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button
              label="Login"
              txtColor={colors.white}
              color={colors.brown}
              loading={loading}
              onPress={this.onHandleLogin}
            />
          </KeyboardAvoidingView>

        </Wrapper>
      </ContainerView>
    );
  }
}

Login.propTypes = {
  tryLogin: PropTypes.func.isRequired,
  setCredentials: PropTypes.func.isRequired,
  error: PropTypes.string,
  data: PropTypes.array,
  loading: PropTypes.bool,
  user: PropTypes.object,
  navigation: PropTypes.object.isRequired,
  success: PropTypes.bool,
};

Login.defaultProps = {
  loading: false,
  user: null,
  data: null,
  success: true,
  error: null,
};

const mapStateToProps = ({ login }) => ({
  login,
  data: login.data,
  user: login.user,
  loading: login.loading,
  error: login.error,
  success: login.success,
});

const mapDispatchToProps = dispatch => bindActionCreators({ tryLogin, setCredentials }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
