import React from 'react';
import { Animated } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ContainerView, ActivityIndicatorView } from '../components';
import colors from '../utils/colors';

import { logout } from '../redux/actions/login';
import { getAllEnterpresises } from '../redux/actions/enterprise';

import { Card } from '../components/Card';
import { ProfileBar } from '../components/ProfileBar';

import User from './User';
import EnterprieDetail from './EnterpriseDetail';

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    enterprise: {},
    show: false,
    showModal: false,
    scrollY: new Animated.Value(0),
  }

  async componentDidMount() {
    const { getAllEnterpresises } = this.props;
    await getAllEnterpresises();
  }

  componentDidUpdate(prevState) {
    const { success, navigation } = this.props;

    if (prevState.success !== success && success) {
      navigation.navigate('Login');
    }
  }


  shouldComponentUpdate(nextProps) {
    const { scrollY } = this.state;

    this.animatedElevation = scrollY.interpolate({
      inputRange: [0, 10],
      outputRange: [0, 4],
      extrapolate: 'clamp',
    });

    this.animatedTextColor = scrollY.interpolate({
      inputRange: [0, 10],
      outputRange: [colors.primary, colors.white],
      extrapolate: 'clamp',
    });

    this.animatedBgColor = scrollY.interpolate({
      inputRange: [0, 10],
      outputRange: [colors.white, colors.primary],
      extrapolate: 'clamp',
    });


    return nextProps;
  }

  onHandleTryLogout = () => {
    const { logout } = this.props;
    logout();
  }

  onHandleShowProfile = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
      showModal: false,
    });
  }

  onHandleClickEnterprise = (enterprise) => {
    this.setState({ showModal: true, show: false, enterprise });
  }

  render() {
    const { enterprises, error } = this.props;
    const {
      show, showModal, enterprise, scrollY,
    } = this.state;

    if (!enterprises) {
      return <ActivityIndicatorView />;
    }

    return (
      <ContainerView color={colors.white} error={error} animated>
        <ProfileBar
          onPress={this.onHandleShowProfile}
          backgroundColor={this.animatedBgColor}
          elevation={this.animatedElevation}
          color={this.animatedTextColor}
          logout={this.onHandleTryLogout}
        />
        <Animated.ScrollView
          scrollEventThrolle={1}
          onScroll={
            Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { y: scrollY },
                  },
                },
              ],
            )
          }
          contentContainerStyle={{
            padding: 20,
          }}
        >
          {
              enterprises.map((e) => {
                return <Card onPress={this.onHandleClickEnterprise} enterprise={e} key={e.id} />;
              })
          }
        </Animated.ScrollView>
        {
          show
            ? <User onPress={this.onHandleTryLogout} />
            : null
        }
        {
          showModal
            ? <EnterprieDetail enterprise={enterprise} />
            : null
        }
      </ContainerView>
    );
  }
}


const mapStateToProps = ({ enterprise, login }) => ({
  enterprises: enterprise.data ? enterprise.data.enterprises : null,
  error: enterprise.error,
  success: login.successLogout,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getAllEnterpresises, logout }, dispatch)
);

Home.propTypes = {
  getAllEnterpresises: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  error: PropTypes.string,
  enterprises: PropTypes.array,
  success: PropTypes.bool,
  navigation: PropTypes.object,
};

Home.defaultProps = {
  success: true,
  navigation: {},
  enterprises: null,
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
