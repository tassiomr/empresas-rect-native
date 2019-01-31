import React from 'react';
import { ScrollView } from 'react-native';
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
    state = {
      enterprise: {},
      show: false,
      showModal: false,
    }

    async componentDidMount() {
      const { getAllEnterpresises } = this.props;
      await getAllEnterpresises();
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
      const { show, showModal, enterprise } = this.state;

      if (!enterprises) {
        return <ActivityIndicatorView />;
      }

      return (
        <ContainerView color={colors.white} error={error}>
          <ProfileBar onPress={this.onHandleShowProfile} />
          <ScrollView
            contentContainerStyle={{
              padding: 20,
            }}
          >
            {
                enterprises.map((e) => {
                  return <Card onPress={this.onHandleClickEnterprise} enterprise={e} key={e.id} />;
                })
            }
          </ScrollView>
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


const mapStateToProps = ({ enterprise }) => ({
  enterprises: enterprise.data ? enterprise.data.enterprises : null,
  error: enterprise.error,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getAllEnterpresises, logout }, dispatch)
);

Home.propTypes = {
  getAllEnterpresises: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  enterprises: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
